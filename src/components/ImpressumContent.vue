<template>
  <div>
    <div class="flex p-8 justify-around items-center sm:justify-evenly">
      <span class="text-xl font-bold sm:text-4xl">Verantwortlich für den Inhalt der Seite:</span>
    </div>
    <div class="border-solid border-indigo-900 border-4 rounded ml-4 mr-4 mt-4 shadow-md ">
      <span class="flex justify-center text-2xl underline font-bold mt-6">Prof. Dr. Ben Bachmair</span>
      <div class="ml-2 mr-2 mt-4 mb-4 md:ml-48 lg:flex lg:ml-0 lg:justify-evenly">
        <div class="flex justify-start items-center">
          <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-xl font-medium ml-2">bachmair@em.uni-frankfurt.de</span>
        </div>
        <div class="flex justify-start items-center">
          <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-xl font-medium ml-2">ben.bachmair@t-online.de</span>
        </div>
        <div class="flex justify-start items-center">
          <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-xl font-medium ml-2">b.bachmair@ucl.ac.uk</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImpressumContent',
}
</script>