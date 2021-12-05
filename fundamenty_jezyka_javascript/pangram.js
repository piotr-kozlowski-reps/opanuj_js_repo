/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 5 - "Pangram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy podany parametr to tzw. pangram.
*
* Pangram to możliwe do zrozumienia zdanie wykorzystujące wszystkie litery danego alfabetu.
*
*
* Przykład:
*
* isPangram('test') // => false
* isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Zweryfikuj, czy konkretna litera występuje w podanym zdaniu tylko jeden raz.
*/

function isPangram(sentence) {

  const alphabet = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];

  const extractedLettersFromStringAsArray = extractLettersFromStringAndConvertToArray(sentence, alphabet);

  if (!checkIfLetterUsedOnlyOnce(extractedLettersFromStringAsArray, alphabet)) return false;
  if (!checkIfEveryLetterIsUsed(extractedLettersFromStringAsArray, alphabet)) return false;

  return true;
}


/* Utils */
function extractLettersFromStringAndConvertToArray(sentence, alphabet) {

  const sentenceToArray = sentence.toLowerCase().split("");
  let onlyLettersArray = [];

  for (let i = 0; i < sentenceToArray.length; i++) {
    if (alphabet.includes(sentenceToArray[i])) onlyLettersArray.push(sentenceToArray[i]);
  }

  return onlyLettersArray;
}
function checkIfLetterUsedOnlyOnce(sentenceCleanedArray, alphabet) {

  for (let i = 0; i < alphabet.length; i++) {

    const letter = alphabet[i];
    let counter = 0;
    for (let j = 0; j < sentenceCleanedArray.length; j++) {
      if(sentenceCleanedArray[j] === letter) counter++;
    }
    if(counter !== 1) return false;
  }

  return true;
}

function checkIfEveryLetterIsUsed(sentenceCleanedArray, alphabet) {
  
  for (let i = 0; i < alphabet.length; i++){
    for (let j = 0; j < sentenceCleanedArray.length; j++){
      if (alphabet[i] === sentenceCleanedArray[j]) sentenceCleanedArray.splice(j, 1);
    }
  }

  if(sentenceCleanedArray.length === 0) return true;
  return false;
}




/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isPangram('test'), false);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!'), true);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małżeństwa!'), false);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małże!'), false);