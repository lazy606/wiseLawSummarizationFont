import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import TextInput from "../components/TextInput.vue";
import FileInput from "../components/FileInput.vue";
import TextOutput from "../components/TextOutput.vue";


const routes: Array<RouteRecordRaw> = [

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;