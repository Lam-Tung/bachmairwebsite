<template>
  <div>
    <div class="flex flex-row-reverse p-4 md:justify-around lg:justify-center">
      <button @click="(is20092013 = true); (is20142018 = false); (is2019Recent = false)" :class="is20092013 ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4">
        2009 bis 2013
      </button>
      <button @click="(is20142018 = true); (is20092013 = false); (is2019Recent = false)" :class="is20142018 ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4 ml-2 mr-2">
        2015 bis 2018
      </button>
      <button @click="(is2019Recent = true); (is20092013 = false); (is20142018 = false)" :class="is2019Recent ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4">
        2019 bis aktuell
      </button>
    </div>
    <div class="mt-8 lg:flex lg:justify-center">
      <img class="block ml-auto mr-auto rounded shadow-md border-4 border-indigo-900 lg:object-contain lg:h-48 lg:w-48 lg:ml-24 lg:mr-24" alt="bachmair.png" src="../assets/pictures/bachmairLecture.png">
      <div class="mt-4">
        <div v-if="is20092013">
            <Lec20092013/>
        </div>
        <div v-if="is20142018">
            <Lec20152018/>
        </div>
        <div v-if="is2019Recent">
            <Lec2019Recent/>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Lec20092013 from '@/components/Lec20092013.vue'
import Lec20152018 from '@/components/Lec20152018.vue'
import Lec2019Recent from '@/components/Lec2019Recent.vue'


export default {
  name: 'Lectures',
  components: {
    Lec20092013,
    Lec20152018,
    Lec2019Recent,
  },
  data() {
    return {
      is20092013: false,
      is20142018:false,
      is2019Recent: true,
    }
  },
}
</script>