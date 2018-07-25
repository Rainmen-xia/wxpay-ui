<template>
        <div>
                <div class="page__hd">
                        <h1 class="page__title">Input</h1>
                        <p class="page__dsc">表单输入</p>
                </div>
                <div class="wxpy-cell__title">文本框</div>
                <wxpy-input placeholder="message"></wxpy-input>
                <div class="wxpy-cell__title">请输入邮箱</div>
                <wxpy-input placeholder="email"></wxpy-input>
                <div class="wxpy-cell__title">文本域</div>
                <wxpy-input placeholder="message" rows="4" type="textarea"></wxpy-input>
        </div>
</template>

<script>
    export default {
        name: "input"
    }
</script>

<style lang="scss">
    @import "../../theme/common";
</style>