import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Member from './Member.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/members/:id', component: Member }
];

const router = new VueRouter({ 
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
