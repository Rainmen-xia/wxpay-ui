<template>
    <a href="javascript:;" class="wxpy-tabbar__item" :class="{'wxpy-bar__item-on': isActive}">
        <div class="wxpy-tabbar__icon">
            <slot name="icon"></slot>
            <slot name="icon-active"></slot>
            <sup v-if="reminder"><reminder :text="reminder"></reminder></sup>
        </div>
        <p class="wxpy-tabbar__label">
            <slot name="label"></slot>
        </p>
    </a>
</template>

<script>
    export default {
        name: "TabbarItem",
        props: {
            showDot: {
                type: Boolean,
                default: false
            },
            reminder: String
        },
        computed: {
            isActive(){
                return this.$parent.index === this.currentIndex
            }
        },
        data(){
            return{
                simple: false,
                hasActiveIcon: false
            }
        }
    }
</script>

<style lang="scss">
    .wxpy-tabbar__item {
        display: block;
        flex: 1;
        padding: 5px 0 0;
        font-size: 0;
        color: #808080;
        text-align: center;
        .wxpy-tabbar__icon{
            position: relative;
            display: inline-block;
            width: 27px;
            height: 27px;
        & img{
            width: 100%;
            height: 100%;
        }
        &>sup{
            position: absolute;
            top: -8px;
            left: 100%;
            transform: translateX(-50%);
            z-index: 100;
        }
        }
        .wxpy-tabbar__label {
            text-align: center;
            color: #808080;
            font-size: 10px;
            line-height: 1.8;
        }
    }
    .wxpy-bar__item-on .wxpy-tabbar__label{
        color: #09BB07;
    }
</style>