import Vue from "vue";
import App from "./App.vue";
import singleSpaVue from "single-spa-vue";

Vue.config.productionTip = false;

const vueLifecycle = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
  },
});

export const bootstrap = vueLifecycle.bootstrap;
export const mount = vueLifecycle.mount;
export const unmount = vueLifecycle.unmount;
