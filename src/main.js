import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Tailwind CSS and Font Awesome Icons
import "./assets/styles/app.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia);

app.mount("#app");
