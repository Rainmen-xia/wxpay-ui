<template>
    <header class="stecncil-hd" >
            <ul class="wxp-tab" ref="scrollEl" >
                <li class="wxp-tab__cell" v-for="(item,index) in dateArray"
                 @click="changeDate(item.data)" :class="{'wxp-tab__cell_on':item.data == cell_on,'wxp-tab__cell_disabled':item.name.length==4&&type=='month'}">{{item.name}}</li>
            </ul>
    </header>
</template>
<style type="text/css">
    .stecncil-hd {
        height: 100px;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }
    .wxp-tab {
        white-space: nowrap;
        word-break: break-all;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    .wxp-tab__cell {
        display: inline-block;
        line-height: 100px;
        font-size: 30px;
        color: #b5b5b5;
        text-align: center;
        padding: 0 42px;
    }
    .wxp-tab__cell_on {
        color: #c4af44;
        position: relative;
    }
    .wxp-tab__cell_on:after {
        content: "";
        height: 6px;
        background: #c4af44;
        position: absolute;
        right: 15px;
        left: 15px;
        bottom: 1px;
    }
    .wxp-tab__cell_disabled {
        color: #dcdcdc;
    }
</style>
<script>
import dateformat from '../lib/dateformat.js';
export default {
    name:'headerEL',
    data() {
        return {
            dateArray: [],
            cell_on: '',
            isInit: false
        }
    },
    props:['date','type'],
    mounted(){

        if(this.type=='month'){
            this.initMonthArray();

        }else{
            this.initDateArray();        
        }
    },
    created(){
        var date = this.date.toString();
        this.cell_on = parseInt(date.slice(0, 6));
    },
    methods: {
        initMonthArray() {
                var date = (this.date).toString();
                if (!date) {
                    return;
                }
                this.isInit = true;
                var year = parseInt(date.slice(0, 4));
                var month = parseInt(date.slice(4, 6));
               // this.cell_on = year+'' + month;
                this.cell_on  =  parseInt(date.slice(0, 6));
                var temp = 0;
                for (var i = 0; i < 13; i++) {

                    if (month == 0) {

                        this.dateArray.unshift({
                            data: year+'',
                            name: year + ''
                        })

                        month = 13 + month;
                        year = year-1;
                    }else{

                        this.dateArray.unshift({
                            data: year + '' + (month < 10 ? '0' + month : month),
                            name: month + '月'
                        })
                    }  
                    month = month - 1;

                }
 
                var that = this;
                setTimeout(function(){  
                   that.$refs.scrollEl.scrollLeft = 2000;
                },300)
   
            },
            initDateArray() {
                this.isInit = true;
                var date = this.date.toString();
                var year = date.slice(0,4);
                var month = date.slice(4,6);
                var day = date.slice(6,8);
                var temp = year+'-'+month+'-'+day;
                this.cell_on = date;
                var _temp,_data,_name;
                for(var i=0;i<8;i++){
                    _temp = dateformat.addDay(new Date(temp),parseInt(-i));
                    _data = dateformat.format(_temp,'yyyyMMdd');
                    _name = parseInt(_data.slice(4,6))+'月'+parseInt(_data.slice(6,8))+'日';
                    this.dateArray.unshift({
                        obj:_temp,
                        data:_data,
                        name:_name
                    });
                }

                var that = this;
                setTimeout(function(){
                          that.$refs.scrollEl.scrollLeft = 2000;
                },300)
            },
            changeDate(data) {
                //如果是年就
                if(data.length<5){
                    return 
                }
                this.cell_on = data;
                if(data.length<7){
                    data=data+'01'
                }
                this.$emit('changeDate', data);
                //this.$BUS.$emit('changeDate', data);
            }
    }
}
</script>