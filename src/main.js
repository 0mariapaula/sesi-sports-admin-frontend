// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
// IMPORTAÇÃO DOS ÍCONES NECESSÁRIOS:
import {
  faUser,
  faUsers,
  faUserGear,
  faCalendarAlt,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Adiciona os ícones à biblioteca Font Awesome
library.add(faUser, faUsers, faUserGear, faCalendarAlt, faChartBar);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
