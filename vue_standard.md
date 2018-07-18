# Vue-Standard

## 1 书写建议规范
### 1.1 使用vue 单文件（SFC）形式编写组件

### 1.2 文件结构以template script style 的顺序书写
```html
<template></template>
<script></script>
<style></style>
```
### 1.3  组件方法建议顺序

```javascript
export default {
  mixins,
  props,
  data,
  store,
  components,
  computed,
  route,
  created,
  mounted,
  ready,
  event,
  methods
}
```


## 2 组件设计

组件设计遵守[FIRST](https://addyosmani.com/first/)原则:

Components Should Be Focused, Independent, Reusable, Small & Testable (FIRST)



#### 2.1 命名

组件以驼峰命名

```html
<template>
  <my-component></my-component>
</template>
<script>
  import myComponent from './myComponent.vue'

  export default {
  components: {
  	  myComponent
    }
  }
</script>

```
#### 2.2 给组件声明名称
名称需要遵循驼峰命名规范
```html
<template>
  <div></div>
</template>
<script>
export default {
  name:'WxpTest'
}
</script>
```
### 2.3 组件模版中事件简写

用@符号替代 v-on操作

```html
<!-- bad -->
<a v-on:click="test()">test</a>

<!-- good -->
<a @click="test">test</a>
```
### 2.4 表达式简化

尽量避免在表达式中使用复杂计算，将复杂的运算放在computed/methods中

 ```html

<!-- good -->
<template>
    <h1>
        {{ `${year}-${month}` }}
    </h1>
</template>
<script type="text/javascript">
  export default {
    computed: {
      month() {
        return this.twoDigits((new Date()).getUTCMonth() + 1);
      },
      year() {
        return (new Date()).getUTCFullYear();
      }
    },
    methods: {
      twoDigits(num) {
        return ('0' + num).slice(-2);
      }
    },
  };
</script>

<!-- bad -->
<template>
    <h1>
        {{ `${(new Date()).getUTCFullYear()}-${('0' + ((new Date()).getUTCMonth()+1)).slice(-2)}` }}
    </h1>
</template>
 ```


### 2.5 props类型原子化

对props进行类型判断，并给定默认值

```html
<template>
  <input  v-model="value" >
</template>
<script type="text/javascript">
  export default {
    props: {
      value: {
        type: Number,
        default() { return 4; },
      },
    },
  };
</script>

```

### 2.7 js规范
   避免 this.$parent
   无需将 this 赋值给 component 变量
   调试信息console.log() debugger 使用完及时删除

### 2.8 组件样式使用组件名作为作用域空间
```css
.compName {}
.compName .div{
    
}
```

