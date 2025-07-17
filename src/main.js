import { createApp } from 'vue';
import App from './App.vue';
import "./App.css";
import routers from './routers';

const app = createApp(App);

app.use(routers);

app.mount('#app');