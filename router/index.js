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
                component: () => import('../views/Article.vue')
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