<template>
    <div>
        <wxpy-tabbar>
            <tabbar-item reminder="8">
                <img src="../assets/100x100.png" slot="icon" alt="">
                <span slot="label">微信</span>
            </tabbar-item>
            <tabbar-item>
                <img src="../assets/100x100.png" slot="icon" alt="">
                <span slot="label">通讯录</span>
            </tabbar-item>
            <tabbar-item show-dot>
                <img src="../assets/100x100.png" slot="icon" alt="">
                <span slot="label">发现</span>
            </tabbar-item>
            <tabbar-item>
                <img src="../assets/100x100.png" slot="icon" alt="">
                <span slot="label">我</span>
            </tabbar-item>
        </wxpy-tabbar>
    </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>

</style>