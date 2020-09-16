<template>
  <div>
    <div class="flex p-8 justify-around items-center sm:justify-evenly">
      <span class="text-xl font-bold sm:text-4xl">Verantwortlich für den Inhalt der Seite:</span>
      <img class="ml-4 rounded shadow-md" alt="bachmair.png" src="../assets/pictures/bachmair.png">
    </div>
    <div class="lg:flex">
      <img class="rounded h-auto w-auto overflow-hidden shadow-lg hidden lg:block border-indigo-900 lg:object-cover lg:max-w-6xl lg:ml-20" alt="bachmair.png" src="../assets/pictures/bachmairCV.png">
      <div>
        <span class="flex justify-center text-2xl font-bold md:mt-6 lg:block lg:ml-16">Prof. Dr. Ben Bachmair</span>
        <div class="flex justify-start items-center mt-2 ml-2 md:justify-center md:mt-6 lg:justify-start lg:ml-16">
          <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-xl font-medium">bachmair@em.uni-frankfurt.de</span>
        </div>
        <div class="flex justify-start items-center mt-2 ml-2 md:justify-center md:mt-6 lg:justify-start lg:ml-16">
          <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-xl font-medium">ben.bachmair@t-online.de</span>
        </div>
        <div class="flex justify-start items-center mt-2 ml-2 md:justify-center md:mt-6 lg:justify-start lg:ml-16">
          <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-xl font-medium">b.bachmair@ucl.ac.uk</span>
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