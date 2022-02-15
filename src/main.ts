import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faPencil, faCalendarDays, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faStar, faFile, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';
import App from './App.vue';

library.add(faUserSecret, faPencil, faStar, faCalendarDays, faFile, faComment, faPlus, faXmark);

const app = createApp(App);

app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
