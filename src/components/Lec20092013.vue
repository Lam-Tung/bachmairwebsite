<template>
    <div>
        <div class="plusminus">
            <h2 class="font-semibold">Vorträge 2009</h2>
            <button @click="isOpen2009 = !isOpen2009" class=" block focus:outline-none p-4">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isOpen2009" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path v-if="isOpen2009" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <ul :class="isOpen2009 ? 'block' : 'hidden'" class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="lecture in lectures" :key="lecture.lecDate" class="divide-y-2 divide-indigo-900 ml-4 mr-4 mt-4">
               <div class="text-center text-lg font-semibold p-4">
                   {{lecture.lecDate}}
               </div>
               <div class="text-center p-2">
                   {{lecture.lecDescription}}
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
            lectures: [
                {
                    lecDate: 'Garmisch, 30. Nov. - 2. Dez. 2009',
                    lecDescription: 'Workshop der LondonMobileGroup "Technology-enhanced learning in the context of technological, societal and cultural transformations" auf der Tagung des Stellar Network of Excellence of Technology-Enhanced Learning; Vortrag: Operationalisation of a cultural ecology for mobile learning in the ongoing German school project "MyMobile: Handy im Unterricht"',
                },
                {
                    lecDate: 'Italy, Bellaria, 21 - 24 Oct. 2009',
                    lecDescription: 'Second European congress of media literacy; Vortrag 1: Mobility with mobile phones in formal school instruction - a culture ecologic view on mobile learning; Vortrag 2: Cultural ecology of media education and learning',
                },
                {
                    lecDate: 'USA, San Diego, Monday, April 13 - Friday, April 17',
                    lecDescription: 'American Educational Research Association, 2009 AERA Annual Meeting "Disciplined Inquiry: Education Research in the Circle of Knowledge"; "Session" together with N. Pachler, London, und John Cook, London: "Outside In and Inside Out: Interdisciplinarity and Mobile Learning Research"',
                },
                {
                    lecDate: 'April 14, 2009',
                    lecDescription: '2009 AERA Annual Meeting - "Disciplined Inquiry: Education Research in the Circle of Knowledge", San Diego, USA; Dr. Norbert Pachler, Institute of Education University of London; Prof. Dr. John Cook, London Metropolitan University; Prof. Dr. Ben Bachmair, Universität Kassel; "Outside In and Inside Out: Interdisciplinarity and Mobile Learning Research"',
                },
                {
                    lecDate: 'March 27, 2009',
                    lecDescription: '3rd WLE Mobile Learning Symposium: Mobile Learning Cultures across Education, Work and Leisure, WLE Centre, IOE London, UK; Review from Mark van\'t Hooft on Ubiquitous Thoughts',
                },
                {
                    lecDate: 'May 5, 2009',
                    lecDescription: 'Seminar: Visions for Mobile Learning, Aarhus University, Ben Bachmair: Pedagogy of mobile learning',
                },
                {
                    lecDate: 'March 23 - 25, 2009',
                    lecDescription: 'CAL\'09',
                },
            ]
        }
    },
}
</script>