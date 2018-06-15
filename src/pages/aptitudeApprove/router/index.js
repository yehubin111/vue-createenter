import Vue from 'vue'
import Router from 'vue-router'
import page from '../components/index'

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: page
    }]
})