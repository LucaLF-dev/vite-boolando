import { createApp } from "vue";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUser,faHeart } from "@fortawesome/free-regular-svg-icons";

import {  faBagShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faHeart, faBagShopping, faUser);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
