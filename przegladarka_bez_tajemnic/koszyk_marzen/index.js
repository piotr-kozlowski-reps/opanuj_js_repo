// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 11 Koszyk marzeń

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Koszyk w sklepie Internetowym to jeden z pierwszych elementów do implementacji którego bardzo przydatny był JavaScript. Tym razem to Ty stworzysz swój koszyk marzeń.

// Spraw aby:
// 1. cena w podsumowaniu była prawidłowa w zależności obecnych produktów oraz ich ilości
// 2. daj możliwość zmiany ilości produktów
// 3. daj możliwość usunięcia dowolnego produktu

// ### Punkty bonusowe

// - wyświetl użytkownikowi informację, gdy koszyk będzie pusty.








// // Import stylesheets
// import './style.css';

document.addEventListener('DOMContentLoaded', () => {

  const divItem1Selector = document.querySelector('#div-item1');
  const input1Selector = document.querySelector('#input1');
  const input1ItemPrice = 399;
  const input1SumSelector = document.querySelector('#input1-sum');
  const input1DeleteSelector = document.querySelector('#input1-delete');
  
  const divItem2Selector = document.querySelector('#div-item2');
  const input2Selector = document.querySelector('#input2');
  const input2ItemPrice = 150;
  const input2SumSelector = document.querySelector('#input2-sum');
  const input2DeleteSelector = document.querySelector('#input2-delete');
  
  //koszyk
  const trollyTextSelector = document.querySelector('#trolly-text');
  const trollyButtonSelector = document.querySelector('#trolly-button');

  
  const sumOverallSelector = document.querySelector('#sumOverall');


  //state at the beginning
  let item1Sum = input1ItemPrice * input1Selector.value;
  let item2Sum = input2ItemPrice * input2Selector.value;
  updateState();



  //eventListeners
  input1Selector.addEventListener('change', () => {
    updateState();
  })
  
  input2Selector.addEventListener('change', () => {
    updateState();
  })

  input1DeleteSelector.addEventListener('click', () => {
    divItem1Selector.remove();
    input1Selector.value = 0;
    updateState();
  })

  input2DeleteSelector.addEventListener('click', () => {
    divItem2Selector.remove();
    input2Selector.value = 0;
    updateState();
  })



  //utils
  function updateState(){

    item1Sum = input1ItemPrice * input1Selector.value;
    item2Sum = input2ItemPrice * input2Selector.value;

    if((item1Sum + item2Sum) === 0) {
      trollyTextSelector.textContent = "Twój koszyk jest pusty";
      trollyButtonSelector.className += ' hidden';
      return;
    }

    input1SumSelector.textContent = item1Sum;
    input2SumSelector.textContent = item2Sum;
    sumOverallSelector.textContent = item1Sum + item2Sum;
  }

})