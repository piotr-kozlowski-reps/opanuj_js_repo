/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 20 - "Płaska tablica"
*/

/*
* Cel zadania
*------------
* Weź tablicę zawierającą zagnieżdżone tablice i zwróć płaską tablicę zawierającą  wartości liczbowe bez powtórek oraz pozbawioną wartości null/undefined.
*
* Przykładowo: 
* flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]) => [4, 3, 2, 1, 5]
* 
* Oczekuj tylko jednego poziomu zagnieżdżenia tablic.
* 
*/

let flattenedArray = [];

function flattenArray(deepArray) {

  flattenedArray = [];
  recursiveArrayDecomposer(deepArray);
  const resultArray = getRidOfDuplicates();
  return resultArray;
}




//utils
function recursiveArrayDecomposer(deepArray){

  for (let i = 0; i < deepArray.length; i++){
    const deepArrayElement = deepArray[i];
    const typeOfArrayElement = typeof deepArrayElement;
    if(typeof deepArrayElement == "number") flattenedArray.push(deepArrayElement);
    else if (deepArrayElement == undefined || deepArrayElement == null) continue;
    else recursiveArrayDecomposer(deepArrayElement);
  }
  
}

function getRidOfDuplicates(){
  let resultArray = [];

  for (let i = 0; i <  flattenedArray.length; i++){
    const currentNumber = flattenedArray[i];

    let isAlreadyInArray = false;
    for (let j = 0; j < resultArray.length; j++){

      const numberToCompare = resultArray[j];
      if (numberToCompare === currentNumber) isAlreadyInArray = true;
    }

    if(!isAlreadyInArray) resultArray.push(currentNumber);

  }

  return resultArray;
}




/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]), "4, 3, 2, 1, 5");
verify(flattenArray([null, [1, 2, 3], [null, undefined]]), "1, 2, 3");
