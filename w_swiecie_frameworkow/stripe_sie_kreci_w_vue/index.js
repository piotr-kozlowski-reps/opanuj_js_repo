

// ### Cel ćwiczenia

// Wykonaj ponownie poniższe zadanie, tym razem w frameworku Vue. Nie podglądaj kodu, który napisałeś w  czystym JS. Pisząc wszystko od zera więcej się nauczysz :). Następnie wyciągnij wnioski odpowiadając pisemnie na załączone pytania.

// ___

// Stripe to firma, która odnosi niesamowite sukcesy w ostatnich latach. Oprócz genialnego systemu obsługi płatności, mogą pochwalić się przepiękną stroną internetową. Jednym z jej komponentów jest karuzela z historiami partnerów biznesowych. Znajdziesz ją w dolnej części tej podstrony: https://stripe.com/gb/payments#user-stories - a Twoim zadaniem jest dokończenie tworzenia jego wiernej kopii.

// Twoje zadania:
// 1. Skopiuj zawartość pozostałych elementów karuzeli za pomocą narzędzi developerskich. 
// 2. Zaimplementuj logikę pozwalającą poruszać się pomiędzy slide'ami za pomocą strzałek.
// 3. Zaimplementuj logike pozwalającą porusząć się pomiędzy slide'ami za pomocą kliknięcia w logotyp marki pod karuzelą.
// 4. Dodaj animację przechodzenia pomiędzy slide'ami
// 5. Odpowiedz na pytania z listy

// ### Lista pytań

// 1. Co było łatwiejsze do zaimplementowania w frameworku niż w czystym JS?
// 2. Co było trudniejsze do zaimplementowania w frameworku niż w czystym JS?
// 3. Które z rozwiązań ma mniej złożony kod? Porównując weź pod uwagę: prostotę, czytelność i objętość kodu.
// 4. Czy uważasz, że użycie frameworka do rozwiązania tego zadania było uzasadniane? Dokonując oceny weź pod uwagę: czas realizacji, modularność i złożoność kodu.



// import Vue from 'vue'


Vue.component('app-carrousel', {
  props: ['carouselitem'],

  data: function(){
    return{
      
    }
  },

  methods: {

  },

  template: `
  <div class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style="min-height: 19rem;">
  <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
    style="min-height: 19rem;">
    <!-- <img class="absolute inset-0 w-full h-full object-cover object-center" src="https://stripe.com/img/v3/payments/overview/photos/slack.jpg" alt=""> -->

    <div class="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
    <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">

    <img class="w-full h-24" :src="carouselitem.logoSrc" />

  </div>
  </div>
  <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
    <div class="p-12 md:pr-24 md:pl-16 md:py-12">
      <p class="text-gray-600" v-html="carouselitem.innerText"></p>
      <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
        :href="carouselitem.moreLink">
        <span>Learn more about our users</span>
        <span class="text-xs ml-1">&#x279c;</span>
      </a>
    </div>
    <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
      viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>
  </div>
  <button @click="$emit('prevbutton')" class="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
    <span class="block" style="transform: scale(-1);">&#x279c;</span>
  </button>
  <button @click="$emit('nextbutton')" class="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
    <span class="block" style="transform: scale(1);">&#x279c;</span>
  </button>
</div>
  `
})

const items = [
  {logoSrc: './img/kickstarter-seeklogo.com.svg', innerText: 'As <span class="text-gray-900">Kickstarter</span> grows rapidly, using Stripe helps them scale payments easily—supporting everything from getting paid by users round the world to enabling ACH payments for corporate customers.', moreLink: 'https://www.google.com/search?q=kickstarter'},
  {logoSrc: './img/slack-technologies-seeklogo.com.svg', innerText: 'As <span class="text-gray-900">Slack</span> grows rapidly, using Stripe helps them scale payments easily—supporting everything from getting paid by users round the world to enabling ACH payments for corporate customers.', moreLink: 'https://www.google.com/search?q=slack'},
  {logoSrc: './img/glossier-seeklogo.com.svg', innerText: 'As <span class="text-gray-900">Glossier</span> grows rapidly, using Stripe helps them scale payments easily—supporting everything from getting paid by users round the world to enabling ACH payments for corporate customers.', moreLink: 'https://www.google.com/search?q=glossier'},
  {logoSrc: './img/240615.svg', innerText: 'As <span class="text-gray-900">Coś1</span> grows rapidly, using Stripe helps them scale payments easily—supporting everything from getting paid by users round the world to enabling ACH payments for corporate customers.', moreLink: 'https://www.google.com/search?q=coś1'},
  {logoSrc: './img/device-camera-svgrepo-com.svg', innerText: 'As <span class="text-gray-900">Camera</span> grows rapidly, using Stripe helps them scale payments easily—supporting everything from getting paid by users round the world to enabling ACH payments for corporate customers.', moreLink: 'https://www.google.com/search?q=camera'},
  
]

new Vue({
  el: '#app',

  data: {

    itemIndex: 0,
    carousellItems: [],
    chosenCarouselItem: null,
    
  },

  methods: {
    getCurrentItem(){
      return this.carousellItems[this.itemIndex]
    },

    prevButton(){
      const maxItemsAmount = this.carousellItems.length - 1;
      if (this.itemIndex == 0) this.itemIndex = maxItemsAmount;
      else this.itemIndex--;
      this.chosenCarouselItem = this.getCurrentItem();
    },

    nextButton(){
      // debugger;
      const maxItemsAmount = this.carousellItems.length - 1;
      if (this.itemIndex == maxItemsAmount) this.itemIndex = 0;
      else this.itemIndex++;
      this.chosenCarouselItem = this.getCurrentItem();
    },

    isCurrentActive(index){
      return this.itemIndex == index;
    },

    goToCarouselItem(number){
      this.itemIndex = number;
      this.chosenCarouselItem = this.getCurrentItem();
    },

    //TODO: transition nie działa za bardzo
    beforeEnter(){
      el.style.opacity = 0;
    },

    enter(){
      Velocity(el, {opacity: 1}, {duration: 3000})
    },

    leave(){
      Velocity(el, {opacity: 0}, {complete: done})
    }



  },

  created(){
    this.carousellItems = [...items];
    this.chosenCarouselItem = this.getCurrentItem();
  }
})
