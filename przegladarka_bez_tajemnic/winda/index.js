// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 4 - Winda

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Winda napędzana scrollem użytkownika porusza się w górę i w dół (zgodnie z kierunkiem scrollowania). 

// Spraw, aby pole nad windą, informujące o kierunku poruszania się, było aktualizowane na bieżąco.

// ### Punkty bonusowe

// 1. Spraw, aby na polu z informacjami pokazywało się również aktualne piętro

////--------------------------------------------------------------------------------------------

// import './style.css'

const directions = {
  top: '🔼',
  bottom: '🔽'
}




document.addEventListener('DOMContentLoaded', () => {
  
  // debugger;
  const directorSignSelector = document.querySelector('.direction');
  const elevatorSelector = document.querySelector('div.elevator');
  let scrollYPrevious = 0;
  const innerTextUp = `Kierunek: ${directions.top}`;
  const innerTextDown = `Kierunek: ${directions.bottom}`;
  
  elevatorSelector.addEventListener('scroll', (event) => {
    
    const floorsNumber = 10;
    const currentScroll_y = elevatorSelector.scrollTop;
    const maxScroll_y = 1470; // it shouldn't be hardcoded - ask how to obtain that value via JS
    const whichFloor = calculateFloor(maxScroll_y, currentScroll_y, floorsNumber);


    if (currentScroll_y > scrollYPrevious) directorSignSelector.innerText = `${innerTextDown}  we're on floor: ${whichFloor}`;
    else directorSignSelector.innerText = `${innerTextUp}  we're on floor: ${whichFloor}`;

    scrollYPrevious = currentScroll_y;

    console.log(currentScroll_y);


  })

  function calculateFloor(maxScroll_y, currentScroll_y, floorsNumber){

    // debugger;
    let resultWhichFloor = 0;

    const numberOfPixelsForOneFloor = Math.ceil(maxScroll_y / floorsNumber);
    for (let i = 0; i <= floorsNumber; i++){
      const minPixels = numberOfPixelsForOneFloor * i;
      const maxPixels = numberOfPixelsForOneFloor * (i + 1);

      if(currentScroll_y >= minPixels && currentScroll_y < maxPixels) {
        resultWhichFloor = floorsNumber - i;
        break;
      }
    }
    return resultWhichFloor;
  }

})
