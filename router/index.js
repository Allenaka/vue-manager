import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'home',
                component:() => import('../views/home')
            },
            {
                path: '/article',
                component: () => import('../views/article'),
                children: [
                    {
                        path: '/article/new',
                        component: () => import('views/article/AddArticle.vue')
                    },
                    {
                        path: '/article/edit',
                        component: () => import('views/article/EditArticle.vue')
                    },
                    {
                        path: '/article/list',
                        component: () => import('views/article/List.vue')
                    }
                ],
                redirect: '/article/list'
            },
            {
                path: '/404',
                name: '404',
                component: () => import('../views/404.vue')
            },
            {
                path: '/user',
                component: () => import('../views/User.vue')
            },
            {
                path: '/category',
                component: () => import('../views/Category.vue')
            },
            {
                path: '/tag',
                component: () => import('../views/Tag.vue')
            }
        ],
        redirect: '/home'
    },
    {
        path: '/center',
        name: 'center',
        component: () => import('views/Center.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('views/Register.vue')
    },
    {
        path: '*',
        redirect: '/404'
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes,
})

// router.beforeEach((to, from, next) => {
//     console.log(to, from)
//     next()
// })

export default router