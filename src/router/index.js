import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)


import Main from "@/components/Main";

export default new VueRouter({
    routes: [
        {
            path: '/main',
            name: 'main',
            component: Main
        }
    ]
})