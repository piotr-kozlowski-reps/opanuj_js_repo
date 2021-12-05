// import Vue from "vue";
// import colors from './colors';

// ### Cel ćwiczenia

// Zaimplementuj komponent "colorful-clock", który będzie zmieniał kolor tła w zależności od aktualnej godziny.
// Lista kolorów znajduje się w pliku colors.js a zasady są następujące: 
// - Dla godziny 00, zegar wyświetla kolor domyślny (przekazany jako props)
// - Dla kolejnych godzin, zegar wyświetla kolory z tablicy "colors" i zmienia przełączając się pomiędzy odcieniami co 10 sekund, np.:

// 00:03:01 - wyświetla kolor domyślny, ponieważ jest to godzina 00
// 02:00:00 - wyświetla kolor palety "red" o odcieniu 100
// 04:00:31 - wyświetla kolor palety "yellow" o odcieniu 400


Vue.component('colorful-clock', {

  props: ['passedcolor'],

  template: `
  <div class="clock text-6xl text-white">
    <span class="hours">{{hour}}</span>:<span class="minutes">{{minute}}</span>:<span class="seconds">{{second}}</span>
  </div>
  `,

  data: function() {
    return {
      hour: '',
      minute: '',
      second: '',
      currentColor: '',
      colors: [...colors],
      colorId: 0,
      allColorsSets: [],
      currentColorsSet: [],
    }
  },

  methods: {


    updateTime(){

      //set clock
      const currentTime = new Date();

      const currentHour = currentTime.getHours();
      if(currentHour < 10) this.hour = `0${currentHour}`;
      else this.hour = `${currentHour}`;

      const currentMinute = currentTime.getMinutes();
      if(currentMinute < 10) this.minute = `0${currentMinute}`;
      else this.minute = `${currentMinute}`;

      const currentSecond = currentTime.getSeconds();
      if(currentSecond < 10) this.second = `0${currentSecond}`;
      else this.second = `${currentSecond}`;

      //set colors
      if(this.hour == '00') this.currentColor = this.passedColor;
      else {

        // debugger;
        this.defineCurrentColorsSet(currentHour);

        const maxColorId = this.currentColorsSet.length;

        if (currentSecond % 10 == 0) {
          this.currentColor = `bg-${this.currentColorsSet[this.colorId].name}`;
          if (this.colorId < maxColorId - 1) this.colorId++;
          else this.colorId = 0;
        }
        console.log(this.colorId)
      }
      this.$emit('colorclass', this.currentColor);
    },


    fillColorsSetsContent(){

      const colorsNames = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];

      for(let i = 0; i < colorsNames.length; i++){

        const subSetArray = this.colors.filter(el => el.name.includes(colorsNames[i]));
        this.allColorsSets.push(subSetArray);

      }

    },

    defineCurrentColorsSet(currentHour){
      
      switch(currentHour){
        case 1: this.currentColorsSet = [...this.allColorsSets[0]];
        case 2: this.currentColorsSet = [...this.allColorsSets[1]];
        case 3: this.currentColorsSet = [...this.allColorsSets[2]];
        case 4: this.currentColorsSet = [...this.allColorsSets[3]];
        case 5: this.currentColorsSet = [...this.allColorsSets[4]];
        case 6: this.currentColorsSet = [...this.allColorsSets[5]];
        case 7: this.currentColorsSet = [...this.allColorsSets[6]];
        case 8: this.currentColorsSet = [...this.allColorsSets[7]];
        case 9: this.currentColorsSet = [...this.allColorsSets[8]];
        case 10: this.currentColorsSet = [...this.allColorsSets[9]];
        case 11: this.currentColorsSet = [...this.allColorsSets[0]];
        case 12: this.currentColorsSet = [...this.allColorsSets[1]];
        case 13: this.currentColorsSet = [...this.allColorsSets[2]];
        case 14: this.currentColorsSet = [...this.allColorsSets[3]];
        case 15: this.currentColorsSet = [...this.allColorsSets[4]];
        case 16: this.currentColorsSet = [...this.allColorsSets[5]];
        case 17: this.currentColorsSet = [...this.allColorsSets[6]];
        case 18: this.currentColorsSet = [...this.allColorsSets[7]];
        case 19: this.currentColorsSet = [...this.allColorsSets[8]];
        case 20: this.currentColorsSet = [...this.allColorsSets[9]];
        case 21: this.currentColorsSet = [...this.allColorsSets[0]];
        case 22: this.currentColorsSet = [...this.allColorsSets[1]];
        case 23: this.currentColorsSet = [...this.allColorsSets[2]];
      }

      
    }


  },

  created(){
    this.currentColor = this.passedColor;
    this.fillColorsSetsContent();
    const timerID = setInterval(this.updateTime, 1000);
  }
  
})


new Vue({
  el: "#app",
  data: {

    colorClass: ''
    

  },
  methods: {
    updateColor(value){
      this.colorClass = value;
    }
  }
});


