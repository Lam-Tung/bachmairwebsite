<template>
    <div>
        <div class="plusminus">
            <h2 @click="isOpen2009 = !isOpen2009" class="font-semibold">Vorträge 2009</h2>
            <button @click="isOpen2009 = !isOpen2009" class=" block focus:outline-none p-4">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isOpen2009" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path v-if="isOpen2009" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <ul :class="isOpen2009 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures2009" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
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
            <h2 @click="isOpen2010 = !isOpen2010" class="font-semibold">Vorträge 2010</h2>
            <button @click="isOpen2010 = !isOpen2010" class=" block focus:outline-none p-4">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isOpen2010" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path v-if="isOpen2010" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <ul :class="isOpen2010 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures2010" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
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
            <h2 @click="isOpen2011 = !isOpen2011" class="font-semibold">Vorträge 2011</h2>
            <button @click="isOpen2011 = !isOpen2011" class=" block focus:outline-none p-4">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isOpen2011" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path v-if="isOpen2011" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <ul :class="isOpen2011 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures2011" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
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
            <h2 @click="isOpen2012 = !isOpen2012" class="font-semibold">Vorträge 2012</h2>
            <button @click="isOpen2012 = !isOpen2012" class=" block focus:outline-none p-4">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isOpen2012" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path v-if="isOpen2012" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <ul :class="isOpen2012 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures2012" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
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
            <h2 @click="isOpen2013 = !isOpen2013" class="font-semibold">Vorträge 2013</h2>
            <button @click="isOpen2013 = !isOpen2013" class=" block focus:outline-none p-4">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isOpen2013" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path v-if="isOpen2013" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <ul :class="isOpen2013 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures2013" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
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
    name: "Lec20092013",
    data() {
        return {
            isOpen2009: false,
            isOpen2010: false,
            isOpen2011: false,
            isOpen2012: false,
            isOpen2013: false,
            
            lectures2009: [
                {
                    lecDate: 'Garmisch, 30. Nov. - 2. Dez. 2009',
                    lecDescription: 'Workshop der LondonMobileGroup "Technology-enhanced learning in the context of technological, societal and cultural transformations" auf der Tagung des Stellar Network of Excellence of Technology-Enhanced Learning; Vortrag: Operationalisation of a cultural ecology for mobile learning in the ongoing German school project "MyMobile: Handy im Unterricht"',
                    lecLocation: 'Garmisch',
                },
                {
                    lecDate: 'Italy, Bellaria, 21 - 24 Oct. 2009',
                    lecDescription: 'Second European congress of media literacy; Vortrag 1: Mobility with mobile phones in formal school instruction - a culture ecologic view on mobile learning; Vortrag 2: Cultural ecology of media education and learning',
                    lecLocation: 'Italy, Bellaria',
                },
                {
                    lecDate: 'USA, San Diego, Monday, April 13 - Friday, April 17',
                    lecDescription: 'American Educational Research Association, 2009 AERA Annual Meeting "Disciplined Inquiry: Education Research in the Circle of Knowledge"; "Session" together with N. Pachler, London, und John Cook, London: "Outside In and Inside Out: Interdisciplinarity and Mobile Learning Research"',
                    lecLocation: 'USA, San Diego',
                },
                {
                    lecDate: 'April 14, 2009',
                    lecDescription: '2009 AERA Annual Meeting - "Disciplined Inquiry: Education Research in the Circle of Knowledge", San Diego, USA; Dr. Norbert Pachler, Institute of Education University of London; Prof. Dr. John Cook, London Metropolitan University; Prof. Dr. Ben Bachmair, Universität Kassel; "Outside In and Inside Out: Interdisciplinarity and Mobile Learning Research"',
                    lecLocation: 'USA, San Diego',
                },
                {
                    lecDate: 'March 27, 2009',
                    lecDescription: '3rd WLE Mobile Learning Symposium: Mobile Learning Cultures across Education, Work and Leisure, WLE Centre, IOE London, UK; Review from Mark van\'t Hooft on Ubiquitous Thoughts',
                    lecLocation: 'London, UK',
                },
                {
                    lecDate: 'May 5, 2009',
                    lecDescription: 'Seminar: Visions for Mobile Learning, Aarhus University, Ben Bachmair: Pedagogy of mobile learning',
                    lecLocation: 'Arhus University',
                },
                {
                    lecDate: 'March 23 - 25, 2009',
                    lecDescription: 'CAL\'09',
                    lecLocation: 'Brighton, UK',
                },
            ],

            lectures2010: [
                {
                    lecDate: '9. Dezember 2010 - Risiko-Lerner und Kulturressourcen in der individualisierten, mobilen Gesellschaft – Ein pädagogischer Blick auf den dramatischen gesellschaftlichen Wandel',
                    lecDescription: 'Interfakultäres Forum Innsbruck Media Studies; Ringvorlesung „Medien und Minderheiten“, Vorlesung am 09.12.2010',
                    lecLocation: 'Leopold-Franzens Universität Innsbruck',
                },
                {
                    lecDate: '22. Oktober 2010  - Practice of mobile learning in the teacher guided instruction, a cultural ecological access',
                    lecDescription: 'Media education Today, An Open Discussion Forum, Facoltá di Scienze della Formazione',
                    lecLocation: 'Libera Università di Bolzano, Bressanone',
                },
                {
                    lecDate: '6. Oktober 2010  - Cultural resources for learning in the individualised, mobile society',
                    lecDescription: 'Final seminar of the "Ensemble project"',
                    lecLocation: 'Prato, Italy',
                },
                {
                    lecDate: '6. Oktober 2010  - Applied research for implementing mobile devices in schools',
                    lecDescription: 'Seminario di studi sul Mobile Learning, 6 ottobre 2010, Facoltà di Scienze della Formazione',
                    lecLocation: 'Università degli Studi di Firenze',
                },
                {
                    lecDate: '24-25. September 2010 - Bildung und semiotische Ressourcen der Mediengesellschaft',
                    lecDescription: '14. Buckower Mediengespräche: „Mein Avatar und ich. Die Interaktion von Realität und Virtualität in der Mediengesellschaft“, 24. und 25. September 2010',
                    lecLocation: null,
                },
            ],

            lectures2011: [
                {
                    lecDate: '21. November 2011 - Informal learning in ‘social mobile’ contexts examined in relation to formal, school-based mobile learning and current German media research',
                    lecDescription: 'SoMobNet: Social Mobile Networking For Informal Learning; Institute of Education',
                    lecLocation: 'University of London',
                },
                {
                    lecDate: '8. Juli 2011 - Medienbildung und Kulturökologie, eine hilfreiche Diskussion gegen die Vernützlichung des Lernens',
                    lecDescription: 'Universität Magdeburg, 4. Magdeburger Theorieforum Medienpädagogik „Positionen der Medienbildung“, organisiert und moderiert von Winfried Marotzki (Magdeburg) und Norbert Meder',
                    lecLocation: 'Bielefeld',
                },
                {
                    lecDate: '7. Juni 2011 - Das Handy als Lernressource',
                    lecDescription: '9. E-Learning Tag: "mobiLearning"',
                    lecLocation: 'Universität Innsbruck',
                },
                {
                    lecDate: '11. April 2011  - Learning with mobile phones in regular schools',
                    lecDescription: 'Institute of Education,  Learning and Teaching Conference',
                    lecLocation: 'University of London',
                },
                {
                    lecDate: '7-9. April 2011 - Media literacy, everybody’s darling or who does have the power for a media educational agenda setting',
                    lecDescription: 'First conference of the COST Action IS0906: Transforming Audiences, Transforming Societies in partnership with ECREA, IAMCR and ICA: New challenges and methodological innovations in European media audience research. Task force 4: Media literacy: ambitions, policies and measures',
                    lecLocation: 'University of Zagreb',
                },
                {
                    lecDate: '21-23. März 2011 - MyMobile – Handy im Unterricht',
                    lecDescription: 'zusammen mit Björn Friedrich, medien+bildung.com; 12.Gautinger Internet-Treffen: Digitale Jugendbildung, E- Partizipation in Jugendarbeit, Schule und Gesellschaft',
                    lecLocation: 'Institut für Jugendarbeit Gauting',
                },
                {
                    lecDate: '11. Februar 2011 - Mobiles Lernen in einem pädagogisch kulturökologischen Bezugsrahmen',
                    lecDescription: 'Fachtagung: "One to One Computing in der Schule", 11. Febr. 2011; Institut für Medien und Schule (IMS, http://ims.phz.ch)',
                    lecLocation: 'Pädagogischen Hochschule Zentralschweiz in Goldau',
                },
            ],

            lectures2012: [
                {
                    lecDate: '25. November 2012 - Mobiles Lernen - ein kulturökologischer,pädagogischer Rahmen und erprobte praktische Schulbeispiele',
                    lecDescription: 'Gesellschaft für Medien und Kommunikationskultur. Forum Kommunikationskultur 2012 Informelle und formelle Medienbildung',
                    lecLocation: 'Paderborn',
                },
                {
                    lecDate: '23. Mai 2012 - Kulturökologie des mobilen Lernens.',
                    lecDescription: 'Ringvorlesung Mobiles Lernen. Institut für Medien und Bildungstechnologie',
                    lecLocation: 'Universität Augsburg',
                },
                {
                    lecDate: '21. Mai 2012 -  Handys und Smartphones als neue Lernressource. Mobiles Lernen in neuen Lernsituationen.',
                    lecDescription: '“Halbzeit“ NMS eLearing-Symposium; Gesamtösterreichische eLearning-Tagung der Neuen Mittelschulen',
                    lecLocation: 'St. Johann/ Pongau',
                },
                {
                    lecDate: '27. & 28. März 2012 - Cultural Ecology as Referential Frame for Education',
                    lecDescription: 'Educational Media Ecologies: International Perspectives',
                    lecLocation: 'University of Paderborn',
                },
                {
                    lecDate: '9. März 2012 - Mobile Learning – Das Alltags-Handy auf dem Weg zur personalisierten, mobilen, konvergenten Lernressource.',
                    lecDescription: 'VW AutoUni. Netzwerktreffen Corporate Learning 2.0“',
                    lecLocation: 'Wolfsburg',
                },
                {
                    lecDate: '11. Januar 2012 - Learning with mobile phones in regular schools',
                    lecDescription: 'MirandaNet at BETT12: Exploiting mobile technologies in learning',
                    lecLocation: 'London',
                },
            ],

            lectures2013: [
                {
                    lecDate: '18. Dezember 2013 - Visual literacy under the societal and cultural condition of de-limitation (Entgrenzung). Theoretical arguments and practical examples',
                    lecDescription: 'Seminario interdisciplinare "La competenza visiva"; Facoltá di Scienze della Formazione',
                    lecLocation: 'Libera Univerità di Bolzano',
                },
                {
                    lecDate: '24. Oktober 2013 - Text+image workshop" for at risk-learners: "Far away from the school\'s essay form, but real writing with \'copy and paste\'',
                    lecDescription: 'MEDIANE THEMATIC ENCOUNTER; MEDIANE - Media in Europe for Diversity Inclusiveness within Journalism & Media Training & Literacy; A 2013-2014 EUROPEAN UNION / COUNCIL OF EUROPE JOINT INITIATIVE',
                    lecLocation: 'Firenze',
                },
                {
                    lecDate: '9. Oktober 2013 - Framework for (4) Sustainable (1) Mobile (2) Learning (3) Scenarios',
                    lecDescription: 'Bristol Centre for Research in Lifelong Learning and Education (BRILLE); Faculty of Arts, Creative Industries and Education',
                    lecLocation: 'University of the West of England',
                },
                {
                    lecDate: '19. März 2013 - Cultural Ecology for Mobile Learning',
                    lecDescription: 'M.A. Media, Identities and Consumption; Facoltà di Scienze Politiche "C.Alfieri"',
                    lecLocation: 'Dip. Scienza della politica e Sociologia (DISPO)',
                },
                {
                    lecDate: '18. März 2013 - On the Way to Sustainability and Evaluation of Mobile Learning',
                    lecDescription: 'Dipartimento di Scienze della Formazione e Psicologia, Seminar on mobile Learning',
                    lecLocation: 'UNIVERSITÀ DEGLI STUDI DI FIRENZE',
                },
                {
                    lecDate: '6. März 2014 - Bristol Ideas in Mobile Learning ',
                    lecDescription: 'Bristol Centre for Research in Lifelong Learning and Education (BRILLE); Faculty of Arts, Creative Industries and Education',
                    lecLocation: 'University of the West of England, Bristol',
                },
                {
                    lecDate: '13. Februar 2013 - Kulturelle Ressourcen - neue Perspektiven auf die Gruppe der Risiko-Lerner',
                    lecDescription: 'Vortragsreihe Promotionskolleg Heterogenität + Bildungserfolg',
                    lecLocation: 'Universität Augsburg',
                },
            ],
        }
    },
}
</script>