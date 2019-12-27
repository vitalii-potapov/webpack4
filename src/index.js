import store from './store/index';
import './js/index';

import './scss/index.scss';
import './css/index.css';

window.Vue = require('vue');

Vue.component('example-component', () => import('./components/example/index.vue'));

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  store,
});
