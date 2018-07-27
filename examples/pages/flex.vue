<template>
    <div>
        <div class="page__hd">
            <h1 class="page__title">Flex</h1>
            <p class="page__dsc">Flex布局</p>
        </div>
        <div class="page__hd" style="padding: 5px"><p class="page__dsc" style=";text-align: center">等分布局</p></div>
        <flex-box>
            <flex-item><div class="flex-demo">1</div></flex-item>
        </flex-box>
        <flex-box>
            <flex-item><div class="flex-demo">2</div></flex-item>
            <flex-item><div class="flex-demo">2</div></flex-item>
        </flex-box>
        <flex-box>
            <flex-item><div class="flex-demo">3</div></flex-item>
            <flex-item><div class="flex-demo">3</div></flex-item>
            <flex-item><div class="flex-demo">3</div></flex-item>
        </flex-box>
        <flex-box>
            <flex-item><div class="flex-demo">4</div></flex-item>
            <flex-item><div class="flex-demo">4</div></flex-item>
            <flex-item><div class="flex-demo">4</div></flex-item>
            <flex-item><div class="flex-demo">4</div></flex-item>
        </flex-box>
        <div class="page__hd" style="padding: 5px"><p class="page__dsc" style=";text-align: center">不等分布局</p></div>
        <flex-box>
            <flex-item><div class="flex-demo">1</div></flex-item>
            <flex-item :span="4"><div class="flex-demo">4</div></flex-item>
            <flex-item><div class="flex-demo">1</div></flex-item>
        </flex-box>
        <div class="page__hd" style="padding: 5px"><p class="page__dsc" style=";text-align: center">垂直</p></div>
        <flex-box orient="vertical">
            <flex-item><div class="flex-demo">1</div></flex-item>
            <flex-item><div class="flex-demo">1</div></flex-item>
        </flex-box>
    </div>
</template>

<script>
    export default {
        name: "flex"
    }
</script>

<style lang="scss">
    .flex-demo {
        padding: 0 10px;
        background-color: #ebebeb;
        height: 2.3em;
        line-height: 2.3em;
        text-align: center;
        color: #cfcfcf;
    }
</style>