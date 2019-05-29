import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import grid from '@/components/grid';
import vant from '@/components/vant'

Vue.use(Router);

export default new Router({
    routes: [

        {
            path: '/',
            name: 'vant',
            component: vant
        },
        {
            path: '/grid',
            name: 'grid',
            component: grid
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ],
});
