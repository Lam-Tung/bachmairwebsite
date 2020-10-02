<template>
  <div>
    <div class="p-4 flex items-center justify-center">
      <button @click="(isDefinition = true); (isPublications = false)" :class="isDefinition ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4 mr-4">
        Definition
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