<template>
    <div>
        <ul class="mt-4 lg:ml-64 lg:mr-64">
            <li v-for="scenario in scenarios" :key="scenario.scenarioName" class="border-solid border-indigo-900 border-4 rounded ml-4 mr-4 mt-4 shadow-md">
                <div class="pubname">
                    {{scenario.scenarioName}}
                </div>
                <div class="text-center mt-2">
                    {{scenario.author}}
                </div>
                <div v-if="scenario.download !== null" class="text-center mt-2">
                    <a :href="scenario.download" class="ref">Download</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LearnMobileScenarios",
    data() {
        return {
            scenarios: [
                {
                    scenarioName: 'WhatsApp for Gender and Language Awareness (2015)',
                    author: 'Ben Bachmair',
                    download: 'pdfs/Bachmair-Scenarios Augsburg 2015 awareness+context.pdf',
                },
                {
                    scenarioName: 'Awareness Path (2014)',
                    author: 'Ben Bachmair',
                    download: 'pdfs/Bachmair awareness path ba 19Oct14.pdf',
                },
                {
                    scenarioName: 'Learning in and by generated, provisional Contexts (2014)',
                    author: 'Ben Bachmair',
                    download: 'pdfs/Bachmair 5 Nov 14 learning in and by generated context.pdf',
                },
                {
                    scenarioName: 'Agency and Life Orientation of Social Justice (2014)',
                    author: 'Ben Bachmair',
                    download: 'pdfs/Bachmair 5Nov 14 examples on social justice.pdf',
                },
                {
                    scenarioName: 'Zielorientiertes Schüler-Portfolio Übergangsklasse (2014)',
                    author: 'Ben Bachmair',
                    download: null,
                },
                {
                    scenarioName: 'Partner Interview (2013)',
                    author: 'Ben Bachmair',
                    download: 'pdfs/Bachmair-partner interview- 8Dez13.pdf',
                },
                {
                    scenarioName: 'Multimodal Bricolage (2013)',
                    author: 'Ben Bachmair, Norbert Pachler',
                    download: 'pdfs/Bachmair multimodal bricolage-text+image workshop.pdf',
                },
                {
                    scenarioName: 'Auf dem Weg zu einer Didaktik mobilen Lernens (2013)',
                    author: 'Ben Bachmair',
                    download: null,
                },
                {
                    scenarioName: 'Hausaufgaben (2013)',
                    author: 'Ben Bachmair',
                    download: 'pdfs/Hausaufgaben 2013 Ben Bachmair.pdf',
                },
                {
                    scenarioName: 'Botanische Garten / Botanical Garden (2012)',
                    author: 'Ben Bachmair',
                    download: null, //TODO eng and ger
                },
                {
                    scenarioName: 'Training Scenario - MyMobile (2012)',
                    author: 'Ben Bachmair, Norbert Pachler',
                    download: 'pdfs/Scenario 1 from MyMobile 2012.pdf',
                },
                {
                    scenarioName: 'Bicycle Workshop (2011)',
                    author: 'Ben Bachmair, Norbert Pachler',
                    download: 'pdfs/Bachmair Bicycle workshop 2011.pdf',
                },
                {
                    scenarioName: 'T-Shirt Images (2011)',
                    author: 'Ben Bachmair',
                    download: 'pdfs/Bachmair t-shirt images 2011.pdf',
                },
                {
                    scenarioName: 'Buchstaben und Laute suchen (2011)',
                    author: 'Ben Bachmair, Katja Friedrich, Maren Risch',
                    download: null,
                },
                {
                    scenarioName: 'Mit dem Handy Geräusche einfangen (2011)',
                    author: 'Ben Bachmair, Katja Friedrich, Maren Risch',
                    download: null,
                },
                {
                    scenarioName: 'Homework - Mathematic Angles (2011)',
                    author: 'Ben Bachmair, John Cook, Norbert Pachler',
                    download: 'pdfs/',
                },
            ],
        } // end return
    }, // end data
    
} // end export
</script>