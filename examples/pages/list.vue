<template>
    <div>
        <div class="page__hd">
            <h1 class="page__title">List</h1>
            <p class="page__dsc">列表</p>
        </div>
        <div class="wxpy-cell__title">带图标、说明的列表项</div>
        <wxpy-list title="标题文111字" value="说明文111字">
            <img slot="icon" src="../assets/100x100.png" width="24" height="24" alt="">
        </wxpy-list>
        <div class="wxpy-cell__title">不带图标的列表项</div>
        <wxpy-list title="标题文111字" value="说明文111字"></wxpy-list>
    </div>
</template>

<script>
    export default {
        name: "list"
    }
</script>

<style scoped>

</style>