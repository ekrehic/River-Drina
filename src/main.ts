import Vue from 'vue'
import App from './App.vue'

import router from './router';

import './assets/scss/main.scss';

// createApp(App).mount('#app')

new Vue({
   router,
    render: h => h(App),
}).$mount('#app')