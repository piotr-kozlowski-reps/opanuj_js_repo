// import Vue from 'vue';



// Zaimplementuj z wykorzystaniem Vue nastepujące funkcje listy zespołu: 
// - na podstawie istniejącej struktury HTML stwórz komponenty zgodnie z zasadami "Organizacji komponentów" z dokumentacji Vue.
// - wczytaj listę osób z zespołu z tablicy "members" w pliku index.js
// - dodaj możliwość wybrania jednej z nich
// - dodaj możliwość wyświetlenia powitania, wykorzystującego samo imię (np. Cześć Marcin! 👋)

// ### Zanim zaczniesz
// Zajrzyj do dokumentacji: 
// - Wprowadzenie do Vue: https://vuejs.org/v2/guide/index.html
// - Wprowadzenie do komponentów w Vue: https://vuejs.org/v2/guide/components.html
// - Organizacja komponentów: https://vuejs.org/v2/guide/components.html#Organizing-Components



const members = [
  { first_name: 'Adam', last_name: 'Gospodarczyk', role: 'Member', chosen: false },
  { first_name: 'Przemek', last_name: 'Smyrdek', role: 'Member',  chosen: false },
  { first_name: 'Marcin', last_name: 'Czarkowski', role: 'Member',  chosen: false },
];

Vue.component('app-say-hallo', {
    props:['activeuser'],

    data: function() {
        return {
            isButtonClicked: false
        }
    },

    watch: {
      activeuser: function (val, oldVal) {
        this.isButtonClicked = false;
      }
    },

    template: `
    <div class="bg-gray-300 flex flex-row-reverse px-2 py-3">
        <button class="bg-blue-500 py-2 px-4 rounded text-white" @click="showInvitation">Say hello</button>
        <p v-show="isButtonClicked" class="py-2 px-4 text-black">Hallo {{activeuser.first_name}}!</p>
    </div>`,

    methods: {
        showInvitation(){
            this.isButtonClicked = true
        }
    }

})

Vue.component('app-search', {

//   data: function(){
//       return {
//         searchedPhrase: ''
//       }
    
//   },

  methods: {
    changeSearchedPhrase(event){
        this.$emit('onupdate', event.target.value);
    }
  },
  
  template: `<div>
  <p class="px-2 text-gray-600 mb-2 text-2xl font-thin px-4 pt-3">Lista kontaktów</p>
  <div class="px-2">
    <svg class="absolute z-50 m-1 text-blue-400" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
      <path
            d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11   16 9.5 16C5.90997 16 3 13.09 3 9.5C3 5.90997 5.90997 3 9.5 3C13.09 3 16 5.90997   16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01001 14 9.5  14C11.99 14 14 11.99 14 9.5C14 7.01001 11.99 5 9.5 5C7.01001 5 5 7.01001 5 9.5Z"
            fill="black" fill-opacity="0.54" />
    </svg>
    <input type="text" class="pl-8 p-1 bg-gray-200 w-full rounded relative" placeholder="Wyszukaj kontakt" @input="changeSearchedPhrase">
  </div>
</div>`
});


Vue.component('app-users-list', {

    props: ['searchedphrase'],

    data: function (){
        return{
            members: [...members],
            memberClickedClass: 'member-clicked'
        }
        },

    template: `
    <div>
        <div class="flex justify-between px-2 py-2 my-1" v-for="(member, index) in filteredMembers" :class="{ 'member-clicked' : member.chosen}">
             <p class="flex text-gray-700">
               <svg class="w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
                 <circle cx="4" cy="4" r="3" />
               </svg>
               <span class="member" @click="toggleChosen(index)">{{member.first_name}} {{member.last_name}}</span> 
             </p>
             <p class="text-gray-500 font-thin">{{member.role}}</p>
        </div>
    </div>`,

    computed: {
        filteredMembers(){

            let filteredMembers = [...this.members];

            if(this.searchedphrase == '') return filteredMembers;
            else filteredMembers = this.members.filter(member => {
                const textToSearch = `${member.first_name.toLowerCase()} ${member.last_name.toLowerCase()}`;
                if(textToSearch.toLowerCase().includes(this.searchedphrase.toLowerCase())) return member;
            });

            return filteredMembers;

        }
    },

    methods: {
      toggleChosen(value){

        for(let i = 0; i < this.members.length; i++){
          if (value == i) members[i].chosen = true;
          else members[i].chosen = false;
        }

        this.$emit('chosenuser', members[value]);
      },
    }
});


new Vue({
  el: '#app',
  
  data: {
    searchedPhrase: '',
    activeUser: members[0],
  },

  methods: {

    updateSearchedPhrase(value){
        this.searchedPhrase = value;
    },

    changeChosenUser(value){
      this.activeUser = value;
    },

  }


});
