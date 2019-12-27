window.Vue = require('vue');

Vue.component('example-component', () => import('../components/example/index.vue'));

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
});
