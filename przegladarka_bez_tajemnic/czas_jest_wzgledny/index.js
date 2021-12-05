// # Przeprogramowani.pl - Opanuj JavaScript
// Moduł II. - Przeglądarka bez tajemnic
// ## Ćwiczenie nr. 18 - Czas jest względny
// ### Jak zacząć
// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.


// ### Cel ćwiczenia

// Kino akcji wzięło sobie do serca teorię względności Einsteina i zgrabnie bawi się koncepcją upływu czasu. Czas płynie szybciej, wolniej, staje w miejscu, rusza - tego wszystkiego doświadczyliśmy już wielokrotnie na ekranach kin. Zobaczmy jak Ty poradzisz sobie z obsługą logiki takich zawirowań.

// Twoje zadania:
// 1. Dodaj logikę liczenia upływu czasu w sekundach od momentu wejścia na stronę
// 2. Dodaj obsługę mnożnika prędkości czasu za pomocą przycisków + i -
// 3. Zablokuj możliwość ustawienia wartości -1, 0, 1 w mnożniku (od razu przechodź od -2 do 2)
// 4. Dodaj logikę uwzględniającą mnożnik w tempie upływu czasu
// 5. Dodaj możliwość zatrzymania/wznowienia upływu czasu za pomocą przycisków Stop/Start




// Import stylesheets
// import './style.css';

document.addEventListener('DOMContentLoaded', () => {

  //vars
  let multipiler = 1;
  let startTime = Date.now();
  let stoppedTimeStart = 0;
  let stoppedTimeEnd = 0;
  let stoppedTime = 0;
  let endTime = 0
  let isStoppedTime = false;


  //selectors
  const licznikSelector = document.querySelector('#licznik');

  const startSelector = document.querySelector('#start');
  const stopSelector = document.querySelector('#stop');
  
  const plusSelector = document.querySelector('#plus');
  const minusSelector = document.querySelector('#minus');
  const multipierInputSelector = document.querySelector('#multipier-input');

  
  //events
  startSelector.addEventListener('click', () => {
    if(stoppedTimeStart != 0){
      stoppedTimeEnd = Date.now();
      stoppedTime += stoppedTimeEnd - stoppedTimeStart;
    }

    isStoppedTime = false;
    stoppedTimeStart = 0;
    countTime();
  })

  stopSelector.addEventListener('click', () => {
    stoppedTimeStart = Date.now();
    isStoppedTime = true;
  })

  plusSelector.addEventListener('click', () => {
    multipiler++;
    if(multipiler >= -1 && multipiler <= 1) multipiler = 2;
    updateMultiplier();
  })

  minusSelector.addEventListener('click', () => {
    multipiler--;
    if(multipiler >= -1 && multipiler <= 1) multipiler = -2;
    updateMultiplier();
  })


  //utis
  function countTime(){
    if(!isStoppedTime){
      endTime = Date.now();

      const milisecondsDifference = (endTime - stoppedTime) - startTime;
      
      let multiplierFinal = 0;
      if(multipiler > 0) multiplierFinal = multipiler;
      else multiplierFinal = 1 / multipiler * (-1);

      console.log(multiplierFinal);

      licznikSelector.setAttribute('value', Math.floor((milisecondsDifference * multiplierFinal) / 1000));
    }
  }

  function updateMultiplier(){
    multipierInputSelector.setAttribute('value', multipiler);
  }

  setInterval(countTime, 100);
})

