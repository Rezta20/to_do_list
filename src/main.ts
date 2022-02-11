import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';
import App from './App.vue';

library.add(faUserSecret);

const app = createApp(App);

app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
