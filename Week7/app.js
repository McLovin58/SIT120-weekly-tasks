var data = {
   name:"Alex"
}

Vue.component('Global',{
    template : '<p>Hey there, this is {{name}} . <button v-on:click="changeName">Change name</button></p>',
    data:function(){
      return{
         name:"Alex"
      }
    },
    methods: {
      changeName: function(){
         this.name ="my Global Vue Component"
      }
    }
 });


 let localComponent= {
   template : '<p>Hey there, this is {{name}} . <button v-on:click="changeName">Change name</button></p>',
   data:function(){
     return{
        name:"Alex"
     }
   },
   methods: {
     changeName: function(){
        this.name ="my Local Vue Component"
     }
   }
};


 new Vue({
    el: '#global-component'
 });

 new Vue({
    el: '#local-component',
    components: {
      local: localComponent
    }
 });

 new Vue({
   el: '#attempting-local-component'
});
