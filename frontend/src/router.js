import Vue from 'vue'
import startPage from "./components/startPage";
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'startPage',
            component: startPage
        }
    ]
})

