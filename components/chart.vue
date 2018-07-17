<template>
    <div class="wxp-cardbd__main">
        <!--wxp-card__chart-->
        <div class="" ref='element'  style="display:block;margin:0 auto;"  :id="domId"></div>
        <slot></slot>
    </div>
</template>
<style type="text/css">
    .wxp-cardbd__main {
        padding: 42px 30px;
        overflow: hidden
    }
</style>
<script>
 
 export default{
    name:'Chart',
    data(){
        return{
            _option:{},
            domId:''
        }
    },
    props: {
        'option':{
                type:Object,
                default:function(){
                    return defaultoption;
                }
            },
        'charttype':{
            type:String,
            default:''
          }
        },
    watch:{
       option(v,old){
        if(v!=old){
            this.update(v)
        }
       } 
    },
    created:function(){
        this._option = this.option;
        this.domId = 'charts_'+parseInt(Math.random()*1000000)
    },
    mounted:function(){
        this.$refs.element.style.height =  (window.innerWidth-60)*0.6+'px'; 
        this.$refs.element.style.width = (window.innerWidth-100)+'px';    
        this.chart = echarts.init(document.getElementById(this.domId));
        this.chart.setOption(this._option);
        this.setpieDefault(this._option);
        window.addEventListener('resize', this.chart.resize) 
    },
    methods:{
        update(data){
           // console.log(data);
            this.chart.setOption(data,true);
            this.setpieDefault(data);
        },
        setpieDefault(data){
            let vm =this;
            if(this.charttype=='pie'){
                let length = data.series.length;
                let _data = data.series[length-1].data;
                let maxIndex = 0;
                let temp = 0;
                for(let i=0;i<_data.length;i++){
                    if(_data[i].value>temp){
                        temp = _data[i].value;
                        maxIndex = i;
                    }
                }
 
                vm.chart.dispatchAction({
                    type: 'highlight',
                    seriesIndex:length-1,
                    dataIndex: maxIndex
                });

                vm.chart.off('click');

                var once = false;
                vm.chart.on('click',function(data){
                    if(data.dataIndex == vm.maxIndex)return;
                    if(once) return;
                    vm.chart.dispatchAction({
                        type: 'downplay',
                        seriesIndex:length-1,
                        dataIndex: vm.maxIndex
                    });
                    once = true;
                })
            }
        }
    }
}

var defaultoption = {
    color:['#c49b44','#debe79'],
    textStyle:{
        fontSize:24
    },
    tooltip: {
        trigger: 'axis',
        triggerOn: 'mousemove|click',
        extraCssText: 'text-align:center',
        textStyle: {
            fontSize: 29
        }
    },
    grid: {
        show: false,
        top: 10,
        left: 0,
        width: '99%',
        height: '80%',
        backgroundColor: 'rgba(128, 128, 128, 0)',
        containLabel: true
    },
    axisPointer: {
        lineStyle: {
            color: 'rgba(128, 128, 128, 0)'
        }
    },
    xAxis: [{
        boundaryGap: false,
        type: 'category',
        data: [],
        axisTick: {
            lineStyle: {
                color: '#c49b44',
                width: 2
            },
            inside: true
        },

        axisLabel:{
            fontSize:24
        },
        nameTextStyle:{
            fontSize:24
        },
        zlevel: 2
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false,
            onZero: false,
        },
        nameTextStyle:{
         fontSize:24
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize:24
        },
        splitLine: {
            lineStyle: {
                opacity: 0.3
            }
        }
    }],

    textStyle: {
        color: '#8e9196',
        fontSize: '8rem',
        // fontFamily: 'PingFang SC Medium'
    },
    series: [{
        name: '交易趋势',
        type: 'line',
        stack: '总量',
        lineStyle: {
            normal: {
                width: 1,
                 //    color: '#22c76f'
                color: '#c49b44'
            }
        },
        showSymbol: false,
        itemStyle: {
            normal: {
                //borderColor: '#22c76f'
                borderColor: '#c49b44'
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                     color: 'rgb(196, 155, 68)'
                }, {
                    offset: 1,
                     color: 'rgb(255, 255, 255)'
  
                }])
            }
        },
        data: []
    }]
};
</script>