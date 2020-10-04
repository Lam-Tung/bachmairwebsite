<template>
  <div id="app" class="antialiased mb-4">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
   components: {
     Navbar,
   },
   data() {
    return {
      isOpen: false,
    }
  },
}
</script>
