import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
const app = createApp(App);
app.use(router);
app.use(VueSplide);
import "@/assets/reset.css";

app.mount("#app");
