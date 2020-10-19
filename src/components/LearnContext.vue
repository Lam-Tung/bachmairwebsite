<template>
    <div class="space-y-4">
        <div @click="isDefinitionOpen = !isDefinitionOpen" class="text-xl ml-4 mr-4 border-4 border-indigo-900 rounded cursor-pointer md:ml-12 md:mr-12 lg:ml-64 lg:mr-64">
            <div v-if="!isDefinitionOpen">
                <h1 class="definitioncard">Lernen in den von Nutzern generierten Kontexten</h1>
                <p class="p-4 lg:p-8">
                    Da war die Lernwelt noch überschaubar, als die Schule noch die alleinige Definitionsmacht über das Lernen hatte. Heute lernen die Kinder schon über die verschiedensten Kontexte hinweg, indem sie ihre Konsumwelt, ihre Lernwelten, ihre Hobby-Welten als ihren Kontext generieren. Sie tun das flexibel und provisorisch. Dazu eignen hervorragend sich Handys, Tablets, Spielkonsolen und die anderen mobilen Endgeräte. Und was bedeutet das für die Entwicklung von Kindern und Jugendlichen? Eine kulturökologische Perspektive soll Antworten auf diese Frgaen bringen. <span class="ref">(...mehr)</span>
                </p>
            </div>
            <div v-if="isDefinitionOpen">
                <h1 class="definitioncard">Kontext bewusstes Lernen - Context aware learning</h1>
                <p class="pubsrc p-4">
                    Auszug aus Bachmair, Ben (2013). Auf dem Weg zu einer Didaktik mobilen Lernens. In: Schulpädagogik heute. Digitale Medien und Schule. Heft 7 (2013), 4. Jahrgang. ISSN 2191-754X
                </p>
                <p class="p-4 lg:p-8">
                    Die mobilen, individualisierten, digitalen Endgeräte erleben wir vor allem als Teil von Bewegung im Raum. Schon die immerwährende Verfügbarkeit verweist über die Bewegung im Raum auf das Phänomen der Kontexte. In den drei Beispielen für mobile Lernszenarien sind die Schüler vor allem in begehbaren Räumen innerhalb und außerhalb der Schule, z.B. bei der Hausaufgabe zuhause, in einer Fahrradwerkstatt, im Vortragsaal des Botanischen Gartens oder bei der Foto-Erkundung der neuen Schule. In diesen Szenerien kamen zu den konkreten Räumen Virtuelle Räume hinzu. Bei der Schulerkundung bekamen die Schülerinnen und Schüler den Anstoß, die Räume zu zeigen, in denen sie außerhalb der Schule leben. De taucht dann z.B. das Internet mit Facebook oder Websites zu Design und aktuellen Sprachlogos auf. Dabei handelt es sich um Kontexte, die die Schüler positiv oder negativ mit der Schule und dem schulischen Lernen verbinden.
                </p>
                <p class="p-4 lg:p-8">
                    Mobile Endgeräte sind auf Kontexte außerhalb des situativen Hier-und-Jetzt ausgerichtet. Das technische Stichwort dazu ist Konvergenz. An das was Kontexte ausmacht, kommt man näher heran, wenn man sich einen der Mechanismen vor Augen führt, die zur heute selbstverständlichen globalen Nutzung der digitalen Endgeräte geführt hat. Es ist die Detraditionalisierung von Handlungsrahmen die die Menschen heute immer neu entwerfen. Mit den Handlungsrahmen bestimmen sie ihre Lebens-Kontexte. Individualisierung und Mobilisierung der Massenkommunikation führt zu nutzergenerierten Kontexten und nutzergenerierten Inhalten. Damit werden Kontexte zu einen Definitionselement des heutigen Lebens.
                </p>
                <p class="p-4 lg:p-8">
                    Was ist ein Kontext? Ein Kontext ist ein im Konstruktionsprozess befindlicher Rahmen, ist also instabil und provisorisch. Provisorische Kontexte rahmen die optionale Verbindung von Handeln, Repräsentationsformen und Medien einschließlich der dafür relevanten Kompetenzen, virtueller und lokaler Orte und sozialer Bezugsfelder wie Milieus (vgl. Dourish 2004, Luckin et al 2005). In unserem Beispiel stellt der Schüler, der sich mit dem Foto von seiner Website auf dem T-Shirt als Tänzer zeigt, seinen Kontext her, in dem er Experte des Tanzes ist und seine eigene Facebook-Seite hat. Er verbindet sein Hobby mit Schule und Facebook. Es ist sein Kontext, den er an die Schule sozusagen andockt. Das Handy macht das Generieren persönlicher und provisorischer Kontexte allgegenwärtig. Kontexte sind ubiquitär, mobil, konvergent und individualisiert und stehen mit diesen Merkmalen der Struktur des tradierten Lernens entgegen. Die pädagogische Einordnung von Kontexten neuer Art gelingt, wenn sie sich auf die kulturelle Situiertheit von Wissen und Lernen bezieht, wie es John Seely Brown et al. vor mehr als zwei Jahrzehnten formuliert haben. In dieser Perspektive gehören Kontexte wesentlich zu Wissen und Lernen: <span class="italic">"...that knowledge is situated, being in part a product of the activity, context, and culture in which it is developed and used" (Brown, Collins, Duguid 1989, S.32)</span>
                </p>
                <p class="p-4 lg:p-8">
                    In diesen Kontexten reflektierend sich zu bewegen und diese Kontexte reflektiert zu generieren, wird auch zur Bildungsaufgabe. Dabei geht es um ein Kontext bewusstes Lernen.
                </p>
            </div>
        </div>
        <div class="plusminus">
            <h1 @click="isReportsOpen = !isReportsOpen" class="ml-4 text-3xl underline font-semibold cursor-pointer">Berichte und Projekte</h1>
            <button @click="isReportsOpen = !isReportsOpen" class=" block focus:outline-none p-4">
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isReportsOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path v-if="isReportsOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </button>
        </div>
        <div v-if="isReportsOpen">
            <LearnContextProjectsReports/>
        </div>
    </div>
</template>

<script>
import LearnContextProjectsReports from '@/components/LearnContextProjectsReports.vue';
export default {
    name: "LearnContext",
    components: {
        LearnContextProjectsReports,
    },
    data () {
        return {
            isDefinitionOpen: false,
            isReportsOpen: false,
        } // end return
    } // end data
}
</script>