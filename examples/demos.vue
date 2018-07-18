<template>
  <section class="page-demo">
    <div v-for="group in navs"     :key="test1" >
      <div class="page-title" v-text="group.title"  :key="tes2" ></div>
      <a
        v-for="item in group.list"
   
        :href="getHref(item.path)"
        >
        <div slot="title">
          <i :class="['indexicon', 'icon-' + item.icon]"></i>
          <span>{{ item.name }}</span>
          <span>{{item.path}}</span>
        </div>
      </a>
    </div>
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



<style>
  .page-demo {
    padding-bottom: 50px;

    .indexicon {
      font-size: 22px;
      color: #26a2ff;
      display: inline-block;
      width: 30px;
      vertical-align: middle;

      &.icon-swipe {
        font-size: 26px;
      }

      &.icon-checklist {
        font-size: 18px;
      }
    }
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

