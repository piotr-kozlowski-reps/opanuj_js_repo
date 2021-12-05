<template>

  <div id="app" class="h-screen flex justify-center items-center bg-gray-900 flex-col">

        <div class="bg-white rounded-md p-5 shadow-md">
        <nav class="flex flex-row">
            <button @click="setLinkId(1)" :class="classIds[0]">
              <router-link to="/members/1">Adam</router-link>
            </button>
            <button @click="setLinkId(2)" :class="classIds[1]">
              <router-link to="/members/2">Przemek</router-link>
            </button>
            <button @click="setLinkId(3)" :class="classIds[2]">
              <router-link to="/members/3">Marcin</router-link>
            </button>
        </nav>
      </div>

      <router-view :members="members"></router-view>
      
  </div>

</template>


<script>

export default {
  name: 'app',
  data () {
    return {
      linkIds: [false, false, false],
      classIds: ['text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none', 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none', 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none'],
      members: [
        { id: 1, first_name: 'Adam', last_name: 'Gospodarczyk', role: 'Member'},
        { id: 2, first_name: 'Przemek', last_name: 'Smyrdek', role: 'Member'},
        { id: 3, first_name: 'Marcin', last_name: 'Czarkowski', role: 'Member'}
      ]
    }
  },

  methods: {

    setLinkId(id){

      for(let i = 0; i < this.linkIds.length; i++){
        if ((i + 1) == id) this.linkIds[i] = true;
        else this.linkIds[i] = false;
      }

      this.setProperClasses();
    },


    setProperClasses(){

      for(let i = 0; i < this.linkIds.length; i++){

        if(this.linkIds[i] == true){

          for(let j = 0; j < this.classIds.length; j++){
            if(this.classIds[j] == i) this.classIds[j] = 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500'
            else this.classIds[j] = 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none'
          }

        }
      }
    }


  }
}
</script>


