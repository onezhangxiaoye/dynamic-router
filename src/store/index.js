import Vue from 'vue'
import Vuex from 'vuex'
import {router, routes} from "../router";

import {getRouterComponent} from "../router/routerComponents";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        routers: routes
    },
    mutations: {
        ADD_ROUTERS(state, d) {
            /**
             * 这里在 生成动态路由的 components 的时候 不使用 动态import 或者 require
             * 否则会导致 这部分异步组件的 代码分割出现问题，如下：
             * 1：所以js都打包到 app.js中了
             * 2：未打包到 app.js中 ， 却在第一次导航到 动态路由的位置时 加载了所有的js， 当项目较大时
             *     若一次加载了20+ 个js 文件，会导致这次路由导航会在 一定延迟 后才出现页面的渲染
             */
            d = d.map(v => (v.component = getRouterComponent(v.component), v));
            state.routers = state.routers.concat(d);
            router.$addRoutes(d);
        }
    },
    actions: {},
    modules: {}
})
