import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard';
import Categories from './views/Categories';
import Products from './views/Products';
import Daily from './views/Sales/Daily';
import Monthly from './views/Sales/Monthly';
import Yearly from './views/Sales/Yearly';

Vue.use(Router);

const routes = [
    {
        path: '/admin',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/admin/categories',
        name: 'categories',
        component: Categories
    },
    {
        path: '/admin/products',
        name: 'products',
        component: Products
    },
    {
        path: '/admin/sales/daily',
        name: 'daily',
        component: Daily
    },
    {
        path: '/admin/sales/monthly',
        name: 'monthly',
        component: Monthly
    },
    {
        path: '/admin/sales/yearly',
        name: 'yearly',
        component: Yearly
    },
];

const router = new Router({
    mode: 'history',
    // linkActiveClass: 'active',
    routes
});

export default router;