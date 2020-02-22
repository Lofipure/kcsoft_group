// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// import vuetify from '@/plugins/vuetify';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

// 字体图标
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

import '@/assets/styles/main.less';
import '@/assets/styles/header.less';
import '@/assets/styles/body.less';
import '@/assets/styles/footer.less';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // vuetify
  vuetify: new Vuetify(),
}).$mount('#app');
