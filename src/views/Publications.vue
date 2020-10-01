<template>
  <div>
    <div class="flex items-center justify-center ref">
      <a href="https://kobra.uni-kassel.de/browse?type=author&amp;sort_by=2&amp;order=ASC&amp;rpp=20&amp;etal=-1&amp;value=Bachmair%2C+Ben&amp;offset=0">
        Hier Veröffentlichungen bis 2008 verfügbar
      </a>
    </div>
    <div class="flex flex-row-reverse p-4 md:justify-around lg:justify-center">
      <button @click="(is20122015 = true); (is20162018 = false); (is2019Recent = false)" :class="is20122015 ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4">
        2012 bis 2015
      </button>
      <button @click="(is20162018 = true); (is20122015 = false); (is2019Recent = false)" :class="is20162018 ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4 ml-2 mr-2">
        2016 bis 2018
      </button>
      <button @click="(is2019Recent = true); (is20122015 = false); (is20162018 = false)" :class="is2019Recent ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4">
        2019 bis aktuell
      </button>
    </div>
    <div>
        <div v-if="is20122015">
            <Pub20122015/>
        </div>
        <div v-if="is20162018">
            <Pub20162018/>
        </div>
        <div v-if="is2019Recent">
            <Pub2019Recent/>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Pub20122015 from '@/components/Pub20122015.vue'
import Pub20162018 from '@/components/Pub20162018.vue'
import Pub2019Recent from '@/components/Pub2019Recent.vue'

export default {
  name: 'Publications',
  components: {
    Pub20122015,
    Pub20162018,
    Pub2019Recent,
  },
  data() {
    return {
      is20122015: false,
      is20162018:false,
      is2019Recent: true,
    }
  },
}
</script>