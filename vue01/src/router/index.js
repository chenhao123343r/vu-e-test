import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () =>
    import ('../components/Home')
const About = () =>
    import ('../components/About')
const User = () =>
    import ('../components/User')
const HomeMessage = () =>
    import ('../components/HomeMessage')
const HomeNews = () =>
    import ('../components/HomeNews')
const Profile = () =>
    import ('../components/profile')

Vue.use(VueRouter)
const routes = [{
        path: '',
        //redirect重定向
        redirect: 'home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: 'home'
        },
        children: [
            //  {
            //path: '',
            //redirect重定向
            // redirect: 'news',

            // },
            {
                path: 'news',
                component: HomeNews,
                meta: {
                    title: 'news'
                }
            },
            {
                path: 'message',
                component: HomeMessage,
                meta: {
                    title: 'message'
                }
            },
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: 'about'
        }
    },
    {
        path: '/user/:userid',
        component: User,
        meta: {
            title: 'user'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: 'profile'
        }
    }

]
const router = new VueRouter({
        routes,
        //去掉井号键
        mode: 'history',
        linkActiveClass: "active"
    })
    //前置钩子，跳转之前的回调
router.beforeEach((to, from, next) => {
        // from 跳转到to 把路由的title给dom
        document.title = to.matched[0].meta.title
        console.log('b')
        next();
    })
    //后置钩子，跳转之后的回调
router.afterEach((to, from) => {
        console.log('a')
    })
    //将router对象传入到vue实例
export default router