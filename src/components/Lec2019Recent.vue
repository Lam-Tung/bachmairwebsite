<template>
    <div>
        <h2 @click="isOpen2019 = !isOpen2019" class="lectures">Vorträge 2019</h2>
        <ul :class="isOpen2019 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures2019" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
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
        <h2 @click="isOpen2020 = !isOpen2020" class="lectures">Vorträge 2020</h2>
        <ul :class="isOpen2020 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures2020" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
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
    name: "Lec2019Recent",
    data() {
        return {
            isOpen2019: false,
            isOpen2020: false,

            lectures2019: [
                {
                    lecDate: '22. Nov. 2019 - Lehrerbildungszentrum der Rheinisch-Westfälische Technische Hochschule Aachen',
                    lecDescription: 'Rheinisch Aachener Didaktiktag 2019, Digitalpakt Schule! Impulsvortrag: Digitale Bildung – Kultur und Didaktik in Umbrüchen. / Workshop: Schulentwicklung hin zur digitalen Bildung – Erfahrungen, Leitlinien, Perspektiven.',
                    lecLocation: 'Technische Hochschule Aachen',
                },
                {
                    lecDate: '6. Juli 2020 - Goethe Universität Frankfurt, Ringvorlesung',
                    lecDescription: 'Einführung in die Pädagogik der Lebensalter, Medialisierung des Lernens. Vorlesung: Lernen im Digitalzeitalter',
                    lecLocation: 'Goethe Universität Frankfurt',
                },
                {
                    lecDate: 'Sommersemester 2019 - Goethe Universität Frankfurt',
                    lecDescription: 'Seminar: Auf einem pädagogischen Weg zur Digitalen Bildung mit Mobilem Lernen - Schwerpunkt Schulpraxis; Seminar: Medienpädagogik und Pädagogik kulturökologisch denken – Schwerpunkt Theorie',
                    lecLocation: 'Goethe Universität Frankfurt',
                },
                {
                    lecDate: 'Wintersemester 2019/ 20 - Goethe Universität Frankfurt',
                    lecDescription: 'Seminar: Auf einem pädagogischen Weg zur Digitalen Bildung mit Mobilem Lernen – Schwerpunkt Schulpraxis; Seminar: Bildung in der Wissensgesellschaft kulturökologisch denken – Schwerpunkt Theorie',
                    lecLocation: 'Goethe Universität Frankfurt',
                },
                {
                    lecDate: '26. Feb. 2019 - UCL Institute of Education, University College London, Module: Literacy, Language and Communication',
                    lecDescription: 'Lecture: Literacy within the mobile complex. Communicating and learning across mobile, portable and digital technologies',
                    lecLocation: 'UCL Institute of Education, University College London',
                },
            ],

            lectures2020: [
                {
                    lecDate: '15. Juli 2020 - UCL Knowledge Lab Seminar Series, University College London',
                    lecDescription: 'Online-Vorlesung: Cultural ecology for framing Digital Education in our disparate culture and its disruptions',
                    lecLocation: 'University College London',
                },
                {
                    lecDate: '06.07.2020 - Goethe Universität Frankfurt - Ringvorlesung',
                    lecDescription: 'Einführung in die Pädagogik der Lebensalter, Medialisierung des Lernens. Online-Vorlesung: Sozialisation im sich verändernden Kulturfeld der Medien und der Massenkommunikation – Vom Leitmedium Fernsehen zur individualisierten Massenkommunikation auf der Basis digitaler Strukturen',
                    lecLocation: 'Goethe Universität Frankfurt',
                },
                {
                    lecDate: 'Sommersemester 2020 - Goethe Universität Frankfurt',
                    lecDescription: 'Online-Seminar: Digitale Bildung in der Wissensgesellschaft kulturökologisch denken – Schwerpunkt Theorie; Online-Seminar: Digitale Bildung mit mobilem Lernen - Schwerpunkt Praxis und Schule',
                    lecLocation: 'Goethe Universität Frankfurt',
                },
                {
                    lecDate: '24. März 2020 - UCL Institute of Education, University College London, MA Digital Media: Education at UCL IoE, Module: INTERNET CULTURES, Theory and Practice',
                    lecDescription: 'Online-Lecture: The changing cultural field of media and mass communication. The changing cultural field of media and mass communication. From the linear TV-based mass communication to individualized, user-generated and Internet based semiotic spaces (contexts)',
                    lecLocation: 'UCL Institute of Education, University College London',
                },
                {
                    lecDate: '3. März 2020 - UCL Institute of Education, University College London, Module: Literacy, Language and Communication',
                    lecDescription: 'Online-Lecture: Digital mobility in contexts and mobile learning',
                    lecLocation: 'UCL Institute of Education, University College London',
                },
                {
                    lecDate: '26. Feb. 2020 - Rhein-Sieg-Gymnasium in Sankt Augustin – Fortbildungstag',
                    lecDescription: 'Online-Vortrag: Kulturelle Umbrüche fordern Digitale Bildung',
                    lecLocation: 'Rhein-Sieg-Gymnasium in Sankt Augustin',
                },
            ],
        }
    }, // end data()
} // end export
</script>