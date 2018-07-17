<template>
<div  class="wxp-cardbd__main">
    <table class="rankinglist">
        <tr>
            <th  v-for="(item, index) in header">{{item}}</th>
        </tr>
        <slot :dataList="dataList"></slot>
    </table>
</div>
</template>
<style type="text/css">
.wxp-cardbd__main {
    padding: 42px 30px;
    overflow: hidden
}
.wxp-cardbd__main  table tr:nth-child(odd){background:#efefef;}

  .rankinglist{width:100%;}
  .rankinglist tr{height: 100px;font-size: 24px; text-align: center;color: #707070;}
  .rankinglist tr th{color:#b5b5b5;}
  /*.table-align-left{text-align: left;padding-left:25px;}*/
  .wxp-cardbd__main  table tr th:nth-child(1){text-align: left;padding-left:25px;}
  .wxp-cardbd__main  table tr td:nth-child(1){text-align: left;padding-left:25px;}
</style>
<script> 
    /*var option = {
        header:[],
        dataList:[],
        src_url:`/service_trade_data/get_mch_rank_data?key=page_key&date=20180401&rank_type=${that.isActive}&page_no=${that.page_no}&page_size=${that.page_size}`,
        page_size:5,
        page_no:0
    }*/
    export default{
        name:'iTable',
        props:{
            header:{
                type:Array,
                default(){
                    return [];
                }
            },
            dataList:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        watch:{
            header(val,old){
              //  console.log(val)
            },
            dataList(val,old){
               // console.log(val)
            }
        },
        methods:{
            changetype(index){
               // console.log(index)
            },
        }
    }
    
</script>