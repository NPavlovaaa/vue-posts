import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router;