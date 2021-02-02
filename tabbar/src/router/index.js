import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Buy = () =>
    import ('../views/buy/Buy')
const Category = () =>
    import ('../views/category/Category')
const Setting = () =>
    import ('../views/setting/Setting')

Vue.use(VueRouter)
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/buy',
        component: Buy
    },
    {
        path: '/setting',
        component: Setting
    },
]
const router = new VueRouter({
    routes
})

export default router