<template>
    <div class="wxpy-cells">
    <div class="wxpy-cell">
        <slot></slot>
        <div class="wxpy-cell__bd">
            <input class="wxpy-input" type="text" placeholder="请输入文本">
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "WxpyInput"
    }
</script>

<style scoped lang="scss">
    .wxpy-cells {
        margin-top: 1.1em;
        background-color: #FFFFFF;
        line-height: 1.4;
        font-size: 17px;
        overflow: hidden;
        position: relative;
        .wxpy-cell {
            padding: 10px 15px;
            position: relative;
            display: flex;
            align-items: center;
            .wxpy-cell__bd{
                flex: 1;
                .wxpy-input {
                    width: 100%;
                    border: 0;
                    outline: 0;
                    -webkit-appearance: none;
                    background-color: transparent;
                    font-size: inherit;
                    color: inherit;
                    height: 1.4em;
                    line-height: 1.4;
                }
            }
        }
    }
</style>