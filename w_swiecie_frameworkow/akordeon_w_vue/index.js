// ### Cel ćwiczenia

// Wykonaj ponownie poniższe zadanie, tym razem w frameworku Vue. Nie podglądaj kodu, który napisałeś w  czystym JS. Pisząc wszystko od zera więcej się nauczysz :). Następnie wyciągnij wnioski odpowiadając pisemnie na załączone pytania.

// ### Cel ćwiczenia

// Akordeon (ang. Accordion) to kolejny bardzo popularny komponent webowy. Niestety ten widoczny po lewej, oprócz swoich walorów estetycznych, póki co nie ma zbyt wiele do zaoferowania. Czas to zmienić.

// Twoje zadania:
// 1. Zaimplementuj logikę zawijania/rozwijania sekcji po kliknięciu w strzałkę
// 2. Automatycznie zawijaj poprzednią sekcję, jeżeli użytkownik aktywuje inną
// 3. Dodaj logikę zmiany stanu (toggle) sekcji przy dwukrotnym kliknięciu w jej tytuł
// 4. Dodaj animację zawijania sekcji
// 5. Dodaj animację rozwijania sekcji
// 6. Odpowiedz na pytania z listy

// ### Lista pytań

// 1. Co było łatwiejsze do zaimplementowania w frameworku niż w czystym JS?
// 2. Co było trudniejsze do zaimplementowania w frameworku niż w czystym JS?
// 3. Które z rozwiązań ma mniej złożony kod? Porównując weź pod uwagę: prostotę, czytelność i objętość kodu.
// 4. Czy uważasz, że użycie frameworka do rozwiązania tego zadania było uzasadniane? Dokonując oceny weź pod uwagę: czas realizacji, modularność i złożoność kodu.



Vue.component('app-article', {

    props: ['currentitemsend', 'ischosen', 'index'],

    template: `<article class="border-b">
    <div class="border-l-2 bg-grey-lightest border-indigo">
        <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
            <span class="text-indigo font-thin text-xl" @dblclick="$emit('toggle', index)">
                {{currentitemsend.itemHeader}}
            </span>

            <!-- icon opened-->
            <div v-if="currentitemsend.isChosen" class="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo" @click="$emit('close', index)">
                <!-- icon by feathericons.com -->
                <svg aria-hidden="true" data-reactid="281" fill="none" height="24" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="18 15 12 9 6 15">
                    </polyline>
                </svg>
            </div>

            <!-- icon closed-->
            <div v-if="!currentitemsend.isChosen" class="rounded-full border border-grey w-7 h-7 flex items-center justify-center" @click="$emit('open', index)">
            <!-- icon by feathericons.com -->
            <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9">
                </polyline>
            </svg>
        </div>

        </header>
        <div v-if="currentitemsend.isChosen">
            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                <ul class="pl-4">
                    <li class="pb-2" v-for="li in currentitemsend.liParagraphs">{{li}}</li>
                </ul>
            </div>
        </div>
    </div>
</article>`

})

Vue.component('app-root', {

    data: function() {
        return {

            accordionItems: [
                {itemHeader: 'Paragraph 1 header',
                liParagraphs: ['consectetur adipiscing elit Paragraph 1', ' Paragraph 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'], isChosen: false},
                {itemHeader: 'Massa vitae tortor condimentum lacinia quis vel eros donec',
                liParagraphs: ['consectetur adipiscing elit', 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', ' Viverra orci sagittis eu volutpat odio facilisis mauris'], isChosen: false},
                {itemHeader: 'Paragraph 3 header',
                liParagraphs: ['consectetur adipiscing elit Paragraph 3', ' Paragraph 3', 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'], isChosen: false},
                {itemHeader: 'Paragraph 4 header',
                liParagraphs: ['consectetur adipiscing elit Paragraph 4', ' Paragraph 4 sed do eiusmod  ut labore et ', 'tempor incididunt', 'dolore magna aliqua'], isChosen: false}
            ],

        }
    },

    template:`
    <main class="w-3/5 p-8 mx-auto">
            <section class="shadow">

                <app-article v-for="(currentitem, index) in accordionItems" :currentitemsend="currentitem" :index="index" @close="closeArticle" @open="openArticle" @toggle="toggle"></app-article>


            </section>
        </main>
        `,

    methods: {
        closeArticle(index){
            // debugger;
            this.accordionItems[index].isChosen = false;
        },
        openArticle(index){
            for (let i = 0; i <  this.accordionItems.length; i++){
                if (i == index) this.accordionItems[i].isChosen = true;
                else this.accordionItems[i].isChosen = false;
            }
        },
        toggle(index){
            if( this.accordionItems[index].isChosen == true) this.accordionItems[index].isChosen = false;
            else this.openArticle(index);
        }
    }    
})

new Vue({
  el: '#app',
  template: ``
})