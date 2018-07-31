<template>
    <div class="wxpy-panel">
        <div class="wxpy-panel__bd">
            <template v-if="type==='1'">
            <a href="javascript:;"
               v-for="item in list"
               class="wxpy-media-box wxpy-media-box_appmsg">
                <div class="wxpy-media-box__hd"
                v-if="item.src">
                    <img class="wxpy-media-box__thumb" :src="item.src" alt=""></div>
                <div class="wxpy-media-box__bd">
                    <h4 class="wxpy-media-box__title">{{item.title}}</h4>
                    <p class="wxpy-media-box__desc">{{item.desc}}</p>
                </div>
            </a>
            </template>
            <template v-if="type==='2'">
                <div class="wxpy-media-box wxpy-media-box_text" v-for="item in list" >
                    <div class="wxpy-media-box__bd">
                    <h4 class="wxpy-media-box__title">{{item.title}}</h4>
                    <p class="wxpy-media-box__desc">{{item.desc}}</p>
                    </div>
                </div>
            </template>
            <template v-if="type==='3'">
                <div class="wxpy-media-box wxpy-media-box_small_appmsg">
                    <div class="wxpy-cells">
                        <a class="wxpy-cell wxpy-cell_access" v-for="item in list">
                            <div class="wxpy-cell__hd">
                                <img :src="item.src" alt="" style="width:20px;margin-right:5px;display:block">
                            </div>
                            <div class="wxpy-cell__bd">
                                <p v-html="item.title"></p>
                            </div>
                            <span class="wxpy-cell__ft"></span>
                        </a>
                    </div>
                </div>
            </template>
            <template v-if="type==='4'">
                <div class="wxpy-media-box wxpy-media-box_text" v-for="item in list" >
                    <div class="wxpy-media-box__bd">
                    <h4 class="wxpy-media-box__title" v-text="item.title"></h4>
                    <p class="wxpy-media-box__desc" v-text="item.desc"></p>
                    </div>
                    <ul class="wxpy-media-box__info" v-if="item.meta">
                        <li class="wxpy-media-box__info__meta" v-text="item.meta.source"></li>
                        <li class="wxpy-media-box__info__meta" v-text="item.meta.time"></li>
                        <li class="wxpy-media-box__info__meta wxpy-media-box__info__meta_extra" v-text="item.meta.other"></li>
                    </ul>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WxpyPanel",
        props: {
            list: Array,
            footer: String,
            type: {
                type: String,
                default: '1'
            }
        }
    }
</script>

<style lang="scss">
    @import "../theme/common";
    .wxpy-media-box{
        color: #000000;
        padding: 15px;
        position: relative;
    &:after{
        @include after;
    }
    }
    .wxpy-media-box_appmsg {
        display: flex;
        align-items: center;
        .wxpy-media-box__hd{
            margin-right: 0.8em;
            width: 60px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            .wxpy-media-box__thumb{
                width: 100%;
                max-height: 100%;
                vertical-align: top;
            }
        }
    }
    .wxpy-media-box__bd{
        flex: 1;
        min-width: 0;
        .wxpy-media-box__title{
            font-weight: 400;
            font-size: 17px;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: break-word;
            word-break: break-all;
        }
        .wxpy-media-box__desc{
            color: #808080;
            font-size: 13px;
            line-height: 1.2;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    }
    .wxpy-media-box__info {
        margin-top: 15px;
        padding-bottom: 5px;
        font-size: 13px;
        color: #CECECE;
        line-height: 1em;
        list-style: none;
        overflow: hidden;
        .wxpy-media-box__info__meta {
            float: left;
            padding-right: 1em;
        }
        .wxpy-media-box__info__meta_extra {
            padding-left: 1em;
            border-left: 1px solid #CECECE;
        }
    }
    .wxpy-media-box_small_appmsg {
        padding: 0;
    }
    .wxpy-media-box_small_appmsg .wxpy-cells {
        margin-top: 0;
    }
    .wxpy-media-box_text .wxpy-media-box__title {
        margin-bottom: 8px;
    }
</style>