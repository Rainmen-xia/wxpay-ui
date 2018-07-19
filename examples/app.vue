<template>
  <div>
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="mintui mintui-back"></i>
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script type="text/babel">
 // import 'src/assets/font/iconfont.css';

  export default {
    computed: {
      visible() {
      let result = ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
        console.log(result);
        return result;
      }
    }
  };
</script>


<style>
  @import "../theme/example.scss";
  /* @reset-global mobile;*/

  html, body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  a {
    color: inherit;
  }

  .page-back {
      display: inline-block;
  } 
</style>
