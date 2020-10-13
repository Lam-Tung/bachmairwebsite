<template>
    <div class="space-y-4">
        <div @click="isDefinitionOpen = !isDefinitionOpen" class="text-xl ml-4 mr-4 border-4 border-indigo-900 rounded cursor-pointer md:ml-12 md:mr-12 lg:ml-64 lg:mr-64">
            <h1 class="definitioncard">Was ist mobiles Lernen?</h1>
            <div v-if="!isDefinitionOpen">
                <p class="p-4 lg:p-8">
                    Mobiles Lernen zielt auf Lehr- und Lernformen, die medial-digitale Veränderungen in der Lebenswelt der Schülerinnen und Schüler in die Schule integrieren. Zur Lebenswelt gehören Handys ebenso wie Tablets. Welches didaktische Potential bieten Mobile Endgeräten als neue Kulturressource? Wie lässt sich dieses Potential mit Formen des situierten kooperierenden Lernens verbinden? (...mehr)
                </p>
            </div>
            <div v-if="isDefinitionOpen">
                <p class="p-4 lg:p-8">
                In der ersten Annäherung an eine Definition Mobilen Lernens handelt es sich um Lernen, bei dem die Anwendungsfunktionen mobiler digitaler Endgeräte eine Rolle spielen. Wenn Leseanfänger Wörter ihrer Lebenswelt wie Müllverbrennungsanlage mit dem Handy fotografieren und diese Fotos in der Grundschule ausdrucken, dann darüber reden, kommt die Fotofunktion des Handys beim Leselernen zum Tragen.
                </p>
                <p class="p-4 lg:p-8">
                    In einer zweiten Annäherung geht es nicht um die technischen Anwendungsfunktionen von Handy, Smartphone oder Tablet. Es steht vielmehr die Einbindung der mobilen Endgeräte in unsere Gesellschaft im Vordergrund. So sind Handy und Smartphone in den Alltag integriert. Smartphone und Tablet sind individueller Teil der Medienkonvergenz mit dem Internet. Tablets als technologische Abkömmlinge des PC stellen die Brücke zu bekannten Formen des digitalen Arbeitens her. Alle mobilen Endgeräte sind auf Kommunikation und Kooperation ausgelegt. Zumindest Handy und Smartphone sind ubiquitär, also im Prinzip jederzeit und überall individuell verfügbar. Diese Funktionen mobiler Endgeräte bieten eine Anbindung von Schule an informelles Lernen des Alltags, Möglichkeiten kooperativen Lernens, situiertes Lernen über Kontexte hinweg (context aware learning).
                </p>
                <p class="p-4 lg:p-8">
                    Um zu einer fundierten Definition mobilen Lernens zu kommen, ist es hilfreich die Passung (englisch: Affordance) der digitalen Mobil-Technologie an gesellschaftliche Strukturen wie Individualisierung und Ökonomisierung, dem Akteur-Status der Lernenden und den Kulturpraktiken des Lernens und Lehrens zu analysieren.
                </p>
            </div>
        </div>
        <div class="text-xl ml-4 mr-4 border-4 border-indigo-900 rounded md:ml-12 md:mr-12 lg:ml-64 lg:mr-64">
            <h1 class="definitioncard">Stichworte zum mobilen Lernen: Alltag, Schule, Ökonomie und Kultur</h1>
            <p class="p-4 lg:p-8">
                Mobiles Lernen bedeutet in einer ersten Definition, die neuen mobilen Digitaltechnologien, das sind im Moment vor allem Smartphones und Tablets, in Lernkontexten wie Schule oder für informelles Lernen im Alltag zu nutzen. Dafür gibt es auf den ersten Blick einen guten Grund: Weltweit trägt nahezu jeder ein Handy oder das internetfähig Smartphone bei sich. Dennoch verlangt Schule weltweit, Handys und Smartphones in der Schule auszuschalten. Mit Engagement unterstützen Lehrerinnen und Lehrer dieses Handy-Verbot.
            </p>
            <a href="pdfs/BachmairMobilesLernen8August14.pdf" download class="ref text-center p-2">
                Volltext hier als PDF herunterladen
            </a>
        </div>
        <div class="">
            <div class="plusminus">
                <h1 @click="isScenariosOpen = !isScenariosOpen" class="text-3xl underline font-semibold cursor-pointer">Szenarien</h1>
                <button @click="isScenariosOpen = !isScenariosOpen" class=" block focus:outline-none p-4">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isScenariosOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path v-if="isScenariosOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </button>
            </div>
            <div v-if="isScenariosOpen">
                <LearnMobileScenarios/>
            </div>
        </div>
    </div>
</template>

<script>

import LearnMobileScenarios from '@/components/LearnMobileScenarios.vue';

export default {
    name: "LearnMobile",
    components: {
        LearnMobileScenarios,
    },
    data() {
        return {
            isDefinitionOpen: false,
            isScenariosOpen: false,
            //pdfLink: require("@/assets/pdfs/BachmairMobilesLernen8August14.pdf"),
        } // end return
    }, // end data
} // end export
</script>