<template>
    <div>
       <ul class="mt-4 lg:ml-64 lg:mr-64">
           <li v-for="publication in publications.slice().reverse()" :key="publication.pubName" class="border-solid border-indigo-900 border-4 rounded ml-4 mr-4 mt-4 shadow-md">
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
    name: "CulturalEcologyPub",
    data() {
        return {
            publications: [
                {
                    pubName: 'Bachmair, Ben (2008). Kulturell situiertes Handeln und Lernen: der Gedanke der Kulturökologie',
                    pubSrcText: 'In: Böck, Margit (Hrsg.): Medien Journal - Zeitschrift für Kommunikationskultur, Heft 1, Nummer 32: Lernen, Ein zentraler Begriff für die Kommunikationswissenschaft. Salzburg (Studienverlag) 2008, Seite 19-30 (ISSN 1025-0473)',
                    download: null,
                },
                {
                    pubName: 'Bachmair, Ben (2011). Selbstrepräsentation – Bildung und semiotische Ressourcen in der Mediengesellschaft',
                    pubSrcText: 'In: Klaus-Dieter Felsmann (Hrsg.) (2011). Mein Avatar und ich. Die Interaktion von Realität und Virtualität in der Mediengesellschaft. Buckower Mediengespräche 14. Kopaed. München. S. 99 – 113, 14 Seiten. ISBN 978-3-86736-014-2',
                    download: null,
                },
                {
                    pubName: 'John Cook, Norbert Pachler, Ben Bachmair (2011). Ubiquitous Mobility with Mobile Phones: a cultural ecology for mobile learning',
                    pubSrcText: 'E–Learning and Digital Media, Special Issue - Media: digital, ecological, epistemological. Volume 8 Number 3, pp. 181-196',
                    download: null,
                },
                {
                    pubName: 'Bachmair, Ben (2012). Kulturressourcen für Selbstrepräsentation jugendlicher Migranten im Kontext der Schule',
                    pubSrcText: 'n: Kriwak, Andreas, Pallaver, Günther (Hrsg.): Medien und Minderheiten, innsbruck university press. Innsbruck 2012, S. 173 – 198. ISBN 978-3-902811-57-8',
                    download: null,
                },
                {
                    pubName: 'Pachler, N., Bachmair, B. and Cook, J. (2013) ‘A socio-cultural frame for mobile learning’',
                    pubSrcText: 'In Berge, Zane L. and Muilenburg, Lin Y. (eds) Handbook of Mobile Learning. New York: Routledge, pp. 35-46; ISBN 978-0-415-50369-3 (hbk); ISBN 978-0-203-11876-4 (ebk)',
                    download: null,
                },
                {
                    pubName: 'Bachmair, Ben, Pachler, Norbert, Cook, John (2013). Mobile Medien als Kulturressourcen für Lernen, ein kulturökologischer Beitrag zur Medienbildung',
                    pubSrcText: 'In: Winfried Marotzki, Norbert Meder (Hrsg.). Perspektiven der Medienbildung. Wiesbaden (Verlag für Sozialwissenschaften/Springer) 2014, Reihe "Medienbildung und Gesellschaft". S. 209 - 233; ISBN: 978-3-658-03528-0 (Print) 978-3-658-03529-7 (Online)',
                    download: null,
                },
                {
                    pubName: 'Bachmair, Ben, Pachler, Norbert, Cook, John (2014). Kulturökologie, Medien und Mediennutzung',
                    pubSrcText: 'In: Angela Tillmann, Sandra Fleischer, Kai-Uwe Hugger (Hrsg.) Handbuch: Kinder und Medien, VS Verlag. S. 137 – 151. ISBN 978-3-531-18263-6, e-book: ISBN 978-3-531-18997-0',
                    download: 'https://link.springer.com/chapter/10.1007%2F978-3-531-18997-0_10',
                },
                {
                    pubName: 'Bachmair, B., Pachler, N. (2014). A cultural ecological frame for mobility and learning',
                    pubSrcText: 'In: Dorothee Meister, Theo Hug, Norm Friesen (eds). Educational Media Ecologies: International Perspectives. MedienPädagogik',
                    download: null,
                },
                {
                    pubName: 'Bachmair, B. (2016). Recognition of the social different - social justice for learning within an individualized, mobile, convergent mass communication',
                    pubSrcText: 'In: Brown, Elinor L., Krasteva, Anna, Ranieri, Maria (eds) (2016). E-learning & Social Media: Technology in 21st Century Education. Volume 10. International Advances in Education: Global Initiatives for Equality and Social Justice. Charlotte USA: Information Age Publishing, IAP; ISSN 9781681234281',
                    download: null,
                },
                {
                    pubName: 'Bachmair, Ben (2016) Skizzen zu einem Kultur-Paradigma für Pädagogik in einer Kultur disparater Transformation',
                    pubSrcText: 'In: Theo Hug, Tanja Kohn, Petra Missomelius (Hg.) 2016. MEDIEN – WISSEN – BILDUNG. Medienbildung wozu? Innsbruck: innsbruck university press. S. 107 – 126. ISBN 978-3-903122-16-1',
                    download: null,
                },
                {
                    pubName: 'Bachmair, Ben (2018). Kulturökologie als Bezugsrahmen für mobiles Lernen in unserer disparaten Kultur. Ein Blick auf Kontexte, Kulturressourcen und deren Nachhaltigkeit im Kontext von Schule',
                    pubSrcText: 'In: de Witt, Claudia, Gloerfeld, Christina (Hrsg.). Handbuch Mobile Learning. VS Verlag für Sozialwissenschaften. Wiesbaden. Seiten 673-695. eBook ISBN 978-3-658-19123-8; Hardcover ISBN 978-3-658-19122-1',
                    download: null,
                },
            ]
        }
    }, // end data()
} // end return
</script>