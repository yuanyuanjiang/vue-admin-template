import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: resolve => require(["@/views/login/index"], resolve),
    hidden: true
  },

  {
    path: "/register",
    component: resolve => require(["@/views/register/index"], resolve),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    hidden: true
  }
  // 404 page must be placed at the end !!!
  // { path: "*", redirect: "/404", hidden: true }
];

export const asyncRoutes = [
  {
    path: "/404",
    component: resolve => require(["@/views/404"], resolve),
    hidden: true
  },

  // 仪表盘
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Layout,
    alwaysShow: true,
    meta: {
      authority: ["analysis", "user_statistics", "device_statistics"],
      title: "仪表盘",
      icon: "el-icon-dashboard"
    },
    children: [
      {
        path: "",
        name: "UserStatistics",
        component: resolve =>
          require(["@/views/userStatistics/index"], resolve),
        meta: { authority: ["user_statistics"], title: "用户统计" }
      }
    ]
  },

  // 设备管理
  {
    path: "/device",
    component: Layout,
    name: "Device",
    meta: {
      authority: ["device_list", "device_detail"],
      title: "设备管理",
      icon: "el-icon-equipment"
    },
    alwaysShow: true,
    children: [
      {
        path: "list",
        name: "device_list",
        component: resolve => require(["@/views/device/index"], resolve),
        meta: {
          authority: ["device_list"],
          title: "设备列表"
        }
      },
      {
        path: "detail/:deviceCode",
        name: "device_detail",
        component: resolve => require(["@/views/device/deviceDetail"], resolve),
        meta: {
          authority: ["device_detail"],
          title: "设备详情"
        },
        hidden: true
      }
    ]
  },
  // 记录管理
  {
    path: "/record",
    component: Layout,
    name: "Record",
    meta: {
      authority: ["record_list"],
      title: "记录管理",
      icon: "el-icon-Record"
    },
    alwaysShow: true,
    children: [
      {
        path: "list",
        name: "Record_list",
        component: resolve => require(["@/views/Record/index"], resolve),
        meta: { authority: ["record_list"], title: "记录列表" }
      }
    ]
  },

  // 商户管理
  {
    path: "/merchant",
    component: Layout,
    name: "Merchant",
    meta: {
      authority: [
        "merchant_info",
        "merchant_list",
        "merchant_detail",
        "merchant_add"
      ],
      title: "商户管理",
      icon: "el-icon-Business"
    },
    alwaysShow: true,
    children: [
      {
        path: "info",
        name: "Info",
        component: resolve =>
          require(["@/views/Merchant/merchartDetail"], resolve),
        meta: { authority: ["merchant_info"], title: "商户详情" },
        hidden: false
      },
      {
        path: "list",
        name: "Merchant_list",
        component: resolve => require(["@/views/Merchant/index"], resolve),
        meta: { authority: ["merchant_list"], title: "子商户列表" }
      },
      {
        path: "detail/:id",
        name: "Merchant_detail",
        component: resolve => require(["@/views/Merchant/detail"], resolve),
        meta: { authority: ["merchant_detail"], title: "子商户详情" },
        hidden: true
      },
      {
        path: "create",
        name: "Merchant_create",
        component: resolve => require(["@/views/Merchant/create"], resolve),
        meta: { authority: ["merchant_create"], title: "创建子商户" },
        hidden: true
      }
    ]
  },

  // 用户管理
  {
    path: "/consumer",
    component: Layout,
    name: "Consumer",
    meta: {
      authority: ["consumer_list", "consumer_detail"],
      title: "用户管理",
      icon: "el-icon-User"
    },
    alwaysShow: true,
    children: [
      {
        path: "list",
        name: "Consumer_list",
        component: resolve => require(["@/views/Consumer/index"], resolve),
        meta: { authority: ["consumer_list"], title: "用户列表" }
      },
      {
        path: "detail/:consumerCode",
        name: "Consumer_detail",
        component: resolve => require(["@/views/Consumer/detail"], resolve),
        meta: { authority: ["consumer_detail"], title: "用户详情" },
        hidden: true
      }
    ]
  },
  // 账户管理
  {
    path: "/account",
    component: Layout,
    name: "Account",
    meta: {
      authority: ["account_list", "role_list", "role_detail", "role_create"],
      title: "账户管理",
      icon: "el-icon-Account"
    },
    alwaysShow: true,
    children: [
      {
        path: "list",
        name: "Account_list",
        component: resolve => require(["@/views/Account/index"], resolve),
        meta: { authority: ["account_list"], title: "账户列表" }
      },
      {
        path: "role",
        name: "role",
        component: resolve => require(["@/views/Role/index"], resolve),
        meta: { authority: ["role_list"], title: "角色列表" }
      },
      {
        path: "role/edit/:roleId",
        name: "role_detail",
        component: resolve => require(["@/views/Role/edit"], resolve),
        meta: { authority: ["role_detail"], title: "编辑角色" },
        hidden: true
      },
      {
        path: "role/create",
        name: "_create",
        component: resolve => require(["@/views/Role/create"], resolve),
        meta: { authority: ["role_create"], title: "创建角色" },
        hidden: true
      }
    ]
  },
  {
    path: "/demo",
    component: Layout,
    name: "Demo",
    meta: {
      title: "demo管理",
      icon: "dashboard"
    },
    alwaysShow: true,
    children: [
      {
        path: "slot",
        name: "slot",
        component: resolve => require(["@/views/demo/slot/index"], resolve),
        meta: { title: "slot" }
      },
      {
        path: "nextTick",
        name: "nextTick",
        component: resolve => require(["@/views/demo/nextTick/index"], resolve),
        meta: { title: "nextTick" }
      },
      {
        path: "filter",
        name: "filter",
        component: resolve => require(["@/views/demo/filter/index"], resolve),
        meta: { title: "filter" }
      },
      {
        path: "computed",
        name: "computed",
        component: resolve => require(["@/views/demo/computed/index"], resolve),
        meta: { title: "computed" }
      },
      {
        path: "watch",
        name: "watch",
        component: resolve => require(["@/views/demo/watch/index"], resolve),
        meta: { title: "watch" }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
Router.selfaddRoutes = function(params) {
  Router.matcher = new Router().matcher;
  Router.addRoutes(params);
};
export default router;
