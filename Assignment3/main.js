Vue.component('Example',{
    template : '<p>Hey there {{name}} . <button v-on:click="changeName">Continue</button></p>',
    data:function(){
      return{
         name:"Stranger"
      }
    },
    methods: {
      changeName: function(){
         this.name ="Are you ready for adventure?"
      }
    }
 });


 new Vue({
    el: '#example-component'
 });
