<template>
     <div class="wxp-card__tab">
        <div v-for="(item, index) in type" class="wxp-cardtab__item"  :class="[active==index?'wxp-cardtab__item_on':'']" @click="touchType(index)">{{item.name}}</div>
    </div>
</template>
<style type="text/css">
    .wxp-card__tab {
        width: 100%;
        height: 92px;
        box-sizing: border-box;
        line-height: 92px;
        white-space: nowrap;
        overflow: hidden;
        border-bottom: 1px solid #dcdcdc;
        border-radius: 8px 8px 0 0;
        display: flex;
        align-items: center;
        justify-content: center
    }
    .wxp-cardtab__item {
        flex: 1;
        font-size: 26px;
        color: #b5b5b5;
        text-align: center
    }
</style>
<script>
    export default{
        name:'Tabs',
        props:{
            type:{
                type: Array,
                default: function(){
                    return []
                    }
                },
            iupdatekey:{
                type:Number,
                default:0
            }
        },
        data(){
            return {
                active:0
            }
        },
        watch:{
            //当用户tab状态需要初始化的时候切换该tab
           iupdatekey(value,old){
            if(value!=this.active){
                this.active =value
            }
           } 
        },
        methods:{
            touchType:function(index){
                this.active = index
                this.$emit('changeType',index)
                //this.$BUS.$emit('changeType', {name:this.name,index:index})
            }
        }
    }
</script>