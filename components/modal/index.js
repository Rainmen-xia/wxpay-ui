import modalComponent from './modal.vue'

const modal = {
    install:function(Vue){

        let modalConstructor = Vue.extend(modalComponent);
        let instance = null;
        Vue.prototype.$modal = {
            show(config){
                if(typeof(config)==='string'){
                    config = {message:config}
                }
                if (instance) {
                    instance.popshow = true;
                    instance.message = config.message;
                    instance.close = config.close;
                    return;
                } else {
                    instance = new modalConstructor({
                        el: document.createElement('div'),
                        data () {
                            return {
                                popshow:true,
                                message:config.message,
                                close:config.close
                            };
                        },
                        methods: {
                            closePops(){
                                if(this.close){
                                        this.close.apply(this,arguments);
                                }
                                this.popshow=false  
                            }
                        }
                    });
                    document.body.appendChild(instance.$el);
                    //instance.$appendTo(document.body);
                }
            }
        }
    }
}

export default modal;