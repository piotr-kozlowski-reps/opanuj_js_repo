<template>

      <div>
        <div class="sm:w-1/4 p-2 md:w-full">
          <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
            <h2 class="text-xl font-medium text-gray-700">[{{getCurrenMember($route.params.id).first_name}}]</h2>
            <span class="text-blue-500 block mb-5">[{{getCurrenMember($route.params.id).role}}]</span>

            <button href="#" class="px-4 py-2 bg-blue-500 text-white rounded-full" @click="showAlert"
              >Say hello</button>
          </div>
        </div>
      </div>

</template>

<script>

export default {

    props: ['members'],

    methods: {

      showAlert(){
        alert(`hello: ${this.getCurrenMember(this.$route.params.id).first_name}`);
      },

      getCurrenMember(id){
        for(let i = 0; i < this.members.length; i++){
          if (this.members[i].id == id) return this.members[i];
        }
      }
    },
}

</script>
