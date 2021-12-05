// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 2 - Żarówka

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Przy pomocy kodu JavaScript, spraw, aby przełącznik światła sterował żarówką powyżej.
// Żarówka zaświeci się, jeśli element z klasą `.bulb` wzbogaci się o klasę `.bulb--on`. 
// Pamiętaj, że przełącznik to nie tylko włączanie, ale też wyłączanie światła.


document.addEventListener('DOMContentLoaded', () => {
  let bulbSelector = document.querySelector('.bulb');
  let inputSelector = document.querySelector('input');

  inputSelector.addEventListener('change', (event) => {
    if(inputSelector.checked) bulbSelector.classList.add("bulb--on");
    else bulbSelector.classList.remove("bulb--on");
    
  })
})
