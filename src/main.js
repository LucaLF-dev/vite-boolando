import { createApp } from "vue";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUser,faHeart } from "@fortawesome/free-regular-svg-icons";

import {  faBagShopping } from "@fortawesome/free-solid-svg-icons";

import {  faSquareFacebook,faSquareInstagram,faSquareTwitter,faSquarePinterest,faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(faHeart, faBagShopping, faUser, faSquareFacebook,faSquareInstagram,faSquareTwitter,faSquarePinterest,faSquareYoutube);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
