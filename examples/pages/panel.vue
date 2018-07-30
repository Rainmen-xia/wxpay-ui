<template>
    <div>
        <div class="page__hd">
            <h1 class="page__title">Panel</h1>
            <p class="page__dsc">面板</p>
        </div>
        <div class="wxpy-panel__hd">
            图文组合列表
        </div>
        <wxpy-panel :list="list"></wxpy-panel>
        <div class="wxpy-panel__hd">
            文字组合列表
        </div>
        <wxpy-panel :list="list" type="2"></wxpy-panel>
        <div class="wxpy-panel__hd">
            小图文组合列表
        </div>
        <wxpy-panel :list="list" type="3"></wxpy-panel>
        <div class="wxpy-panel__hd">
            文字列表附来源
        </div>
        <wxpy-panel :list="list" type="4"></wxpy-panel>
    </div>
</template>

<script>
    export default {
        name: "panel",
        data() {
            return {
                footer: "查看更多",
                list: [
                    {
                    src: "../examples/assets/100x100.png",
                    title: "标题一",
                    desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                    src: "../examples/assets/100x100.png",
                    title: "标题二",
                    desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
                        meta: {
                            source: '文字来源',
                            time: '时间',
                            other: '其他信息'
                        }
                    }],
            }
        }
    }
</script>

<style lang="scss">
    @import "../../theme/common";
    .wxpy-panel__hd{
        padding: 14px 15px 10px;
        color: #808080;
        font-size: 13px;
        position: relative;
    &:after{
        @include after;
    }
    }
</style>