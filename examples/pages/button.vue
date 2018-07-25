<template>
    <div>
        <div class="page__hd">
            <h1 class="page__title">Button</h1>
            <p class="page__dsc">按钮</p>
        </div>
        <wxpy-btn type="primary">
            页面主操作 Normal
        </wxpy-btn>
        <wxpy-btn type="default">
            页面次操作 Normal
        </wxpy-btn>
        <wxpy-btn type="warn">
            危险 Normal
        </wxpy-btn>
        <div style="width: 60%;margin: 15px auto 0">
            <wxpy-btn type="plain-default">按钮</wxpy-btn>
            <wxpy-btn type="plain-primary">按钮</wxpy-btn>
            <wxpy-btn type="mini-primary">按钮</wxpy-btn>
            <wxpy-btn type="mini-warn">按钮</wxpy-btn>
            <wxpy-btn type="mini-primary">按钮</wxpy-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "button"
    }
</script>

<style scoped>
.wxpy-btn + .wxpy-btn{
    margin-top: 15px;
}
</style>