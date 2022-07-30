import 'dotenv/config'
import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import VueCookies from 'vue-cookies'
import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            windowWidth: window.innerWidth,
        }
    },
    mutations: {
        setWindowWidth(state) {
            state.windowWidth = window.innerWidth;
        }
    }
})

createApp(App)
    .use(store)
    .use(router)
    .use(VueCookies)
    .mount('#app')