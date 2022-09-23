<script setup>
    import Title from './Title.vue';
    import Adventure from '../../Adventure'
    import MainText from './MainText.vue'
    import ChoiceButtons from './ChoiceButtons.vue';
    import MainImage from './MainImage.vue';
    import { ref } from 'vue';
    
    
    
    function testonclick(index) {
      var newpage = pageinfotest.value.buttons.functions[index]
      pageinfotest.value = adventure.getpageinfo(newpage)
    }
    
    
    const adventure = new Adventure(null)
    
    var pageinfotest = ref(adventure.getpageinfo("second"))
    
    </script>
    
    
    <template>
      
      <MainImage :Image="pageinfotest.imageurl" />
      <Title :TitleName="pageinfotest.titletext" />
      <MainText :TitleName="pageinfotest.maintext" />
      <div v-for="(item, key) in pageinfotest.buttons.text" :key="key">
        <ChoiceButtons :TitleName="item" :Index="key" :adventure="adventure" :testonclick="testonclick" />
      </div>
    
    
    </template>