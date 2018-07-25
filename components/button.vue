<template>
        <a
        class="wxpy-btn"
        :disabled="disabled"
        :class="['wxpy-btn_' + type]"
        >
        <span class="wxpy-loading" v-if="showLoading"></span>
            <slot></slot>
        </a>
</template>

<script>
    export default {
        name: "WxpyBtn",
        props: {
            type: {
                type: String,
                default: 'primary'
            },
            disabled: Boolean,
            showLoading: Boolean
        },
        methods: {
        },
        computed: {
        }
    }
</script>

<style lang="scss">
    @import "../theme/common.scss";
    .wxpy-btn {
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-left: 14px;
        padding-right: 14px;
        box-sizing: border-box;
        font-size: 18px;
        text-align: center;
        text-decoration: none;
        color: #FFFFFF;
        line-height: 2.55555556;
        border-radius: 5px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        overflow: hidden;
    &:after {
         content: " ";
         width: 200%;
         height: 200%;
         position: absolute;
         top: 0;
         left: 0;
         border: 1px solid rgba(0, 0, 0, 0.2);
         transform: scale(0.5);
         transform-origin: 0 0;
         box-sizing: border-box;
         border-radius: 10px;
     }
    }
    .wxpy-btn_primary {
        background-color: #1AAD19;
    }
    .wxpy-btn_warn {
        background-color: #E64340;
    }
    .wxpy-btn_default {
        background-color: #F8F8F8;
        color: #000000;
    }
    .wxpy-btn_plain-default {
        color: #353535;
        border: 1px solid #353535;
    }
    .wxpy-btn_plain-primary{
        color: #1aad19;
        border: 1px solid #1aad19;
    }
    .wxpy-btn_mini-primary {
        display: inline-block;
        padding: 0 1.32em;
        line-height: 2.3;
        font-size: 13px;
        background-color: #1AAD19;
    }
    .wxpy-btn_mini-warn {
        display: inline-block;
        padding: 0 1.32em;
        line-height: 2.3;
        font-size: 13px;
        background-color: #E64340;
    }
</style>