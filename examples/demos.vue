<template>
  <section class="page-demo">
    <ul>
    <li v-for="group in navs" :key="test1" >
      <div class="wxpy-flex" :key="test2" >
        <p class="wxpy-item">{{group.title}}</p>
        <i :class="['indexicon', 'icon-' + group.icon]"></i>
      </div>
      <div class="page__category">
        <div class="wxpy-cells page__category-content">
        <!-- <a class="wxpy-cell" v-for="item in group.list" :href="getHref(item.path)"> -->
            <a class="wxpy-cell" v-for="item in group.list" :data-test="item.path" @click="handleRouter($event,item.path)">
          <div class="wxpy-cell__bd">
            <span class="page-cell_name" >{{ item.name }}</span>
          </div>
        </a>
        </div>
      </div>
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
          debugger
          console.log(href)
          const resolved = this.$router.match(href);
          if (!resolved.matched.length) return href;
          this.$nextTick(() => {
            debugger
            this.added = true;
            this.$el.addEventListener('click', (e)=>{

              debugger
              e.preventDefault();
              this.$router.push(href);
            });
          });
          return resolved.fullPath || resolved.path;
      }
      return href;
      },
      handleRouter(e,path){
         this.$el.addEventListener('click', (e)=>{
          e.preventDefault();
          this.$router.push(path);
        });
      }
    }
  };
</script>



<style lang="scss">
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

