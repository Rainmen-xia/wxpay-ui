<template>
  <div class="wxp-cardbd__annotate">
    <div class="wxp-iconbox" v-for="(item, index) in ilegends" :style="{width:width}">
        <div class="wxp-iconbox__bd">
            <div class="wxp-iconbox__icon " :style="{backgroundColor:item.color}"></div>
            <div class="wxp-iconbox__ctn">
                <p class="wxp-iconbox__title">{{item.name}}</p>
                <p class="wxp-iconbox__desc">{{item.value}}</p>
            </div>
        </div>
    </div>
</div>
</template>
<style type="text/css">
    .wxp-cardbd__annotate {
        margin-top: 50px
    }
    .wxp-iconbox {
        float: left;
        padding-bottom: 50px;
        width: 33.333%;
        box-sizing: border-box
    }
    .wxp-iconbox__title{
        display: inline-block;
        width: 150px;
        font-size: 20px;
        word-wrap: break-word;
        word-break: break-all;
        white-space: normal;
    }
    .wxp-iconbox__bd {
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap
    }
    .wxp-iconbox__icon {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        margin-right: 10px
    }
    .wxp-iconbox__title {
        font-size: 20px;
        color: #adadad;
        white-space: nowrap
    }

    .wxp-iconbox__desc {
        font-size: 24px;
        color: #797979
    }
</style>
<script>
export default{
    name:'Pielegend',
    props:{
        ilegends:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    computed:{
        width(){
            let len =this.ilegends.length 
            if(len===0){
                return '';
            }else if(len%3===0){
                  return '33.33%'  
            }else{
                 return '50%'  
            }
        }
    }

}
</script>