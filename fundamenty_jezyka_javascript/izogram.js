/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 13 - "Izogram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję sprawdzającą czy podane słowo jest izogramem, czyli słowem w którym każda litera występuje tylko jeden raz.
*
*
* Przykład:
* isogram('Izogram'); // => true
* isogram('Przeprogramowani'); // => false
* 
*/




function isogram(word) {

  //check
  if (Object.prototype.toString.call(word) !== "[object String]") throw new Error('Input was not a String');


  //create object with unique letters and it's ocurance
  const setOfUniqueLettersFromString = {};
  let isIsogram = true;


  for (let i = 0; i < word.length; i++){

    const letter = word.charAt(i).toLowerCase();

    if(letter in setOfUniqueLettersFromString) setOfUniqueLettersFromString[letter]++;
    else {
      setOfUniqueLettersFromString[letter] = 1;
    }
  }


  //check if ocurance is larger than 1
  Object.keys(setOfUniqueLettersFromString).forEach(key => {
    if (setOfUniqueLettersFromString[key] > 1) isIsogram = false;
  });


  return isIsogram;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isogram('izogram'), true);
verify(isogram('Przeprogramowani'), false);
verify(isogram('SprawdzAm'), false);