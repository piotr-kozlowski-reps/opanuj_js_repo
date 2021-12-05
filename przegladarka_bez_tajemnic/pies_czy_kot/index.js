// # Przeprogramowani.pl - Opanuj JavaScript
// Moduł II. - Przeglądarka bez tajemnic
// ## Ćwiczenie nr. 13 - Pies czy kot
// ### Jak zacząć
// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.
// ### Cel ćwiczenia
// Pierwsza wersja najpopularniejszego na świecie serwisu społecznościowego, była aplikacją w stylu "HOT or NOT".
// Co powiesz na wykorzystanie tego faktu, aby odpowiedzieć na pytanie: Pies czy Kot?
// Dodaj funkcjonalność która:
// 1. będzie losowała obrazki z kotami na podstawie adresu URL obecnych w index.html zdjęć (zmień parametr)
// 2. po wciśnięciu przycisku "Cute!" drugi karta powinna się zamienić
// ### Punkty bonusowe
// - zadbaj o to aby ten sam kot nie wyświetlił się dwa razy podczas jednej sesji.



const limitOfPictureNumber = 1000;
let usedValues = [];

document.addEventListener('DOMContentLoaded', () => {

  //session storage
  const storage = sessionStorage;
  storage.setItem('usedValuesStorage', JSON.stringify(usedValues));

  //selectors
  const firstImageSelector = document.getElementById('first_image');
  const firstCuteSelector = document.getElementById('first_cute');
  const firstDescriptionSelector = document.getElementById('first_description');

  const secondImageSelector = document.getElementById('second_image');
  const secondCuteSelector = document.getElementById('second_cute');
  const secondDescriptionSelector = document.getElementById('second_description');


  //initialisation
  refreshImgWithDescription(firstImageSelector, firstDescriptionSelector);
  refreshImgWithDescription(secondImageSelector, secondDescriptionSelector);

    
  //events
  firstCuteSelector.addEventListener('click', () => {
    copyFirstToSecond(firstImageSelector.outerHTML, firstDescriptionSelector.outerHTML);
    clearSelectorContent(firstImageSelector);
    refreshImgWithDescription(firstImageSelector, firstDescriptionSelector);
  })


//utils
function copyFirstToSecond(firstImageHtml, firstDescriptionHTML){
  secondImageSelector.innerHTML = firstImageHtml;
  secondDescriptionSelector.innerHTML = firstDescriptionHTML;
}

function refreshImgWithDescription(imgSelector, descriptionSelector){
  let randomNumber = generateAppropriateNumber();
  imgSelector.innerHTML = `<img class="rounded-md" src="https://cataas.com/cat?${randomNumber}" alt="" />`;
  descriptionSelector.innerText = `Kot #${randomNumber}`
}

function generateAppropriateNumber(){

  // debugger;
  const storageCurrentArray = JSON.parse(storage.getItem('usedValuesStorage'));
  let randomNumber = generateRandomNumber();

  while(true){

    if (storageCurrentArray.includes(randomNumber)) {
      randomNumber = generateRandomNumber()
      continue;
    } else {
      break;
    }

  }

  usedValues.push(randomNumber);
  storage.setItem('usedValuesStorage', JSON.stringify(usedValues));
  return randomNumber;

}

function generateRandomNumber() {
 return Math.floor((Math.random() * limitOfPictureNumber));;
}

function clearSelectorContent(selector){
  while(selector.lastChild){
    selector.removeChild(selector.lastChild);
  }
}

})
