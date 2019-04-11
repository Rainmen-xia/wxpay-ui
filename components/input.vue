<template>
    <div class="wxpy-cells">
        <div class="wxpy-cell">
            <slot></slot>
            <div class="wxpy-cell__bd">
                <textarea class="wxpy-textarea"
                          :placeholder="placeholder"
                          v-if="type === 'textarea'"
                          :rows="rows"
                          :disabled="disabled">
                </textarea>
                <input class="wxpy-input"
                       v-else
                       type="type"
                       :disabled="disabled"
                       :placeholder="placeholder"
                >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WxpyInput",
        props: {
            type: {
                type: String,
                default: 'text'
            },
            rows: String,
            placeholder: String,
            disabled: Boolean
        },
    }
</script>

<style lang="scss">
    @import "../theme/common";
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

    .wxpy-textarea {
        display: block;
        border: 0;
        resize: none;
        width: 100%;
        color: inherit;
        font-size: 1em;
        line-height: inherit;
        outline: 0;
    }

</style>