import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import BookList from '../views/BookList.vue';
import BookDetail from '@/components/BookDetail.vue';
import Item from '../views/Item.vue';
import NotFound from '@/components/NotFound.vue';
import User from '@/views/User.vue';
import UserProfile from '@/components/UserProfile.vue';
import UserPost from '@/components/UserPost.vue';
import HomeSub from '@/components/HomeSub.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      sub: HomeSub,
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    //親
    path: '/book',
    name: 'BookList',
    component: BookList,
  },
  {
    //子
    path: '/book/:id',
    name: 'Book',
    component: BookDetail,
    props: (route) => ({
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content,
    }),
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: Item,
    
    // ルート単位のナビゲーションガード
    // beforeEnter: (to, from, next) => {},
  },
  {
    path: '*',
    // redirect: '/',
    name: 'NotFound',
    component: NotFound,
  },
  {
    //ネストされたルートにしたい場合、nameは書かない。
    path: '/user',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile,
      },
      {
        path: 'post',
        component: UserPost,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// グローバルパターンのナビゲーションガード
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
});

export default router;
