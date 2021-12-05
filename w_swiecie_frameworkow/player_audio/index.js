// import Vue from 'vue';

// ### Cel ćwiczenia

// Stwórz odtwarzacz audio w oparciu o Api Deezer'a (https://rapidapi.com/deezerdevs/api/deezer-1)
// 1. Wybierz 5 dowolnych utworów i pobierz dane bezpośrednio z API
// 2. Daj możliwość użytkownikowi: uruchamiania / pauzowania utworu oraz przełączania pomiędzy wybranymi utworami
// 3. Zadbaj o to, aby podczas odtwarzania pasek progressu odzwierciedlał realny stan utworu. 
// 4. Całość przygotuj w formie componentu <Player> przyjmującego jako props tablicę 5 dowolnych utworów pobranych z API Deezera. 

Vue.component('Player', {

  data: function(){
    return {

      // trackIDs: ['1496680792', '109734566', '1519501922', '1520216322', '1519733042'],
      responseFromApi: null,
      playerDataAvailable: false,
      fetchedTracks: [],

      currentSong: null,
      currentSongDurationSeconds: 0,
      currentSongProgressSeconds: 40,
      currentSongProgressBarWidth: 0,
      
      currentSongDurationAsString: '00:00',
      currentSongProgressTimeAsString: '00:00'
    }
  },

  methods: {

    fetchDataFromApi(){

      fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/161541842`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "82a37221acmsh107b8ba357fb692p119788jsn6d30282382be"
        }
      })
      .then(response => {
          if(response.ok) return response.json()
          else alert(`serwer zwrócił ${response.status} : ${response.statusText}`)
        }
      )
      .then(response => {
        if(!response.error) {
          this.responseFromApi = response;
          this.catchTracks();

        } 
        else this.fetchDataFromApi();
          
      })
      .catch(err => {
        console.log(err)
      });

    },

    catchTracks(){
      this.responseFromApi.tracks.data.forEach(track => this.fetchedTracks.push(track));
      this.startPlayer()
    },

    startPlayer(){
      this.currentSong = this.fetchedTracks[0];
      this.playerDataAvailable = true;
      this.updatePlayer();
    },

    updatePlayer(){
      this.computeDurations();
      this.refreshProgressBar();
    },

    refreshProgressBar(){
      if(!this.playerDataAvailable){
        setTimeout(refreshProgressBar(), 300);
        return;
      }
      this.currentSongProgressBarWidth = Math.floor((this.currentSongProgressSeconds / this.currentSongDurationSeconds) * 100);
    },

    computeDurations(){
      if (!this.playerDataAvailable) {
        setTimeout(computeDuration(), 300);
        return;
      } else {
          const durationInSeconds = this.currentSong.duration;
          const minutes = Math.floor(durationInSeconds / 60);
          const seconds = durationInSeconds % 60;
          const minutesAsString = minutes < 10 ? `0${minutes}` : minutes;
          const secondsAsString = seconds < 10 ? `0${seconds}` : seconds;
          this.currentSongDurationAsString =  `${minutesAsString}:${secondsAsString}`;
          this.currentSongDurationSeconds = durationInSeconds;
      }
    }


  },


  created(){
    this.fetchDataFromApi();
  },

  template: `
  <div class="w-full">
  <div class="h-2 bg-red-light"></div>
    <div class="flex items-center justify-center h-screen bg-red-lightest">
      <div class="bg-white shadow-lg rounded-lg" style="width: 45rem !important;">
        <div class="flex">
          <div class="w-full p-8">
            <div class="flex justify-between">
              <div>
                <h3 class="text-2xl text-grey-darkest font-medium">{{ playerDataAvailable ? currentSong.artist.name : '...'}}</h3>
                <p class="text-sm text-grey mt-1" >{{ playerDataAvailable ? currentSong.title : '...'}}</p>
              </div>
            </div>
            <div class="flex justify-evenly items-center mt-8">
              <div class="text-grey-darker">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>
              </div>
              <div class="text-white bg-red-500 p-8 rounded-full bg-red-light shadow-lg">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg>
              </div>
              <div class="text-grey-darker">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-8 py-4">
          <div class="flex justify-between text-sm text-grey-darker">
            <p>{{currentSongProgressTimeAsString}}</p>
            <p>{{currentSongDurationAsString}}</p>
          </div>
          <div class="mt-1">
            <div class="h-1 bg-grey-dark rounded-full">
              <div class="h-1 bg-red-light rounded-full relative bg-red-500" :class="">
                <span class="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

new Vue({
  el: '#app',
  data: {

  }
})