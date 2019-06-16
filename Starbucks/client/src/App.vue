<template>
    <div id="app">
        <keep-alive include="home">
            <router-view/>
        </keep-alive>
        
    </div>
</template>

<script>
    export default {
        name: "App",
    };
</script>

<style lang="scss">
    @import "./static/scss/common.scss";
    @import "./static/scss/_minix.scss";
    html,
    body,
    #app,
    .wrap {
        width: 100%;
        height: 100%;
    }
</style>
