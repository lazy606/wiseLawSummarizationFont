import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "textInput",
        component: () => import("../components/TextInput.vue")
    },
    {
        path: "/fileInput",
        name: "fileInput",
        component: () => import("../components/fileInput.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;