<template>
  <section class="page-demo">
    <ul>
    <li v-for="group in navs" :key="test1" >
      <div class="page-title" v-text="group.title"  :key="test2" ></div>
      <a
        v-for="item in group.list"
   
        :href="getHref(item.path)"
        >
        <div  class="sass_test">
          <i :class="['indexicon', 'icon-' + item.icon]"></i>
          <span class="sass_test" >{{ item.name }}</span>
          <span>{{item.path}}</span>
        </div>
      </a>
    </li>
    </ul>
  </section>
</template>

<script type="text/babel">
  import { navs } from './route';
 
  export default {
    data() {
      return {
        navs: []
      };
    },

    created() {
      this.navs = navs;
    },
    methods:{
      getHref(href){
        if (href && !this.added && this.$router) {
        const resolved = this.$router.match(href);
        if (!resolved.matched.length) return href;
        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', (e)=>{
            e.preventDefault();
            this.$router.push(href);
          });
        });
        return resolved.fullPath || resolved.path;
      }
      return href;
      }
    }
  };
</script>



<style lang="scss">
  .page-demo {
    padding:1px;
  }
  $nav-color: #F90;
  .sass_test {
    $width: 100px;
    width: $width;
    color: $nav-color;
  }

  /* @component-namespace page {
    @component title {
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
      display: block;
      line-height: 1;
    }

    @component part {
      margin-bottom: 15px;
    }
  } */
</style>

