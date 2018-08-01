import headerEL from "./components/header.vue";
import bodyEl from "./components/body.vue";
import CardTitle from './components/cardtitle.vue';
import CardPanel from './components/cardpanel.vue';
//import Chart from './components/chart.vue';
import Tabs from './components/tabbar/tabbar.vue';
import Pielegend from './components/pielegend.vue';
import Paginator from './components/paginator.vue';
import iTable from "./components/itable.vue";
import modal from './components/modal/index';
import WxButton from './components/button.vue';
import Input from './components/input.vue';
import List from './components/list.vue';
import Slider from './components/slider.vue';
import Uploader from './components/uploader.vue';
import Article from './components/article.vue';
import Footer from './components/footer.vue';
import LoadMore from './components/loadmore.vue';
import Search from './components/search.vue';
import Flexbox from './components/flex/flexbox.vue';
import Flexitem from './components/flex/flexitem.vue';
import Panel from './components/panel.vue'
import Preview from './components/preview.vue'
import Tabbar from './components/tabbar/tabbar.vue'
import TabbarItem from './components/tabbar/tabbar-item.vue'
import Navbar from './components/navbar.vue'

require('./theme/reset.css');

const components = [TabbarItem,Navbar,Tabbar,Preview,Panel,headerEL,bodyEl,CardTitle,CardPanel,Tabs,Pielegend,Paginator,iTable,WxButton,Input,List,Slider,Uploader,Article,Footer,LoadMore,Search,Flexbox,Flexitem]

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
    TabbarItem,Navbar,Tabbar,Preview,Panel,headerEL,bodyEl,CardTitle,CardPanel,Tabs,Pielegend,Paginator,iTable,WxButton,Input,List,Slider,Uploader,Article,Footer,LoadMore,Search,Flexbox,Flexitem
}

