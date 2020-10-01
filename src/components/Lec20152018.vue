<template>
    <div>
        <div class="plusminus">
            <h2 @click="isOpen2015 = !isOpen2015" class="font-semibold text-xl">Vorträge 2015</h2>
            <button @click="isOpen2015 = !isOpen2015" class=" block focus:outline-none p-4">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isOpen2015" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path v-if="isOpen2015" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <ul :class="isOpen2015 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures2015" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
               <div class="text-center text-lg font-semibold p-4">
                   {{lecture.lecDate}}
               </div>
               <div class="text-center p-2">
                   {{lecture.lecDescription}}
                   <div v-if="lecture.lecLocation !== null" class="text-center mt-2 italic">
                        {{lecture.lecLocation}}
                    </div>
               </div>
            </li>
        </ul>
        <div class="plusminus">
            <h2 @click="isOpen2016 = !isOpen2016" class="font-semibold text-xl">Vorträge 2016</h2>
            <button @click="isOpen2016 = !isOpen2016" class=" block focus:outline-none p-4">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isOpen2016" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path v-if="isOpen2016" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <ul :class="isOpen2016 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures2016" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
               <div class="text-center text-lg font-semibold p-4">
                   {{lecture.lecDate}}
               </div>
               <div class="text-center p-2">
                   {{lecture.lecDescription}}
                   <div v-if="lecture.lecLocation !== null" class="text-center mt-2 italic">
                        {{lecture.lecLocation}}
                    </div>
               </div>
            </li>
        </ul>
        <div class="plusminus">
            <h2 @click="isOpen2017 = !isOpen2017" class="font-semibold text-xl">Vorträge 2017</h2>
            <button @click="isOpen2017 = !isOpen2017" class=" block focus:outline-none p-4">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isOpen2017" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path v-if="isOpen2017" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <ul :class="isOpen2017 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures2017" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
               <div class="text-center text-lg font-semibold p-4">
                   {{lecture.lecDate}}
               </div>
               <div class="text-center p-2">
                   {{lecture.lecDescription}}
                   <div v-if="lecture.lecLocation !== null" class="text-center mt-2 italic">
                        {{lecture.lecLocation}}
                    </div>
               </div>
            </li>
        </ul>
        <div class="plusminus">
            <h2 @click="isOpen2018 = !isOpen2018" class="font-semibold text-xl">Vorträge 2018</h2>
            <button @click="isOpen2018 = !isOpen2018" class=" block focus:outline-none p-4">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isOpen2018" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path v-if="isOpen2018" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <ul :class="isOpen2018 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures2018" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
               <div class="text-center text-lg font-semibold p-4">
                   {{lecture.lecDate}}
               </div>
               <div class="text-center p-2">
                   {{lecture.lecDescription}}
                   <div v-if="lecture.lecLocation !== null" class="text-center mt-2 italic">
                        {{lecture.lecLocation}}
                    </div>
               </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Lec20152018",
    data() {
        return {
            isOpen2015: false,
            isOpen2016: false,
            isOpen2017: false,
            isOpen2018: false,

            lectures2015: [
                {
                    lecDate: '30. Oktober 2015 - Lernen als Re-Interpretation und Context Aware Learning - Bericht aus drei Schulprojekten zum Thema Krieg',
                    lecDescription: 'Sektion Medienpädagogik der Deutschen Gesellschaft für Erziehungswissenschaft: Digitaler Raum – Digitale Zeit. Form und Veränderung grundlegender Kategorien von Erfahrung und ihre Bedeutung für die Medienpädagogik.',
                    lecLocation: 'München, Landesanstalt für Neue Medien',
                },
                {
                    lecDate: '13. und 14. November 2015 - Medienkompetenz und Medienbildung',
                    lecDescription: 'Seminar am Institut für psychosoziale Intervention und Kommunikationsforschung',
                    lecLocation: 'Universität Innsbruck',
                },
            ],

            lectures2016: [
                {
                    lecDate: 'March 8th, 2016 - Mobile Learning in the tension between sustainability and innovation. Report of a running project. Learning Buddies. Peer assisted learning in the process of migration',
                    lecDescription: 'Workshop UNESCO Mobile Learning Week',
                    lecLocation: 'Paris',
                },
                {
                    lecDate: 'June 29th, 2016 - Hermeneutically extracted layers in the development of European educational endeavours. / From a German point of view / Learning Buddies. “My input as a young citizen to migration” A social semiotic and social ecological approach to learning',
                    lecDescription: 'Workshop “Re-Thinking education in Europe: detraditionalization, migration, extremism and rising inequalities: Education of Muslims as input for debating citizenship as a core value for education.” Centre for Research and Evaluation in Muslim Education (CREME)',
                    lecLocation: 'UCL Institute of Education, London',
                },
                {
                    lecDate: '29. September 2016 - Mobilität und muslimische Erziehung - Innovationsanlässe für Pädagogik und Medienpädagogik in einer disparaten Kultur',
                    lecDescription: 'Herbsttagung der Sektion Medienpädagogik der Deutschen Gesellschaft für Erziehungswissenschaft und der ÖGFEB. Universität Wien, Institut für Bildungswissenschaft: Die Konstitution der Medienpädagogik. Zwischen interdisziplinärem Forschungsfeld und bildungswissenschaftlicher (Sub-) Disziplin',
                    lecLocation: 'Universität Wien, Institut für Bildungswissenschaft',
                },
                {
                    lecDate: '15. Dezember 2016',
                    lecDescription: 'Was soll Kulturökologie in der Medienpädagogik?',
                    lecLocation: 'Institut für Psychosoziale Intervention und Kommunikationsforschung, Universität Innsbruck',
                },
            ],

            lectures2017: [
                {
                    lecDate: 'Feb. 28th, March 2nd, 2017 - Communicating and learning across mobile, portable and digital technologies',
                    lecDescription: 'Lectures in the module "Literacy, Language and Communication”',
                    lecLocation: 'UCL Institute of Education, London',
                },
                {
                    lecDate: 'July 5th, 2017 - Learning Buddies. A social semiotic and social ecological approach to learning',
                    lecDescription: 'Workshop “Educating for Inclusion – New Arrivals in Our Schools: A Workshop for Teachers in Tower Hamlets”',
                    lecLocation: 'HEC Global Learning Centre, Tower Hamlets, London',
                },
            ],

            lectures2018: [
                {
                    lecDate: 'Feb 27th und March 6th, 2018 - Communicating and learning across mobile, portable and digital technologies',
                    lecDescription: 'Lectures in the module "Literacy, Language and Communication”',
                    lecLocation: 'UCL Institute of Education, London',
                },
                {
                    lecDate: '19. März 2018 - Vorbereitung und Leitung des Symposiums “Challenges for Mobile Learning: Ecologies, Mobilities, and Migration“; Vortrag „Mobile learning in the process of migration, case studies on second language appropriation in schools”',
                    lecDescription: 'Deutsche Gesellschaft für Erziehungswissenschaft, Kongress: Bewegung / Mobility',
                    lecLocation: 'Universität Duisburg-Essen',
                },
                {
                    lecDate: '20. April 2018 - Wissensgesellschaft - Wenn Lernen und Wissen zur Ressource werden',
                    lecDescription: 'SIN Studio im Netz, Bayerischen Landeszentrale für neue Medien. Fachtag “Kinder in der Wissensgesellschaft”; “Sprachförderung – eine Aufgabe der Medienbildung”',
                    lecLocation: null,
                },
                {
                    lecDate: '1. Sept. 18 - Introduction to mobile learning. A framework for integrating the pedagogical and cultural values of mobile learning',
                    lecDescription: 'Online-Seminar im Master-Kurs “Le nuove competenze digitali”',
                    lecLocation: 'Facoltà di Scienze della Formazione, Università di Firenze',
                },
            ],
        }
    }, // end data()
} // end export
</script>