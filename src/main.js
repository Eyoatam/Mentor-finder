import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index';

import BaseCard from './utils/BaseCard.vue';
import BaseButton from './utils/BaseButton.vue';
import BaseBadge from './utils/BaseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
