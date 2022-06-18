<template>
    <div id="app">
        <TabbarVue></TabbarVue>
        <router-view></router-view>
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
