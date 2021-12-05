//  # Przeprogramowani.pl - Opanuj JavaScript
//  Moduł II. - Przeglądarka bez tajemnic
//  ## Ćwiczenie nr. 5 - Las
//  ### Jak zacząć
//  Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.
//  ### Cel ćwiczenia
//  Pod jednym z drzew ukryty został skarb, którego teraz szuka twój użytkownik.
//  Spraw, żeby na skutek ruchu kursorem nad lasem:
//  1. w przypadku miejsca gdzie znajduje się skarb (drzewo z klasą `treasure`), wyświetlić emoji dostępne pod zmienną `images.treasure`
//  2. w przypadku miejsca, gdzie nie znajduje się skarb, wyświetlić emoji dostępne pod zmienną `images.leafs`
//  3. po odkryciu skarbu, w preferowany przez ciebie sposób powiadomić użytkownika o zwycięstwie 💪
//  ### Punkty bonusowe
//  1. Być może po odkryciu skarbu użytkownik mógłby usłyszeć wybrany przez ciebie podkład dźwiękowy? Zweryfikuj możliwości biblioteki [Howler](https://howlerjs.com/)

//  import './style.css';

const images = {
  treasure: '💰',
  leafs: '🍃'
}

//outerHTML

document.addEventListener('DOMContentLoaded', () => {

  // debugger;
  const forestSelectors = document.querySelectorAll('.tree');
  const treeEmoji = forestSelectors[0].innerHTML;

  for(let i = 0; i < forestSelectors.length; i++){
    forestSelectors[i].addEventListener('mouseover', checkElementMouseOver(i));
    forestSelectors[i].addEventListener('mouseout', checkElementMouseOut(i));
  }

  function checkElementMouseOver(index){
    return function(){
      const currentElement = forestSelectors[index];

      if(currentElement.classList.contains('treasure')) {
        currentElement.innerHTML = images.treasure;

        // debugger;
        const newDivWithCongrats = document.createElement('div');
        newDivWithCongrats.classList.add('flex-column');
        newDivWithCongrats.style.color = 'red';
        newDivWithCongrats.style.paddingLeft = '20px';
        newDivWithCongrats.innerText = "You've found the treasure!";
        currentElement.parentNode.parentNode.appendChild(newDivWithCongrats);

      }
      else currentElement.innerHTML = images.leafs;

    }
  }

  function checkElementMouseOut(index){
    return function(){
      const currentElement = forestSelectors[index];
      if(!currentElement.classList.contains('treasure')) currentElement.innerHTML = treeEmoji;

    }
  }




  // forestSelectors.addEventListener('mouseover', (event) => {
  //   console.log(event);
  // })

})