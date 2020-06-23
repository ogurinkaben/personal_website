import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import BlogHome from '@/components/BlogHome'
import BlogPost from '@/components/BlogPost'
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      order: 0
    }
  },
  {
    path: '/about-me',
    name: 'About',
    meta: {
      order: 1
    },
    component: () => import('../views/About.vue')
  },
  {
    path: '/my-blog',
    name: 'Blog',
    meta: {
      title: 'Ogurinka Benjamin - My story',
      order: 2
    },
    component: () => import('../views/Blog.vue'),
    children: [{
        path: '/my-blog',
        component: BlogHome,
        name: 'blog-home'
      },
      {
        path: '/blog/post/:articleId/',
        component: BlogPost,
        name: 'blog-post'
      }
    ]
  }
]
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 }
  }
};
const router = new VueRouter({
  scrollBehavior,
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if (!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
      tag.setAttribute('data-vue-router-controlled', '');
      return tag;
    })
    .forEach(tag => document.head.appendChild(tag));
  next();
})
router.afterEach((to, from) => {
  NProgress.done()
})
export default router
