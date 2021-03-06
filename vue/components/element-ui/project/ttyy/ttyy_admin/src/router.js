import Vue from 'vue'
import Router from 'vue-router'

import md5 from 'js-md5';  //md5加密

// index
import Index from './views/Index'

// main
import Home from './views/main/Home'
import NotFound from './views/main/NotFound'

// admin
import Login from './views/admin/Login'
import ModifyPassword from './views/admin/ModifyPassword'

// manager
import User from './views/manager/User'
import Banner from './views/manager/Banner'
import RedeemCode from './views/manager/RedeemCode'
import Order from './views/manager/Order'
import Product from './views/manager/Product'
import Statistics from './views/manager/Statistics'
import Account from './views/manager/Account'

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    mode: 'hash',
    base: process.env.BASE_URL,

    routes: [
        // 如果是根路径的话，重定向到index路径
        {
            path: '/',
            redirect: '/index'
        },
        // 如果访问index则跳转到index路径
        {
            path: '/index',
            name: '',
            component: Index,
            children: [
                { path: '', component: Home },
                { path: '/home', component: Home, name: 'home' },

                // 管理员
                { path: '/account', component: Account, name: 'account' },
                // 用户管理
                { path: '/user', component: User, name: 'user' },
                // banner管理
                { path: '/banner', component: Banner, name: 'banner' },
                // 兑换码管理
                { path: '/redeem_code', component: RedeemCode, name: 'redeem_code' },
                // 订单管理
                { path: '/order', component: Order, name: 'order' },
                // 商品管理
                { path: '/product', component: Product, name: 'product' },
                // 数据统计
                { path: '/statistics', component: Statistics, name: 'statistics' }

            ]
        },
        // 登陆页面
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        // 修改密码
        {
            path: '/modify_password',
            name: 'modify_password',
            component: ModifyPassword
        },
        // 404
        {
            path: '*',
            name: '404',
            component: NotFound
        },
    ]
});

// 添加路由守卫
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.code == md5("0") ? true : false;
    if (to.path == "/login" || to.path == '/register') {
        next();
    } else {
        isLogin ? next() : next("/login");
    }
});

export default router;
