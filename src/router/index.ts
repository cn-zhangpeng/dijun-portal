import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

import Home from '../pages/home/Index.vue'
import ProjectList from '../pages/project/ProjectList.vue'
import ProjectKanban from '../pages/project/Kanban.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/project',
        name: 'Project',
        component: ProjectList
    },
    {
        path: '/kanban',
        name: 'ProjectKanban',
        component: ProjectKanban
    }
]

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router