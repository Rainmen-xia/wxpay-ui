<template>
        <div class="wxp-card__hd">
            <div class="wxp-cardhd__cell">
                <div class="wxp-cardhd__txt">{{title}}</div>
               <div class="wxp-cardhd__icon" @click="showPops"></div> 
            </div>

        </div>
        
</template>
<style type="text/css">
    .wxp-card__hd {
        padding: 30px 16px
    }
    .wxp-cardhd__cell {
        display: flex;
        align-items: center;
        position: relative
    }
    .wxp-cardhd__txt {
        font-size: 28px;
        color: #707070
    }
    .wxp-cardhd__icon {
        margin-left: 10px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFM0EwMUM2MEVBRTIxMUU3OTBFN0Q3QkQyREEyOTkwMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFM0EwMUM2MUVBRTIxMUU3OTBFN0Q3QkQyREEyOTkwMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUzQTAxQzVFRUFFMjExRTc5MEU3RDdCRDJEQTI5OTAxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUzQTAxQzVGRUFFMjExRTc5MEU3RDdCRDJEQTI5OTAxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bKzfJAAACAxJREFUeNrkW2tsVEUU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")
    }
</style>
<script>
     export default{
        name:'CardTitle',
        data(){
            return{
                show:0
            }
        },
        props:['title','popmessage'],
        methods:{
            showPops:function(){
                this.$modal.show({message:this.popmessage,close:function(para){
                }});
            }
        }
    }
</script>
