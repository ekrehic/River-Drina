import Vue from 'vue'
import App from './App.vue'
import Icons from "@/components/base/Icons.vue";
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

import router from './router';

import './assets/scss/main.scss';

Vue.component('svg-icons', Icons);

import locales from "./constants/locales";
const messages = locales;

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
});

new Vue({
   router,
    i18n,
    render: h => h(App),
}).$mount('#app')