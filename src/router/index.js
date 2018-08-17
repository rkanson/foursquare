import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import GameBoard from '@/components/GameBoard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/game',
      name: 'GameBoard',
      component: GameBoard,
    },
  ],
});
