<!--This is the component for the Titles used in adventureinfo.json, I edit the text to my liking using this within, it is scalable and reusable!-->
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
    <h1 class="TitleText">{{ TitleName }}</h1>
  </div>
</template>

<style scoped>

.Titlecontainer{
    text-align: center;
}

</style>