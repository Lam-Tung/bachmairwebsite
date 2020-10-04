<template>
  <div>
    <div class="text-center space-y-2 md:space-y-0 md:flex p-4 md:justify-around lg:justify-center">
      <button @click="(isMobile = true); (isContext = false); (isSocialRisk = false)" :class="isMobile ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4">
        Mobiles Lernen
      </button>
      <button @click="(isContext = true); (isMobile = false); (isSocialRisk = false)" :class="isContext ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4 md:ml-2 md:mr-2">
        Kontext-bewusstes Lernen
      </button>
      <button @click="(isSocialRisk = true); (isMobile = false); (isContext = false)" :class="isSocialRisk ? 'bg-orange-500' : 'bg-indigo-900'" class="rounded text-2xl text-white p-4">
        Lernen - soziales Risiko &amp; soziale Gerechtigkeit
      </button>
    </div>
    <div class="mt-8 lg:flex lg:justify-center">
        <div class="mt-4">
            <div v-if="isMobile">
                <LearnMobile/>
            </div>
            <div v-if="isContext">
                <LearnContext/>
            </div>
            <div v-if="isSocialRisk">
                <LearnSocialRisk/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LearnMobile from '@/components/LearnMobile.vue'
import LearnContext from '@/components/LearnContext.vue'
import LearnSocialRisk from '@/components/LearnSocialRisk.vue'

export default {
  name: 'Learning',
  components: {
    LearnMobile,
    LearnContext,
    LearnSocialRisk
  },
  data() {
    return {
      isMobile: true,
      isContext:false,
      isSocialRisk: false,
    }
  },
}
</script>