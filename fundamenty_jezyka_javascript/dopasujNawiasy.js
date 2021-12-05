/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 19 - "Dopasuj nawiasy"
*/

/*
* Cel zadania
*------------
* Otrzymując stringa zawierającego nawiasy kwadratowe [], klamry {} lub nawiasy okrągłe (), upewnij się że wszystkie z par są dopasowane i prawidłowo zagnieżdżone. Jeżeli wszystko się zgadza, zwróć true. W przypadku wykrycia błędów, zwróc false.
*
* Przykład: '[{()}]' => true
* Przykład: '[{]}' => false
*/


let areBracketsAllRight = true;

function checkBrackets(stringWithBrackets) {

  if(Object.prototype.toString.call(stringWithBrackets) !== "[object String]") throw new Error('Input was not a String');
  if(!(/^[{}()\[\]]+$/.test(stringWithBrackets))) throw new Error('Input contains other signs than "{}()[]"');
  if(!areBracketsAllRight) {
    areBracketsAllRight = true;
    return false;
  }

  
  let startIndex = 0;
  let endIndex = 0;
  // debugger;
  for (let i = 0; i < stringWithBrackets.length; i++){


    const openingSign = stringWithBrackets[i];
    if(/[)}\]]/.test(openingSign)) {
      areBracketsAllRight = false;
      break;
    }


    let isClosingSignExisting = false;
    switch(openingSign){

      case '(':
        startIndex = i + 1;
        for(let j = i + 1; j < stringWithBrackets.length; j++){
          const closingSign = stringWithBrackets[j];
          if(closingSign === ')') {
            endIndex = j;
            isClosingSignExisting = true;
            break;
          }
        }
        break;

        case '[':
        startIndex = i + 1;
        for(let j = i + 1; j < stringWithBrackets.length; j++){
          const closingSign = stringWithBrackets[j];
          if(closingSign === ']') {
            endIndex = j;
            isClosingSignExisting = true;
            break;
          }
        }
        break;

        case '{':
        startIndex = i + 1;
        for(let j = i + 1; j < stringWithBrackets.length; j++){
          const closingSign = stringWithBrackets[j];
          if(closingSign === '}') {
            endIndex = j;
            isClosingSignExisting = true;
            break;
          }
        }
        break;

    }

    // debugger;
    if(isClosingSignExisting) {
      i = endIndex;
      let remainedBetweenAPairOfBrackets = stringWithBrackets.substring(startIndex, endIndex);
      if ((remainedBetweenAPairOfBrackets.length % 2) !== 0) areBracketsAllRight = false;
      if (remainedBetweenAPairOfBrackets.length !== 0) {
        if(!checkBrackets(remainedBetweenAPairOfBrackets)) areBracketsAllRight = false;
      }
    };
  }

  if (areBracketsAllRight) return true;
  else return false;
}


/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(checkBrackets("[{()}]"), true);
// verify(checkBrackets("[{]}"), false);
verify(checkBrackets("()[{}]"), true);
verify(checkBrackets("{[(]}}"), false);
verify(checkBrackets("[{()]}"), false);
verify(checkBrackets("[]{})("), false);
verify(checkBrackets("()([{})]"), false);