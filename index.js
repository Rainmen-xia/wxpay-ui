import headerEL from "./components/header.vue";
import bodyEl from "./components/body.vue";
import Card from './components/card.vue';
import CardTitle from './components/cardtitle.vue';
import CardPanel from './components/cardpanel.vue';
//import Chart from './components/chart.vue';
import Tabs from './components/tabs.vue';
import Pielegend from './components/pielegend.vue';
import Paginator from './components/paginator.vue';
import iTable from "./components/itable.vue";
import modal from './components/modal/index';
import WxButton from './components/button.vue';
import Input from './components/input.vue';
import List from './components/list.vue';
import Slider from './components/slider.vue';
import Uploader from './components/uploader.vue';

require('./theme/reset.css');

const components = [headerEL,bodyEl,Card,CardTitle,CardPanel,Tabs,Pielegend,Paginator,iTable,WxButton,Input,List,Slider,Uploader]

const install = function(Vue, opts = {}) {
    components.map(component=>{
                Vue.component(component.name,component)
            })
    Vue.use(modal);
}
//auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
    version:'1.0.0',
    install,
    headerEL,bodyEl,Card,CardTitle,CardPanel,Tabs,Pielegend,Paginator,iTable,WxButton,Input,List,Slider,Uploader
}

