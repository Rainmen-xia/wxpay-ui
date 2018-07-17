<template>
        <div class="curve-description" v-show="popshow">
               <div class="mask"></div>
               <div class="wxp-dialog">
                    <div class="wxp-dialog__bd">
                        <p class="dialog-bd__note" v-html="message">
                        </p>
                        <div class="wxp-dialog__btn" @click="closePops">知道了</div>
                    </div>
               </div>
        </div>
</template>
<style type="text/css">
    .mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.44);
        z-index: 99999;
    }
    .wxp-dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 80%;
        max-width: 548px;
        transform: translate(-50%,-50%);
        background-color: #fff;
        border-radius: 6px;
        overflow: hidden;
        z-index: 100000;
    }
    .wxp-dialog__bd {
        padding: 54px 42px 42px;
        word-wrap: break-word;
        word-break: break-all;
        color: #999
    }
    .dialog-bd__note {
        font-size: 28px;
        color: #000;
    }

    .wxp-dialog__btn {
        font-size: 32px;
        color: #c49b44;
        text-align: right;
        margin-top: 54px;
    }

</style>
<script>
    export default{
        data:function(){
            return {
                popshow:false,
                message:''
            }
        }
    }
</script>