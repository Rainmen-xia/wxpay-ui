<template>
    <div>
        <div class="wxpy-cells">
            <div class="wxpy-cell">
                <div class="wxpy-cell__hd"><slot name="icon"></slot></div>
                <slot name="title"><div class="wxpy-cell__bd"><p v-text="title"></p></div></slot>
                <slot name="value"><div class="wxpy-cell__ft"><span v-text="value"></span></div></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WxpyList",
        props: {
            icon: String,
            title: String,
            value: String
        }
    }
</script>

<style lang="scss">
    @import "../theme/common";
</style>