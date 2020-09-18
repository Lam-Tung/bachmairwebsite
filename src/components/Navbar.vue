<template>
  <header class="bg-indigo-900 lg:flex lg:justify-center lg:items-center lg:px-4 lg:py-3">
    <div class="flex items-center justify-between px-4 py-3 lg:p-0">
      <div class="font-semibold text-4xl mr-4 text-white tracking-tight">
        Ben Bachmair
      </div>
      <div class="lg:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 lg:flex md:p-0 lg:text-2xl">
        <router-link to="/" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
          Home
        </router-link>
        <router-link to="/cv" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2">
          Lebenslauf
        </router-link>
        <router-link to="/publications" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2">
          Veröffentlichungen
        </router-link>
        <router-link to="/about" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2">
          Vorträge
        </router-link>
        <router-link to="/about" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2">
          Lernen
        </router-link>
        <router-link to="/about" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2">
          Kulturökologie
        </router-link>
        <router-link to="/impressum" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2">
          Impressum
        </router-link>
    </nav>
  </header>
</template>

<script>
export default {
   components: {
   },
   data() {
    return {
      isOpen: false,
    }
  },
}
</script>