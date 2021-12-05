// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 9 - ciasteczkowy potwór

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Powiadomienia o wykorzystaniu ciasteczek są konieczne na każdej stronie www.

// Spraw aby:
// 1. po kliknięciu na przycisk "Shure" modal znikna
// 2. wykorzystaj mechanizm ciasteczek i spraw aby użytkownik, który wyraził zgodę na wykorzystanie ciasteczek, już nigdy ich więcej nie zobaczył! 

// ### Punkty bonusowe

// - Zaimplementuj animację znikającego modala wykorzystując CSS oraz JavaScript
// - Zamiast mechanizmu cookie wykorzystaj localStorage.



// Import stylesheets
// import './style.css';



document.addEventListener('DOMContentLoaded', () => {

  const buttonSelector = document.querySelector('button');
  const policyBanner =  document.querySelector('#policy-banner');

  checkPolicy();

  buttonSelector.addEventListener('click', () => {
    document.cookie = "policy=true";
    checkPolicy();
  })



  //utils
  function hideBanner(){
    policyBanner.classList.add('hidden');
  }

  function checkPolicy(){
    let isPolicy = /policy=(\w.*);?/.exec(document.cookie);
    if (isPolicy !== null) {
      if(isPolicy[1] === 'true') hideBanner();
    }
  }
})

