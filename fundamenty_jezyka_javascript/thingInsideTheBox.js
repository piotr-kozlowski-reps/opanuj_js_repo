/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 11 - Thing inside the box
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, sprawdzającą czy pudełko jest puste.
*
*
*/

function thing(box) {
  
  let resultBoolean = false;
  const boxIntoArray = box.split("\n");
  for (let i = 1; i < boxIntoArray.length - 1; i++){

    const indexOfBeggingOfSpaceLineInsideBox = boxIntoArray[i].indexOf("*");
    const indexOfEndOfSpaceLineInsideBox = boxIntoArray[i].indexOf("*", indexOfBeggingOfSpaceLineInsideBox + 1);


    const lineWithEmptySpaceInBox = boxIntoArray[i].substring(indexOfBeggingOfSpaceLineInsideBox + 1, indexOfEndOfSpaceLineInsideBox);
    for(let j = 0; j < lineWithEmptySpaceInBox.length; j++){
      if (lineWithEmptySpaceInBox.charAt(j) !== " ") resultBoolean = true;
    }

  }
  
  return resultBoolean;
}


/* Weryfikacja */
function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(thing(`*****
              *   * o
              *   *
              *****`), false);

verify(thing(`*****
              * o *
              *   *
              *****`), true);

 verify(thing(`*****
               *   *
               *   *
               *****`), false);