<!--This is the component for the ChoiceButtons used in adventureinfo.json, I can add and edit more which allows for full scalability as opposed to simply making lots of seperate <button> instances, it is scalable and reusable!-->
<script setup>
import Adventure from '../../Adventure'

function test(adventure){
    var info = adventure.getpageinfo(this) 
    //alert(info.titletext)
}



defineProps({
  TitleName: {
    type: String,
    required: true
  },
  Index:{
    type:Number,
    required:true
  },
  adventure:{
    type:Adventure,
    required:true
  },
  testonclick:{
    type:Function,
    required:true
  }
})





</script>

<template>
  <div class="Titlecontainer">
    <button class="buttonclass" v-on:click="testonclick(Index)">{{TitleName}}</button>
  </div>
</template>

<style scoped>

.Titlecontainer{
    text-align: center;
    padding-top: 2%;
}


</style>