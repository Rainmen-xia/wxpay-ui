<style type="text/css">
    .wxp-paginator{
        text-align: center; 
        text-align: center;
        padding-bottom: 20px;
        font-size: 26px; 
    }
    .wxp-paginator_tab{
        border-radius: 20px;
        background-color: #efefef;
        display: inline-block;
        padding: 10px;
        line-height: 30px;
        width: 130px;
    }
    .wxp-paginator_disable{
        color:#bdbdbd;
    }
</style>
<template>
    <div class="wxp-paginator">
        <span class="wxp-paginator_tab" :class="{'wxp-paginator_disable':currentPage==1}" @click="chanegPage(-1)"><上一页</span>
        <span>{{currentPage}}/{{totalPage}}</span>
        <span class="wxp-paginator_tab" :class="{'wxp-paginator_disable':currentPage==totalPage}" @click="chanegPage(1)">下一页></span>
    </div>
</template>

<script type="text/javascript">
export default{
    name:'Paginator',
    data(){
        return {
            currentPage:1,
            totalPage:1
        }
    },
    props:['icurrentPage','totalPage'],
    watch:{
        totalPage(val,old){
            
        },
        icurrentPage(val,old){
            this.currentPage=val;
        }
    },
    methods:{
        chanegPage(num){
            if((num==1&&this.totalPage>this.currentPage)||(num==-1&&this.currentPage>1)){
                this.currentPage+=num
                this.$emit('changePage',this.currentPage)
            }
        }
    }
}  
</script>