import Vue from 'vue';
import App from './app.vue';
import routes from './route';
import wxpayui  from '../index.js';
import VueRouter from 'vue-router';
console.log(routes)
document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);

Vue.use(wxpayui);
Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  routes
});

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
});

let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});
