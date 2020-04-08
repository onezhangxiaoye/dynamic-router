<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="addRouter">点击添加动态路由</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    /**
     * 这里的参数 模拟的 接口返回的路由信息，用户创建动态路由
     */
    const requestRouters = [
        {
            path: '/page1',
            name: 'page1',
            component: 'Page1'
        },
        {
            path: '/page2',
            name: 'page2',
            component: 'Page2'
        },
    ];

    export default {
        name: 'about',
        methods: {
            ...mapMutations(['ADD_ROUTERS']),
            addRouter() {
              this.ADD_ROUTERS(requestRouters);
            }
        },

    }
</script>
