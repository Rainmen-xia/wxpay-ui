<template>
<div>
    <span @click="showModel">modal</span>
</div>
</template>

<script type="text/babel">

  export default {
    name: 'modal',
    data(){
        return {}
    }
    ,created(){
        console.log('created')
        console.log('dev')
    },
    methods:{
        showModel(){
            this.$modal.show('model');
        }
    }
}
</script>
<style>

</style>