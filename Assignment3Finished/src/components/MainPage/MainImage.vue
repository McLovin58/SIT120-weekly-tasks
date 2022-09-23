<!--This is the component for the images used in adventureinfo.json, I edit the link to my liking using this within, changing the image to whatever I see fit for the purpose of the story, it is scalable and reusable!-->
<script setup>
defineProps({
  Image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="Titlecontainer">
    <img class="backimage" :src="Image"/>
  </div>
</template>

<style scoped>

.Titlecontainer{
    text-align: center;
}

</style>