import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import AboutMore from './views/AboutMore.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: `/`,
      name: `home`,
      component: Home,
    },
    {
      path: `/about`,
      name: `about`,
      component: About,
    },
    {
      path: `/about/more`,
      name: `about-more`,
      component: AboutMore,
      meta: { transitionName: `slide` },
    },
  ],
  mode: `history`,
});
