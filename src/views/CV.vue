<template>
  <div class="home">
    <CVSelect/>
  </div>
</template>

<script>
// @ is an alias to /src
import CVSelect from '@/components/CVSelect.vue'

export default {
  name: 'CV',
  components: {
    CVSelect,
  }
}
</script>