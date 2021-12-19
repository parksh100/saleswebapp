import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'



createApp(App).use(router).mixin(mixins).use(store).mount('#app');

window.Kakao.init("e89f51275ae4cf28aaa597679fd80f58");