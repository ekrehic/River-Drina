import Vue from 'vue';
import VueRouter from 'vue-router'

import ComingSoon from "@/components/ComingSoon.vue";
import LandingPage from "@/components/LandingPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', // -->  history mode leverages the history.pushState API to achieve URL navigation without a page reload
    routes: [
        {
            path: '/',
            name: 'ComingSoon',
            component: ComingSoon,
        },
        {
            path: '*',
            redirect: () => {
                return '/'
            }
        },
        {
            path: '/landing-page-draft',
            name: 'LandingPage',
            component: LandingPage,
        },
    ],
})
