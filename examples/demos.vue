<template>
  <section class="page-demo">
    <ul>
    <li v-for="group in navs" :key="test1" >
      <div class="wxpy-flex" :key="test2" >
        <p class="wxpy-item">{{group.title}}</p>
        <i :class="['indexicon', 'icon-' + group.icon]"></i>
      </div>
      <div class="page__category">
        <a v-for="item in group.list" :href="getHref(item.path)">
          <div class="page-cell">
            <span class="page-cell_name" >{{ item.name }}</span>
            <span>{{item.path}}</span>
          </div>
        </a>
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

