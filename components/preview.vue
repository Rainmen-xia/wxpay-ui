<template>
    <div class="wxpy-form-preview">
        <div class="wxpy-form-preview__hd">
            <div class="wxpy-form-preview__item" v-for="item in list">
                <label class="wxpy-form-preview__label">{{item.money}}</label>
                <em class="wxpy-form-preview__value">{{item.price}}</em>
            </div>
        </div>
        <div class="wxpy-form-preview__bd">
            <div class="wxpy-form-preview__item" v-for="item in list">
                <label class="wxpy-form-preview__label">{{item.label}}</label>
                <span class="wxpy-form-preview__value">{{item.value}}</span>
            </div>
        </div>
        <div class="wxpy-form-preview__ft">
            <button v-if="btn" type="submit" class="wxpy-form-preview__btn wxpy-form-preview__btn_default" href="javascript:;"><slot name="preview-btn"></slot></button>
            <a class="wxpy-form-preview__btn wxpy-form-preview__btn_primary" href="javascript:;"><slot></slot></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WxpyPreview",
        props: {
            list: Array,
            btn: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    @import "../theme/common";
    .wxpy-form-preview {
        position: relative;
        background-color: #FFFFFF;
        &:before {
            @include before;
        }
        .wxpy-form-preview__hd {
            position: relative;
            padding: 10px 15px;
            text-align: right;
            line-height: 2.5em;
            &:after {
                @include after;
            }
            .wxpy-form-preview__value {
                font-style: normal;
                font-size: 1.6em;
            }
        }
    }
    .wxpy-form-preview__bd {
        padding: 10px 15px;
        font-size: .9em;
        text-align: right;
        color: #808080;
        line-height: 2;
    }
    .wxpy-form-preview__ft{
        position: relative;
        line-height: 50px;
        display: flex;
        &:before{
            @include before;
        }
        .wxpy-form-preview__btn {
            position: relative;
            display: block;
            flex: 1;
            color: #09BB07;
            text-align: center;
        &:after{
            content: " ";
            position: absolute;
            right: 0;
            top: 0;
            width: 1px;
            bottom: 0;
            border-right: 1px solid #D5D5D6;
            color: #D5D5D6;
            transform-origin: 0 0;
            transform: scaleX(0.5);
        }
        }
        .wxpy-form-preview__btn_default {
            color: #808080;
        }
    }
    .wxpy-form-preview__label {
        float: left;
        margin-right: 1em;
        min-width: 4em;
        color: #808080;
        text-align: justify;
        text-align-last: justify;
    }
    .wxpy-form-preview__item {
        overflow: hidden;
    }
    .wxpy-form-preview__value {
        display: block;
        overflow: hidden;
        word-break: normal;
        word-wrap: break-word;
    }
    .wxpy-form-preview__btn_primary {
        color: #09BB07;
    }
</style>