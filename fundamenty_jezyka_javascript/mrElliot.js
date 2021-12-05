/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 12 - "Mr. Elliot"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
*
*
* Przykład:
* greetings('hacker'); // => 'H4Ck3r'
* greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
* greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
* 
*/

const lettersSwapMap = {
  a: '4',
  e: '3',
  o: '0',
  i: '1',
  s: '5',
};

function greeting(message) {

  let result = makeOneLetterCapitalAndNextSmall(message);
  result = changeSpecialCharactersByMap(result);

  return result.join("");
}



//utils
function makeOneLetterCapitalAndNextSmall(message){

  let isCapitalLetter = true;

  let messageCorrectedAsArray = [...message];
  let result = [];

  for (let i = 0; i < messageCorrectedAsArray.length; i++) {
    let letter = messageCorrectedAsArray[i];
    if (isCapitalLetter) result.push(letter.toUpperCase());
    else result.push(letter.toLowerCase());
    isCapitalLetter = !isCapitalLetter;
  }

  return result;
}

function changeSpecialCharactersByMap(message){
  
  let resultArray = [];
  for(let i = 0; i < message.length; i++){

    const letter = message[i];
    if(letter.toLowerCase() in lettersSwapMap) resultArray.push(lettersSwapMap[letter.toLowerCase()]);
    else resultArray.push(letter)

  }

  return resultArray;
}




/* Weryfikacja */
function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

// verify(greeting('hacker'), 'H4Ck3r');
verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');