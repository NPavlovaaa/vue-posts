import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router;