# Vue-Component-Standard-Guide

### 1 Vue属性书写顺序

```javascript
export default {
  mixins,
  data,
  props,
  store,
  computed,
  route,
  created,
  ready,
  event,
  watch,
  components,
  methods
}
```



### 2 组件

组件设计原则：
FIRST
https://addyosmani.com/first/

Components Should Be Focused, Independent, Reusable, Small & Testable (FIRST)

#### 2.1 命名

组件以驼峰命名

```html
<template>
  <my-components></my-components>
</template>
<script>
  import myComponents from './myComponents.vue'

  export default {
  components: {
  	  myComponents
    }
  }
</script>

```
#### 2.2 Vue组件的书写顺序
建议：template script style 的顺序书写
```vue
<template></template>
<script></script>
<style></style>
```
#### 2.3 组件引用

```javascript
  import myComponentsA from './myComponentsA.vue'  
  import myComponentsB from './myComponentsB.vue'
  import myComponentsC from './myComponentsC.vue'
  import myComponentsD from './myComponentsD.vue'
  export default {
    components: {
  	  myComponentsA,
      myComponentsB,
      myComponentsC,
      myComponentsD,
    }
  }
```

### 3 事件

```html
<!-- bad -->
<a v-on:click="pass()">pass</a>

<!-- good -->
<a @click="pass">pass</a>
```
### 4 表达式简化

Vue.js 的表达式是 100% 的 Javascript 表达式。这使得其功能性很强大，但也带来潜在的复杂性。因此，你应该尽量保持表达式的简单化。

为什么？
复杂的行内表达式难以阅读。
行内表达式是不能够通用的，这可能会导致重复编码的问题。
IDE 基本上不能识别行内表达式语法，所以使用行内表达式 IDE 不能提供自动补全和语法校验功能。
怎么做？
如果你发现写了太多复杂并难以阅读的行内表达式，那么可以使用 method 或是 computed 属性来替代其功能。

 
 ```html

<!-- 推荐 -->
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

<!-- 避免 -->
<template>
    <h1>
        {{ `${(new Date()).getUTCFullYear()}-${('0' + ((new Date()).getUTCMonth()+1)).slice(-2)}` }}
    </h1>
</template>
 ```


### 5 props

在 Vue.js 中，组件的 props 即 API，一个稳定并可预测的 API 会使得你的组件更容易被其他开发者使用。

组件 props 通过自定义标签的属性来传递。属性的值可以是 Vue.js 字符串(:attr="value" 或 v-bind:attr="value")或是不传。你需要保证组件的 props 能应对不同的情况。


为什么？
验证组件 props 可以保证你的组件永远是可用的(防御性编程)。即使其他开发者并未按照你预想的方法使用时也不会出错。

怎么做？
提供默认值
使用 type 属性校验类型
使用 props 之前先检查该 prop 是否存在


```html
<template>
  <input type="range" v-model="value" :max="max" :min="min">
</template>
<script type="text/javascript">
  export default {
    props: {
      max: {
        type: Number, // 这里添加了数字类型的校验
        default() { return 10; },
      },
      min: {
        type: Number,
        default() { return 0; },
      },
      value: {
        type: Number,
        default() { return 4; },
      },
    },
  };
</script>

```


### 6 使用组件名作为样式作用域空间

```css
.compName {}
.compName .div{
    
}
```
### 7 提供组件 API 文档

### 8 编码规范
尽量按照ESLint格式要求编写代码
1. 使用ES6风格编码源码
        定义变量使用let ,定义常量使用const
        使用export ，import 模块化
2. 组件 props 原子化
        提供默认值
        使用 type 属性校验类型
        使用 props 之前先检查该 prop 是否存在
3. 避免 this.$parent
4. 谨慎使用 this.$refs
5. 无需将 this 赋值给 component 变量
6. 调试信息console.log() debugger 使用完及时删除
 
