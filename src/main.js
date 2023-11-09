import { createApp } from "vue";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUser,faHeart,faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import {  faBagShopping, faInfo } from "@fortawesome/free-solid-svg-icons";

import {  faSquareFacebook,faSquareInstagram,faSquareTwitter,faSquarePinterest,faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(faCircleXmark,faHeart, faBagShopping, faUser, faSquareFacebook,faSquareInstagram,faSquareTwitter,faSquarePinterest,faSquareYoutube, faInfo);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
