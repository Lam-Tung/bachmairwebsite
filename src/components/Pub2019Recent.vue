<template>
    <div>
       <ul class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="publication in publications" :key="publication.pubName" class="border-solid border-indigo-900 border-4 rounded ml-4 mr-4 mt-4 shadow-md">
               <div class="text-center text-lg font-semibold p-2">
                   {{publication.pubName}}
               </div>
               <div class="text-center p-2 pubsrc">
                   {{publication.pubSrcText}}
               </div>
               <div v-if="publication.download !== null" class="text-center mt-2">
                   <a :href="publication.download" class="ref">Download</a>
               </div>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    name: "Pub2019Recent",
    data() {
        return {
            publications: [
                {
                    pubName: 'Exploring Writing in a Digitally-Dominated Culture – Options for Formal Learning in Schools (2019)',
                    pubSrcText: 'Bachmair, Ben In: Media Education (Mediaobrazovanie), 2019, 59(3), pp. 338 – 366. ISSN 1994–4160. E–ISSN 1994–4195. DOI: 10.13187/me.2019.3.338. www.ejournal53.com. Academic Publishing House Researcher s.r.o. Bratislava, Published in the Slovak Republic',
                    download: 'http://ejournal53.com/en/archive.html?number=2019-09-20-14%3A38%3A17&journal=7&fbclid=IwAR2A3c8op9dgcV5sq7b3QbAtSIp2EVGEiAs2r68ZTR_WeLDaI0cywd0Lhzk',
                },
            ]
        }
    },
}
</script>