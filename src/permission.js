import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";
import { constantRoutes, asyncRoutes } from "@/router";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login", "/register"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" });
      NProgress.done();
    } else {
      const hasGetUserInfo = store.getters.name;
      if (hasGetUserInfo) {
        next();
      } else {
        try {
          // get user info
          await store.dispatch("user/getInfo");
          const authority = localStorage.getItem("authority");
          const accessRoutes = generateRoutes(JSON.parse(authority));
          const newRoutes = getNewRoutes(constantRoutes, accessRoutes);
          router.options.routes = newRoutes;
          router.addRoutes(accessRoutes);
          next({ ...to, replace: true });
          // next();
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch("user/resetToken");
          // Message.error(error || "Has Error");
          console.log("error--", error);
          Message.error("Has Error");
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

/**
 * Use meta.role to determine if the current user has permission
 * @param authority
 * @param route
 */
function hasPermission(authority, route) {
  if (route.meta && route.meta.authority) {
    return authority.some(role => route.meta.authority.includes(role));
  } else {
    return true; // 路由中没有写明权限的，就是任何身份都可以访问
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param authority
 */
function filterAsyncRoutes(routes, authority) {
  const res = [];

  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(authority, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, authority);
      }
      res.push(tmp);
    }
  });

  return res;
}
function generateRoutes(authority) {
  let accessedRoutes;
  if (authority.includes("admin")) {
    // admin是所有菜单权限
    accessedRoutes = asyncRoutes || [];
  } else {
    accessedRoutes = filterAsyncRoutes(asyncRoutes, authority);
  }
  return accessedRoutes;
}

function getNewRoutes(routes1, routes2) {
  const all = routes1.concat(routes2);
  return all;
}
