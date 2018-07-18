### 介绍:
A vue 2.0 UI components for web.

### 安装：
```
tnpm install wxpay-ui 
```

### 全局引入：
```
import wxpayUi from 'wxpay-ui';

Vue.use(wxpayUi);
```

### 使用：
```
<template>
    <!--卡片组件-->
    <Card>
        <!--卡片title 内置弹窗组件 -->
        <CardTitle title="标题"  popmessage="弹出消息"></CardTitle>
        <!--卡片面板组件-->
        <CardPanel>
            <!---tab切换组件-->
            <Tabs :type="type" name="areadistribute" :iupdatekey="updatekey"  @changeType="changeType"/>
              <!--table组件-->
              <iTable :header="header" :dataList="dataList">
                    <!--自定义table列表内容-->
                    <tr v-for="(item, index) in dataList" @click="goto_trends(item.key)">
                        ...
                        <td >
                            <span>{{item.submchname}}</span>
                            <span class="rankinglist_left">{{item.submchcode}}</span>
                        </td>
                    </tr>
            </iTable>
            <Paginator :totalPage="page_total" :icurrentPage="page_no" @changePage="changePage"/> 
        </CardPanel>
    </Card>
</template>
```

