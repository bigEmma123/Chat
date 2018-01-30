
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('message',require('./components/MessageComponent.vue'));

const app = new Vue({
    el: '#app',
    methods: {
       send:function(){
           console.log(this.message)
           if(this.message.length>0)
           {
               this.chat.messages.push(this.message);
               this.message='';
           }
           console.log(this.chat.messages.length)
           
        }
          
     },
    data:{
        "message":"",
        "chat":{
            "messages":[]
        }
    },
    mounted () {
        console.log("Vue Mounted");
    }

});
