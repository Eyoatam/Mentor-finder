import { createRouter, createWebHistory } from 'vue-router';
import MentorDetail from './pages/mentors/MentorDetail.vue';
import MentorsList from './pages/mentors/MentorsList.vue';
import MentorRegisteration from './pages/auth/Register.vue';
import ContactMentor from './pages/requests/ContactMentor.vue';
import RecievedRequests from './pages/requests/RecievedRequests.vue';
import Login from './pages/auth/Login.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/mentors' },
    { path: '/mentors', component: MentorsList },
    {
      path: '/mentors/:id',
      props: true,
      component: MentorDetail,
      children: [{ path: 'contact', component: ContactMentor }]
    },
    {
      path: '/register',
      component: MentorRegisteration,
      meta: { requiresAuth: true }
    },
    { path: '/auth/login', component: Login, meta: { requiresNoAuth: true } },
    {
      path: '/requests',
      component: RecievedRequests,
      meta: { requiresAuth: true }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth/login');
  } else if (to.meta.requiresNoAuth && store.getters.isAuthenticated) {
    next('/mentors');
  } else {
    next();
  }
});

export default router;
