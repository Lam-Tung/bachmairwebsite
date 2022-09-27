<template>
    <div>
       <ul class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="publication in publications" :key="publication.pubName" class="border-solid border-indigo-900 border-4 rounded ml-4 mr-4 mt-4 shadow-md">
               <div class="pubname">
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
                {
                    pubName: 'Ben Bachmair (2021). Sozialisation im sich verändernden Kulturfeld der Medien und der Massenkommunikation',
                    pubSrcText: 'In: Braches-Chyrek, Rita, Röhner, Charlotte, Moran-Ellis, Jo, Sünker, Heinz (Hrsg.) (2021). Handbuch Kindheit, Technik und das Digitale. Opladen, Berlin, Toronto: Barbara Budrich, S. 164 – 182',
                    download: null,
                },
                {
                    pubName: 'Ben Bachmair (2021). Digital Education - on the way to a critical discourse',
                    pubSrcText: 'In: Rivista "Sociologie" Vol II, n. 1, 2021, pp. 35 - 49- ISSN Online 2724-6078. DOI 10.53119g/se.2021.1.03',
                    download: 'http://ojs.edizionialtravista.com/sociologie',
                },
                {
                    pubName: 'Bachmair, Ben (2022): Individualisierte, digital basierte Massenkommunikation als kultureller Bildungsraum – Argumentationsmuster zur Digitalisierung von Bildung',
                    pubSrcText: 'In: Felgentreu, Jessica, Gloerfeld, Christina, Grüner, Claudia/Karolyi, Heike, Leineweber, Christian, Weßler, Linda, Wrede, Silke (Hrsg.) (2022). Bildung und Medien: Theorien, Konzepte, Innovationen. Springer VS: Wiesbaden',
                    download: null,
                },
                {
                    pubName: 'Ben Bachmair (2022). Auf dem digitalen und multimodalen Weg zur eigenen Biografie',
                    pubSrcText: 'In: Grisko, Michael, Seibert, Peter (Hrsg). Biographische Miniaturen. Eine Hommage für Helmut Festschrift für Helmut Scheuer. Leipziger Universitätsverlag: Leipzig. S. 9 – 16',
                    download: null,
                },
                {
                    pubName: 'Ben Bachmair (2023). Kulturökologischer Bezugsrahmen für Bildung in unserer digital geprägten Kultur',
                    pubSrcText: 'In: Grimm, Petra, Trost, Kai Erik, Zöllner, Oliver (Hrsg.): Handbuch der Digitalen Ethik. Nomos Verlag: Baden-Baden',
                    download: null,
                },
            ]
        }
    },
}
</script>