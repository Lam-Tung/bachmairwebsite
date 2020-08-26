<template>
  <div class="home">
    <div class="p-4 flex items-center justify-center">
      <button @click="isGerman = !isGerman" :class="isGerman ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4 mr-4">
        Lebenslauf Deutsch
      </button>
      <button @click="isGerman = !isGerman" :class="!isGerman ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4">
        Lebenslauf Englisch
      </button>
    </div>
    <div>
      <CVGerman :class="isGerman ? 'block' : 'hidden'"/>
      <CVEnglish :class="!isGerman ? 'block' : 'hidden'"/>
    </div>
    <div class="flex justify-center">
        <img class="rounded h-auto w-auto overflow-hidden shadow-lg border-indigo-900" alt="bachmair.png" src="../assets/pictures/bachmairCV.png">
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
    }
  },
}
</script>