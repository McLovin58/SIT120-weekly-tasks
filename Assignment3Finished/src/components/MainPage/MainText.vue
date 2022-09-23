<!--This is the component for the main text used in adventureinfo.json, I edit the text to my liking using this within, it is scalable and reusable!-->
<script setup>
defineProps({
  TitleName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="Titlecontainer">
    <p1 class="textclass">{{ TitleName }}</p1>
  </div>
</template>

<style scoped>

.Titlecontainer{
    text-align: center;
    padding-left: 20%;
    padding-right: 20%;
}



</style>