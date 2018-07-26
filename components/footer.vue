<template>
    <div>
        <div class="wxpy-footer wxpy-footer_fixed-bottom">
            <p class="wxpy-footer__links">
                <a href="javascript:;" class="wxpy-footer__link">
                    <slot></slot>
                </a>
            </p>
            <p class="wxpy-footer__text">Copyright © 2018-2018 wxpy-ui</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WxpyFooter"
    }
</script>

<style lang="scss">
    .wxpy-footer{
        color: #808080;
        font-size: 14px;
        text-align: center;
        .wxpy-footer__links{
            font-size: 0;
            .wxpy-footer__link{
                display: inline-block;
                vertical-align: top;
                margin: 0 .62em;
                position: relative;
                font-size: 14px;
                color: #586C94;
            }
        .wxpy-footer__text{
            padding: 0 .34em;
            font-size: 12px;
        }
        }
    }
    .wxpy-footer_fixed-bottom{
        position: fixed;
        bottom: .52em;
        left: 0;
        right: 0;
    }
</style>