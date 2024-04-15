import { createApp } from "vue";
import store from "./store";

import "@/assets/style/style.scss";

import App from "./App.vue";

const app = createApp(App);

app.use(store);
app.mount("#app");
