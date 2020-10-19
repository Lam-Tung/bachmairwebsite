<template>
    <div class="text-white p-4 space-y-4 lg:space-y-0 lg:p-4 lg:mt-48 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
       <div @click="route('Impressum')" class="p-2 bg-indigo-900 cursor-pointer"> <!-- Home Box -->
           <div class="text-4xl underline font-semibold">Ben Bachmair</div>
           <div class="mr-2 text-right text-xl">Medien</div>
           <div class="mr-2 text-right text-xl">Kultur</div>
           <div class="mr-2 text-right text-xl">Bildung</div>
       </div>
       <div @click="route('CV')" class="p-2 bg-indigo-900 cursor-pointer"> <!-- Lebenslauf Box -->
           <div class="text-3xl font-semibold">Lebenslauf</div>
       </div>
       <div @click="route('Publications')" class="p-2 bg-indigo-900 cursor-pointer"> <!-- Veröffentlichungen Box -->
           <div class="text-3xl font-semibold">Veröffentlichungen</div>
       </div>
       <div @click="route('Lectures')" class="p-2 bg-indigo-900 cursor-pointer"> <!-- Vorträge Box -->
           <div class="text-3xl font-semibold">Vorträge</div>
       </div>
       <div @click="route('Learning')" class="p-2 bg-indigo-900 cursor-pointer"> <!-- Lernen Box -->
           <div class="text-3xl font-semibold">Lernen</div>
       </div>
       <div @click="route('CulturalEcology')" class="p-2 bg-indigo-900 cursor-pointer"> <!-- Kulturökologie Box -->
           <div class="text-3xl font-semibold">Kulturökologie</div>
       </div>
    </div>
</template>

<script>
export default {
    name: "WelcomePage",
    methods: {
        route(p) {
            this.$router.push({path: p});
        }
    },
}
</script>