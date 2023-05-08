import {createRouter, createWebHashHistory, Router, RouteRecordRaw} from 'vue-router'

import Login from '../pages/login/Login.vue'
import Home from '../pages/home/Index.vue'

import BaseLayout from '../pages/layout/BaseLayout.vue'

import ProjectList from '../pages/project/ProjectList.vue'
import ProjectKanban from '../pages/project/Kanban.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        component: BaseLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: '/project',
                name: 'Project',
                component: ProjectList
            },
            {
                path: '/project/:id/kanban',
                name: 'ProjectKanban',
                component: ProjectKanban
            }
        ]
    }
]

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router