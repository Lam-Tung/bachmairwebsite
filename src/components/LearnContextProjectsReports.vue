<template>
    <div>
        <h1 class="definitioncard">Digitale Bildung</h1>
        <ul class="mt-4 lg:ml-64 lg:mr-64">
            <li v-for="de in digitalEducation" :key="de.name" class="border-solid border-indigo-900 border-4 rounded ml-4 mr-4 mt-4 shadow-md">
                <div class="pubname">
                    {{de.name}}
                </div>
                <div v-if="de.download !== null" class="text-center mt-2">
                    <a :href="de.download" class="ref">Bericht</a>
                </div>
            </li>
        </ul>
        <h1 class="definitioncard">Migration - Zweitspracherwerb</h1>
        <ul class="mt-4 lg:ml-64 lg:mr-64">
            <li v-for="m2l in migration2language" :key="m2l.name" class="border-solid border-indigo-900 border-4 rounded ml-4 mr-4 mt-4 shadow-md">
                <div class="pubname">
                    {{m2l.name}}
                </div>
                <div v-if="m2l.short !== null" class="text-center mt-2">
                    <a :href="m2l.short" class="ref">Kurzbericht</a>
                </div>
                <div v-if="m2l.download !== null" class="text-center mt-2">
                    <a :href="m2l.download" class="ref">Bericht</a>
                </div>
            </li>
        </ul>
        <h1 class="definitioncard">Re-interpretation of war</h1>
        <ul class="mt-4 lg:ml-64 lg:mr-64">
            <li v-for="war in reInterpretationWar" :key="war.name" class="border-solid border-indigo-900 border-4 rounded ml-4 mr-4 mt-4 shadow-md">
                <div class="pubname">
                    {{war.name}}
                </div>
                <div v-if="war.poster !== null" class="text-center mt-2">
                    <a :href="war.poster" class="ref">Poster</a>
                </div>
                <div v-if="war.short !== null" class="text-center mt-2">
                    <a :href="war.short" class="ref">Kurzbericht</a>
                </div>
                <div v-if="war.download !== null" class="text-center mt-2">
                    <a :href="war.download" class="ref">Report</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LearnContextProjectsReports",
    data() {
        return {
            digitalEducation: [
                {
                    name: 'Grundschulprojekt Gemeinsam Spiel- und Tanzszenarien in der Grundschule programmieren - Unterrichtseinheit zum Digitalen Lernen mit mobilen Endgeräten',
                    download: 'pdfs/Bericht-Spiel-+Tanzszenarien programmieren-Gersthofen.pdf',
                },
            ],
            migration2language: [
                {
                    name: 'Grundschulprojekt Wortschatzsuche - Mit Handy und Tablet unterwegs in der gelebten deutschen Sprache: Mitschüler als Lernpaten',
                    download: 'pdfs/Bericht Gersthofen Wortschatzsuche Bachmair+Hierdeis 9Dez16.pdf',
                    short: 'pdfs/Kurzbericht Wortschatzsuche.pdf',
                },
                {
                    name: 'Einwöchiges Projekt Spracherkundung einer Übergangsklasse einer Mittelschulschule - Schüler/innen unterstützen ihre neuen Mitschüler/innen als Lernpaten',
                    download: 'pdfs/Bericht Lernpaten Kerschensteiner Mittelschule Bachmair 27Okt15.pdf',
                    short: null,
                },
            ],
            reInterpretationWar: [
                {
                    name: 'Animals in war - workshop school for special education students',
                    download: 'pdfs/Bachmair+Peters Report-Animals in War 27Sept14.pdf',
                    poster: 'pdfs/Bachmair Poster Animals in War-Lansdowne 14 Sept14 .pdf',
                    short: null,
                },
                {
                    name: 'Awareness Path - London Grammar School',
                    download: 'pdfs/Report-ATS- Awareness path-Bachmair 14Sept14.pdf',
                    short: null,
                    poster: 'pdfs/Bachmair Poster Awareness Path-ATS 17 Sept14.pdf',
                },
                {
                    name: 'Traces of war and peace - rap workshop Augsburg',
                    download: 'pdfs/Report-Workshop Rap+War Bachmair 9March15.pdf',
                    short: 'pdfs/Kurzbericht Kreative Schreibwerkstatt \'Kriegsprojekt\', 14April15.pdf',
                    poster: null,
                },
            ],
        } // end return
    }, // end data
    
} // end export
</script>