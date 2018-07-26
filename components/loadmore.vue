<template>
    <div class="wxpy-loadmore" :class="{'wxpy-loadmore_line':!showLoading, 'wxpy-loadmore_dot': !showLoading && !tip}">
        <i class="wxpy-loading" v-if="showLoading"></i>
        <span class="wxpy-loadmore__tips" v-show="tip || !showLoading">{{tip}}</span>
    </div>
</template>

<script>
    export default {
        name: "LoadMore",
        props: {
            showLoading: {
                type: Boolean,
                default: true
            },
            tip: String
        }
    }
</script>

<style lang="scss">
    .wxpy-loadmore{
        width: 65%;
        margin: 1.5em auto;
        line-height: 1.6em;
        font-size: 14px;
        text-align: center;
    }
    .wxpy-loadmore_line{
        display: flex;
        border-top: 0;
        margin-top: 2.4em;
    &:before,&:after{
        position: relative;
        top: -1px;
        flex: 1;
        content: " ";
        border-top: 1px solid #E5E5E5;
    }
    }
    .wxpy-loadmore_dot .wxpy-loadmore__tips {
        padding: 0 .16em;
        .wxpy-loadmore__tips{
            position: relative;
            top: -0.9em;
            color: #999999;
        &:before{
            content: " ";
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #E5E5E5;
            display: inline-block;
            position: relative;
            vertical-align: 0;
            top: -0.16em;
        }
        }
    }
</style>