<template>
    <div class="space-y-4">
        <div class="ml-4 mr-4 border-4 border-indigo-900 rounded md:ml-12 md:mr-12 lg:ml-64 lg:mr-64">
            <h1 class="text-center text-2xl font-semibold p-4">Was ist mobiles Lernen?</h1>
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
        <div class="ml-4 mr-4 border-4 border-indigo-900 rounded md:ml-12 md:mr-12 lg:ml-64 lg:mr-64">
            <h1 class="text-center text-2xl font-semibold p-4">Stichworte zum mobilen Lernen: Alltag, Schule, Ökonomie und Kultur</h1>
            <p class="p-4 lg:p-8">
                Mobiles Lernen bedeutet in einer ersten Definition, die neuen mobilen Digitaltechnologien, das sind im Moment vor allem Smartphones und Tablets, in Lernkontexten wie Schule oder für informelles Lernen im Alltag zu nutzen. Dafür gibt es auf den ersten Blick einen guten Grund: Weltweit trägt nahezu jeder ein Handy oder das internetfähig Smartphone bei sich. Dennoch verlangt Schule weltweit, Handys und Smartphones in der Schule auszuschalten. Mit Engagement unterstützen Lehrerinnen und Lehrer dieses Handy-Verbot.
            </p>
            <button @click="downloadWithAxios(src, title)" class="ref text-center p-2">
                Volltext hier als PDF herunterladen
            </button>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: "LearnMobile",
    data() {
        return {
            title : 'WasIstMobilesLernen.png',
            src : require('../assets/pictures/bachmair.png'),
            
            filesrcs: [
                {
                    title: 'WasIstMobilesLernen.pdf',
                    src: 'http://ben-bachmair.de/Mobiles_Lernen_-_Was_ist_mobiles_Lernen_files/Bachmair%20Mobiles%20Lernen%208August14.pdf',
                },
                
            ],
        } // end return
    }, // end data
    methods: {
        forceFileDownload(response, title) {
            console.log(title)
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', title)
            document.body.appendChild(link)
            link.click()
        },
        downloadWithAxios(url, title) {
            axios({
                method: 'get',
                url,
                responseType: 'arraybuffer',
            })
                .then((response) => {
                this.forceFileDownload(response, title)
                })
                .catch(() => console.log('error occured'))
        },
  } // end methods
} // end export
</script>