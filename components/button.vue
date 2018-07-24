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

<style scoped>
    @import "../theme/common.scss";
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