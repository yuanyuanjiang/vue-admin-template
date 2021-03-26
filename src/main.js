import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import i18n from "./lang";
import "@/styles/index.scss"; // global css
import echarts from "echarts";

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons"; // icon
import "@/permission"; // permission control
import china from "./json/geojson.json";

// 引入全局过滤函数
import * as _filter from "@/utils/filters";
Object.keys(_filter).forEach(item => {
  Vue.filter(item, _filter[item]);
});

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI, { i18n: (key, value) => i18n.t(key, value) });
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
echarts.registerMap("china", china);

new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: h => h(App)
});
