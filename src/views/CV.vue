<template>
  <div>
    <div class="p-4 flex items-center justify-center">
      <button @click="(isGerman = true); (isEnglish = false)" :class="isGerman ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4 mr-4">
        Lebenslauf Deutsch
      </button>
      <button @click="(isGerman = false); (isEnglish = true)" :class="!isGerman ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4">
        CV English
      </button>
    </div>
    <div class="lg:flex">
      <div class="flex justify-center lg:block">
       <img class="rounded h-auto w-auto overflow-hidden shadow-lg imgBorder lg:object-cover lg:max-w-6xl lg:ml-20" alt="bachmair.png" src="../assets/pictures/bachmairCV.png">
      </div>  
      <div>
        <div v-if="isGerman">
          <CVGerman/>
        </div>
        <div v-if="isEnglish">
          <CVEnglish/>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CVGerman from '@/components/CVGerman.vue'
import CVEnglish from '@/components/CVEnglish.vue'

export default {
  name: 'CV',
  components: {
    CVGerman,
    CVEnglish
  },
  data() {
    return {
      isGerman: true,
      isEnglish:false,
    }
  },
}
</script>