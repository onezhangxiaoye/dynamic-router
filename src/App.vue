<template>
    <div id="app">
        <div id="nav">
            <template v-for="item in routers">
                <router-link :key="item.name" :to="item.path">{{item.name}}</router-link>
                |
            </template>
        </div>

        <transition name="fade-router" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        computed: {
            ...mapState({
                routers: state => state.routers,
            })
        },
    }
</script>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100vw;
        overflow: hidden;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .fade-router-enter {
        transform: translateX(-30px);
        opacity: 0;
    }

    .fade-router-leave, .fade-router-enter-to {
        transform: translateX(0);
        opacity: 1;
    }

    .fade-router-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .fade-router-leave-active, .fade-router-enter-active {
        transition: all .5s;
    }
</style>
