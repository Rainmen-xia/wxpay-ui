<template>
        <a
        class="wxpy-btn"
        :disabled="disabled"
        :class="['wxpy-btn_' + type]"
        @click="onClick">
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
                default: 'primary',
                validator(value) {
                    return [
                        'primary',
                        "default",
                        "warn"
                    ].indexOf(value) > -1;
                }
            },
            disabled: Boolean,
            showLoading: Boolean
        },
        methods: {
            onClick() {
            }
        },
        computed: {
        }
    }
</script>

<style scoped>
    @import "../theme/common.scss";
</style>