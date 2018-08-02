<template>
    <span v-text="text"
          :class="['wxpy-reminder',
          {'wxpy-reminder-dot': typeof text === 'undefined',
          'wxpy-reminder-single': typeof text !== 'undefined'&&text.toString().length===1}]"></span>
</template>

<script>
    export default {
        name: "reminder",
        props: {
            text: [String,Number]
        }
    }
</script>

<style lang="scss">
    .wxpy-reminder {
        display: inline-block;
        text-align: center;
        background: #F43530;
        color: #fff;
        font-size: 12px;
        height: 16px;
        line-height: 16px;
        border-radius: 8px;
        padding: 0 6px;
        background-clip: padding-box;
        vertical-align: middle;
    }
    .wxpy-reminder-single {
        padding: 0;
        width: 16px;
    }
    .wxpy-reminder-dot {
        height: auto;
        padding: 5px
    }
</style>