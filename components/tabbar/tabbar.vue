<template>
    <div class="wxpy-tabbar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WxpyTabbar"
    }
</script>

<style lang="scss">
    .wxpy-tabbar{
        display: flex;
        position: absolute;
        z-index: 500;
        bottom: 0;
        width: 100%;
        background-color: #F7F7FA;
    }
</style>