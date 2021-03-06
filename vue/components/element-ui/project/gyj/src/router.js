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

// manager
import Consultation from './views/manager/Consultation'
import UserInfo from './views/manager/UserInfo'
import ConsumeInfo from './views/manager/ConsumeInfo'
import Banner from './views/manager/Banner'
import DailyTask from './views/manager/DailyTask'
import Vote from './views/manager/Vote'
// import Job from './views/manager/Job'
import UserStatistics from './views/manager/statistics/UserStatistics'
import ConsumptionStatistics from './views/manager/statistics/ConsumptionStatistics'
import Staff from './views/manager/Staff'

// 工地驿站
import ConstructionSite from './views/manager/siteStation/ConstructionSite'
import PostStation from './views/manager/siteStation/PostStation'

// 超市管理
import MerchandiseOrder from './views/manager/supermarket/MerchandiseOrder'
import Commodity from './views/manager/supermarket/Commodity'
import CommodityClassification from './views/manager/supermarket/CommodityClassification'

// 食堂管理
import FoodProducts from './views/manager/canteen/FoodProducts'  // 餐品管理
import FoodProductsOrder from './views/manager/canteen/FoodProductsOrder'  // 餐品订单

// Test
import RichTest from './views/test/RichTest'
import RichTest2 from './views/test/RichTest2'

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    mode: 'hash',
    // base: process.env.BASE_URL,

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

                // 资讯管理
                { path: '/consultation', component: Consultation, name: 'consultation' },
                // 资质认证管理
                { path: '/userInfo', component: UserInfo, name: 'userInfo' },
                // 积分管理
                { path: '/consumeInfo', component: ConsumeInfo, name: 'consumeInfo' },
                // 轮播图管理
                { path: '/banner', component: Banner, name: 'banner' },
                // 签到管理
                { path: '/dailyTask', component: DailyTask, name: 'dailyTask' },
                // 投票管理
                { path: '/vote', component: Vote, name: 'vote' },
                // 职业管理
                // { path: '/job', component: Job, name: 'job' },
                // 用户统计
                { path: '/userStatistics', component: UserStatistics, name: 'userStatistics' },
                // 消费统计
                { path: '/consumptionStatistics', component: ConsumptionStatistics, name: 'consumptionStatistics' },
                // 员工管理
                { path: '/staff', component: Staff, name: 'staff' },

                /**
                 * 工地驿站
                 */
                // 工地管理
                { path: '/construction_site', component: ConstructionSite, name: 'construction_site' },
                // 驿站管理
                { path: '/post_station', component: PostStation, name: 'post_station' },

                /**
                 * 超市管理
                 */
                // 商品订单
                { path: '/merchandise_order', component: MerchandiseOrder, name: 'merchandise_order' },
                // 商品管理
                { path: '/commodity', component: Commodity, name: 'commodity' },
                // 商品分类
                { path: '/commodity_classification', component: CommodityClassification, name: 'commodity_classification' },

                /**
                 * 食堂管理
                 */
                // 餐品管理
                { path: '/food_products', component: FoodProducts, name: 'food_products' },
                // 餐品订单
                { path: '/food_products_order', component: FoodProductsOrder, name: 'food_products_order' },

                // test
                { path: '/richTest', component: RichTest, name: 'richTest' },
                { path: '/richTest2', component: RichTest2, name: 'richTest2' },
            ]
        },
        // 登陆页面
        {
            path: '/login',
            name: 'login',
            component: Login
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
