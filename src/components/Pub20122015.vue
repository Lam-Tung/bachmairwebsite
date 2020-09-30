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
    name: "Pub20122015",
    data() {
        return {
            publications: [
                {
                    pubName: 'Training Scenario n° 1: Bridging informal and formal education through mobile images - Integration of learners at a distance to formal education (2012)',
                    pubSrcText: 'Ben Bachmair, Norbert Pachler In: The "My Mobile" Handbook. Guidelines and scenarios for mobile learning in adult education.',
                    download: 'https://mymobile-project.eu/IMG/pdf/Handbook_web.pdf',
                },
                {
                    pubName: 'Mobile Learning | Some Considerations (2012)',
                    pubSrcText: 'Norbert Pachler, Judith Seipold, Ben Bachmair In: The "My Mobile" Handbook. Guidelines and scenarios for mobile learning in adult education ISBN 978-2-9601128-1-8',
                    download: 'https://mymobile-project.eu/IMG/pdf/Handbook_web.pdf',
                },
                {
                    pubName: 'Mobile Portfolios as Learning Resources (2012)',
                    pubSrcText: 'Pachler, Norbert, Bachmair, Ben In:The "My Mobile" Handbook. Guidelines and scenarios for mobile learning in adult education ISBN 978-2-9601128-1-8',
                    download: 'iwfkjeijfioefj',
                },
                {
                    pubName: 'Kulturressourcen für Selbstrepräsentation jugendlicher Migranten im Kontext der Schule (2012)',
                    pubSrcText: 'Ben Bachmair In: Kriwak, Andreas, Pallaver, Günther (Hrsg.): Medien und Minderheiten. Innsbruck University Press. Innsbruck 2012, S. 173 – 198. ISBN 978-3-902811-57-8',
                    download: null,
                },
                {
                    pubName: 'Von der Erkundung von Kontexten bis zum Schreibimpuls - Lernen mit mobilen, individualisierten und konvergenten Kulturressourcen (2013)',
                    pubSrcText: 'Bachmair, Ben In: informationen zur deutschdidaktik (ide). Zeitschrift für den Deutschunterricht in Wissenschaft und Schule. Heft "Literalität in der neuen Kommunikationslandschaft" Innsbruck: StudienVerlag ISSN 0721-9954',
                    download: 'https://ide.aau.at/wp-content/uploads/2017/11/2013-1-Bachmair.pdf',
                },
                {
                    pubName: 'Auf dem Weg zu einer Didaktik mobilen Lernens (2013)',
                    pubSrcText: 'In: Schulpädagogik heute, Digitale Medien und Schule. Heft 7, 4. Jahrgang. ISSN 2191-754X, 16 Seiten. Nachdruck in: Micheuz, Peter, Brandhofer, Gerhard, Ebner, Martin, Sabitzer, Barbara (Hrsg.): Digitale Schule Österreich, Österreichische Computer Gesellschaft. Wien 2013, S.313 - 327. ISBN 978-3-85403-297-7. In: Reihe: Theorie und Praxis der Schulpädagogik, Band 19 Dietrich Karpa / Birgit Eickelmann / Silke Grafe (Hrsg.): Digitale Medien und Schule. Zur Rolle digitaler Medien in Schulpädagogik und Lehrerbildung. S.346, ISBN 978-3-934575-75-2',
                    download: 'http://www.informatische-grundbildung.com/app/download/5823156964/mobile-didaktik.pdf?t=1379800459',
                },
                {
                    pubName: 'Using social network sites and mobile technology to scaffold equity of access to cultural resources (2013)',
                    pubSrcText: 'Cook, John, Pachler, Norbert and Bachmair, Ben (2013). In: Trentin, G. and Repetto, M. (eds) Using network and mobile technology to bridge formal and informal learning. Cambridge: Woodhead Publishing. pp. 31 - 56. ISBN 184-334-699-0; ISBN-13: 978 1 84334 699 9',
                    download: 'https://www.sciencedirect.com/science/article/pii/B9781843346999500021?via%3Dihub',
                },
                {
                    pubName: 'A socio-cultural frame for mobile learning (2013)',
                    pubSrcText: 'Pachler, Norbert, Bachmair, Ben and Cook, John In: Berge, Z. and Muilenburg, L. (eds) In: Berge, Zane L. and Muilenburg, Lin Y. (eds) Handbook of Mobile Learning. New York: Routledge, pp. 35 - 46. ISBN 978-0-415-50369-3 (hbk), ISBN 978-0-203-11876-4 (ebk) (Awarded the "2014 Association for Educational Communications and Technology (AECT) Division of Distance Learning (DDL) Distance Education Book Award")',
                    download: null, // link kaputt
                },
                {
                    pubName: 'Composition and appropriation in a culture characterised by provisionality (2013)',
                    pubSrcText: 'Ben Bachmair, Norbert Pachler In: Norbert, Pachler, Margit Böck (eds.): "Multimodality and Social Semiosis: Communication, Meaning-Making, and Learning in the work of Gunther Kress." Routledge, New York. Chapter: 22. pp. 213 - 222 ISBN: 978-0-415-50814-8 (hbk), ISBN: 978-0-203-76109-0 (ebk)',
                    download: 'https://www.routledge.com/Multimodality-and-Social-Semiosis-Communication-Meaning-Making-and-Learning/Bock-Pachler/p/book/9780415508148',
                },
                {
                    pubName: 'Kulturökologie, Medien und Mediennutzung (2014)',
                    pubSrcText: 'Bachmair, Ben, Pachler, Norbert, Cook, John In: Angela Tillmann, Sandra Fleischer, Kai-Uwe Hugger (Hrsg.) Handbuch: Kinder und Medien, VS Verlag. S. 137 - 151 ISBN 978-3-531-18263-6, e-book: ISBN 978-3-531-18997-0',
                    download: 'https://link.springer.com/chapter/10.1007%2F978-3-531-18997-0_10',
                },
                {
                    pubName: 'Literacy in a culture of Delimitation and Provisionality (2014)',
                    pubSrcText: 'Bachmair, Ben and Pachler, Norbert In: International Journal of Learning and Media 4(3). Special Issue on "New Media, New Literacies, New Forms of Learning", pp. 19 - 32',
                    download: 'http://ben-bachmair.de/Neuere_Veroffentlichungen_files/Bachmair%26Pachler%20-Literacy-Delimitation-%202014%20ijlm_a_00099.pdf',
                },
                {
                    pubName: 'Mobilität und Schule - eine didaktische Annäherung (2014)',
                    pubSrcText: 'Bachmair, Ben In: Susanne Eichner, Elizabeth Prommer (Hrsg.): Fernsehen: Europäische Perspektiven. Festschrift für Prof. Dr. Lothar Mikos. UVK Verlagsgemeinschaft: Konstanz, München 2014. S. 269 - 285',
                    download: null,
                },
                {
                    pubName: 'A cultural ecological frame for mobility and learning (2014)',
                    pubSrcText: 'Bachmair, B. and Pachler, N. In: Dorothee Meister, Theo Hug, Norm Friesen (eds). Educational Media Ecologies: International Perspectives. MedienPädagogik 24 (4. Sept.): 53 - 74',
                    download: 'null', // link kaputt
                },
                {
                    pubName: 'Framing ubiquitous mobility educationally: mobile devices and context-aware learning (2014)',
                    pubSrcText: 'Bachmair, B. and Pachler, N. In: Wong, L. H., Specht, M. and Milrad, M. Seamless learning in the age of mobile connectivity. New York: Springer',
                    download: 'https://www.researchgate.net/publication/268819076_Framing_Ubiquitous_Mobility_Educationally_Mobile_Devices_and_Context-Aware_Learning',
                },
                {
                    pubName: 'Mobile Medien als Kulturressourcen für Lernen, ein kulturökologischer Beitrag zur Medienbildung (2014)',
                    pubSrcText: 'Bachmair, Ben, Pachler, Norbert, Cook, John In: Winfried Marotzki, Norbert Meder (Hrsg.). Perspektiven der Medienbildung. Wiesbaden (Verlag für Sozialwissenschaften/Springer) 2014, Reihe "Medienbildung und Gesellschaft". S. 209 - 233 ISBN: 978-3-6658-03528-0 (Print) 978-3-658-03529-7 (Online)',
                    download: 'https://link.springer.com/chapter/10.1007%2F978-3-658-03529-7_10#page-1',
                },
                {
                    pubName: 'Mobile Learning - Strategies for planning and implementing learning with mobile devices in secondary school contexts (2014)',
                    pubSrcText: 'Seipold, Judith, Pachler, Norbert, Bachmair, Ben and Döbeli, Beat In: Leask, M. and Pachler, N. (eds) Learning to teach using ICT in the Secondary School. 3rd edition. London: Routledge ISBN 978-0-415-51651-8 ISBN 978-0-415-51652-5 ISBN 978-0-203-12420-8',
                    download: 'https://www.researchgate.net/publication/269393517_Mobile_learning_strategies_for_planning_and_implementing_learning_with_mobile_devices_in_secondary_school_contexts',
                },
                {
                    pubName: 'Sustainability for innovative education - the case of mobile learning (2015)',
                    pubSrcText: 'Bachmair, Ben, Pachler N. In: Journal of Interactive media in Education (JIME). The Open University. Milton Keynes, UK. E-ISSN: 1365-893X',
                    download: 'https://jime.open.ac.uk/articles/10.5334/jime.ay/',
                },
                {
                    pubName: 'Media Educational Endeavour In Our Disparate Cultural Development (2015)',
                    pubSrcText: 'Ben Bachmair, Howard Scott Herausgeber: Digital Mobility, complete journal: ',
                    download: 'http://riviste.erickson.it/med/it/category/2015/novembre-2015/',
                },
            ]
        }
    },
}
</script>