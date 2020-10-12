<template>
    <div>
       <ul class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="publication in publications" :key="publication.pubName" class="border-solid border-indigo-900 border-4 rounded ml-4 mr-4 mt-4 shadow-md">
               <div class="pubname">
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
    name: "Pub20162018",
    data() {
        return {
            publications: [
                {
                    pubName: 'Skizzen zu einem Kultur-Paradigma für Pädagogik in einer Kultur disparater Transformation (2016)',
                    pubSrcText: 'Bachmair, Ben In: Theo Hug, Tanja Kohn, Petra Missomelius (Hg.) 2016. MEDIEN – WISSEN – BILDUNG. Medienbildung wozu? Innsbruck / innsbruck university press. S. 107 - 126 ISBN 978-3-903122-16-1',
                    download: null,
                },
                {
                    pubName: 'Recognition of the social different - social justice for learning within an individualized, mobile, convergent mass communication (2016)',
                    pubSrcText: 'Bachmair, Ben In: Brown, Elinor L., Krasteva, Anna, Ranieri, Maria (eds) (2016). E-learning & Social Media: Technology in 21st Century Education. Volume 10. International Advances in Education: Global Initiatives for Equality and Social Justice. Publisher: Information Age Publishing. IAP - Information Age Publishing, Inc. Charlotte USA',
                    download: null,
                },
                {
                    pubName: 'Disparate culture, disparate education - a discussion on school workshops about re-interpretations of war (2016)',
                    pubSrcText: 'Bachmair, Ben (2016). Disparate culture, disparate education - a discussion on school workshops about re-interpretations of war. Медиаобразование /MEDIA EDUCATION. Российский журнал истории, теории и практики медиапедагогики / Russian journal of history, theory and practice of media education. Выпуск № 1 Heft Nr. 1 /2016, pp. 21 - 46. e-ISSN 1994-4195',
                    download: 'https://www.mediagram.ru/netcat_files/101/119/h_a2de132c19666fbbbb5eb0784441ea1c',
                },
                {
                    pubName: 'Digital, individualized mobile devices as cultural resources for learning in the process of migration (2017)',
                    pubSrcText: 'Bachmair, Ben (2017). Digital, individualized mobile devices as cultural resources for learning in the process of migration. In: Медиаобразование /MEDIA EDUCATION. Российский журнал истории, теории и практики медиапедагогики / Russian journal of history, theory and practice of media education. № 2/2017, pp. 170 - 186. e-ISSN 1994-4195',
                    download: 'https://www.mediagram.ru/netcat_files/101/119/h_a2de132c19666fbbbb5eb0784441ea1c',
                },
                {
                    pubName: 'Mobilität - Innovationsanlässe für Pädagogik und Medienpädagogik in einer disparaten Kultur (2017)',
                    pubSrcText: 'Bachmair, Ben In: Swertz, C., Ruge, W., Schmölz, A., Barberi, A. (Hrsg.). Die Konstitution der Medienpädagogik. Zwischen interdisziplinärem Forschungsfeld und bildungswissenschaftlicher (Sub-)Disziplin. MedienPädagogik: Zeitschrift für Theorie und Praxis der Medienbildung, Heft 29. S. 195 - 215. Zürich. ISSN: 1424-3636',
                    download: 'https://www.medienpaed.com/issue/view/32',
                },
                {
                    pubName: 'Mediensozialisation in semiotischen Kontexten (2017)',
                    pubSrcText: 'Bachmair, Ben In: Lothar Mikos und Claudia Wegener (Hrsg.): Qualitative Medienforschung, ein Handbuch. 2 Auflage. UVK Verlagsgesellschaft Konstanz, München. S. 199-208. ISBN 978-3-8252-8647-7',
                    download: null,
                },
                {
                    pubName: 'Learning analytics and its metrics - approaching an educational frame via a social semiotic pathway (2018)',
                    pubSrcText: 'Bachmair, Ben, Turvey, Keith, Cook, John, Pachler, Norbert MedienImpulse, Beiträge zur Medienpädagogik 3/18. Wien.',
                    download: null,
                },
                {
                    pubName: 'Kulturökologie als Bezugsrahmen für mobiles Lernen in unserer disparaten Kultur (2018)',
                    pubSrcText: 'Ein Blick auf Kontexte, Kulturressourcen und deren Nachhaltigkeit im Kontext von Schule. Bachmair, Ben In: de Witt, Claudia, Gloerfeld, Christina (Hrsg.). Handbuch Mobile Learning. VS Verlag für Sozialwissenschaften. Wiesbaden. Seiten 673-695. eBook ISBN 978-3-658-19123-8; Hardcover ISBN 978-3-658-19122-1',
                    download: null,
                },
            ]
        }
    },
}
</script>