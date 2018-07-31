<template>
    <div>
        <div class="page__hd">
            <h1 class="page__title">Preview</h1>
            <p class="page__dsc">表单预览</p>
        </div>
        <wxpy-preview :list="list">操作</wxpy-preview>
        <br>
        <wxpy-preview :list="list" :btn="true">
            <span slot="preview-btn" style="font-size: 16px">辅助操作</span>
            操作
        </wxpy-preview>
    </div>
</template>

<script>
    export default {
        name: "preview",
        data() {
            return {
                list: [
                    {
                        money: '付款金额',
                        price: '￥24000'
                    },
                    {
                        label: '商品',
                        value: '电动剃须刀'
                    },
                    {
                        label: '标题标题',
                        value: '名字名字'
                    },
                    {
                        label: '标题标题',
                        value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">

</style>