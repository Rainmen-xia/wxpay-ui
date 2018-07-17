<template>
    <div class="wxp-card__bd">
        <slot></slot>
    </div>
</template>
<style type="text/css">
    .wxp-card__bd {
        background-color: #fff;
        border-radius: 8px;
        position: relative;
        margin-bottom: 20px
    }
</style>
<script>
     export default{
        name:'CardPanel',
        data(){
            return{}
        }
    }
</script>
