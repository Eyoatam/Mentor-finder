import { createRouter, createWebHistory } from 'vue-router';
import MentorDetail from './pages/mentors/MentorDetail.vue';
import MentorsList from './pages/mentors/MentorsList.vue';
import MentorRegisteration from './pages/auth/Register.vue';
import ContactMentor from './pages/requests/ContactMentor.vue';
import RecievedRequests from './pages/requests/RecievedRequests.vue';
import Login from './pages/auth/Login.vue';
import NotFound from './pages/NotFound.vue';

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
    { path: '/register', component: MentorRegisteration },
    { path: '/auth/login', component: Login },
    { path: '/requests', component: RecievedRequests },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
