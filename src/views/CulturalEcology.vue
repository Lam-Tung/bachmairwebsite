<template>
  <div>
    <div class="text-center space-y-2 md:space-y-0 md:flex p-4 md:justify-around lg:justify-center">
      <button @click="(isDefinition = true); (isPublications = false)" :class="isDefinition ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4 mr-4">
        Kulturökologie
      </button>
      <button @click="(isDefinition = false); (isPublications = true)" :class="isPublications ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4">
        Publikationen
      </button>
    </div>
    <div v-if="isDefinition">
      <CulturalEcologyDefinition/>
    </div>
    <div v-if="isPublications">
      <CulturalEcologyPub/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CulturalEcologyDefinition from '@/components/CulturalEcologyDefinition.vue'
import CulturalEcologyPub from '@/components/CulturalEcologyPub.vue'

export default {
  name: 'CulturalEcology',
  components: {
    CulturalEcologyDefinition,
    CulturalEcologyPub,
  },
  data() {
    return {
      isDefinition: true,
      isPublications:false,
    }
  },
}
</script>