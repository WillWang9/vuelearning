<template>
    <div id="app">
        <router-view></router-view>
        <TabbarVue></TabbarVue>
    </div>
</template>

<script>
import TabbarVue from './components/Tabbar.vue'

export default {
    name: 'App',
    components: {
        TabbarVue
    }
}
</script>

<style lang="less" scoped>
</style>
