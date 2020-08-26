<template>
  <div id="app">
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
