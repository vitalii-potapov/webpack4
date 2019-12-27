window.Vue = require('vue');

Vue.component('example-component', () => import('../components/example/index.vue'));

const app = new Vue({
  el: '#app',
});
