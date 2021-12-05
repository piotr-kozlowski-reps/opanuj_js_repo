
export function checkCardNumber(cardNumberString){

  let resultString = '';

  // debugger;
  const cardNumberOnly = cardNumberString.replaceAll(/\W/g, '');
  if (checkIfCardCanBeMastercard(cardNumberOnly)) resultString = checkIfMastercardIsValid(cardNumberOnly);
  else if (checkIfCardCanBeVisa(cardNumberOnly)) resultString = checkIfVisaIsValid(cardNumberOnly);
  else if (checkIfCardCanBeAmericanExpress(cardNumberOnly)) resultString = checkIfAmericanExpressIsValid(cardNumberOnly);
  else resultString =  'Nieprawidłowy';
  return resultString;
}


//utils
function checkIfCardCanBeMastercard(cardNumberOnly){

  if (
    (cardNumberOnly.length === 16 && cardNumberOnly.substring(0, 2) === '51')
    || (cardNumberOnly.length === 16 && cardNumberOnly.substring(0, 2) === '52')
    || (cardNumberOnly.length === 16 && cardNumberOnly.substring(0, 2) === '53')
    || (cardNumberOnly.length === 16 && cardNumberOnly.substring(0, 2) === '54')
    || (cardNumberOnly.length === 16 && cardNumberOnly.substring(0, 2) === '55')
  ) return true;

  return false;
}

function checkIfCardCanBeVisa(cardNumberOnly){

  if (
    (cardNumberOnly.length === 15 && cardNumberOnly.substring(0, 2) === '34')
    || (cardNumberOnly.length === 15 && cardNumberOnly.substring(0, 2) === '37')
  ) return true;

  return false;
}

function checkIfCardCanBeAmericanExpress(cardNumberOnly){

  if (
    (cardNumberOnly.length === 15 && cardNumberOnly.substring(0, 2) === '34')
    || (cardNumberOnly.length === 15 && cardNumberOnly.substring(0, 2) === '37')
  ) return true;

  return false;

}


function checkIfMastercardIsValid(cardNumber){

  let isValid = validateCard(cardNumber);
  if (isValid) return 'Mastercard';
  return 'Nieprawidłowy';
}

function checkIfVisaIsValid(cardNumber){

  let isValid = validateCard(cardNumber);
  if (isValid) return 'Visa';
  return 'Nieprawidłowy';
}

function checkIfAmericanExpressIsValid(cardNumber){

  let isValid = validateCard(cardNumber);
  if (isValid) return 'American Express';
  return 'Nieprawidłowy';
}


function validateCard(cardNumber){

  let isValid = true;


  //card numbers as numbers Array
  const cardAsArrayOfNumbers = [];
  for(let i = 0; i < cardNumber.length; i++){
    cardAsArrayOfNumbers.push(Number.parseInt(cardNumber[i]));
  }


  //part1: 
  //Zaczynając od przedostatniej liczby, pomnóż przez dwa każdą cyfrę o nieparzystym indeksie. Rozbij 
  //otrzymane liczby na sumę ich cyfr (np. 18 -> 1 + 8), następnie zsumuj wszystkie te cyfry ze sobą. 
  let sumEveryOddNumberByPart1VerificationPattern = 0;
  let oddNumbersMultipliedBy2Array = [];
  let indexesOfUsedNumbersArray = [];
  for (let i = cardAsArrayOfNumbers.length - 2; i >= 0; i--){
    if((i + 1) % 2 !== 0) {
      oddNumbersMultipliedBy2Array.push(cardAsArrayOfNumbers[i] * 2);
      indexesOfUsedNumbersArray.push(i);
    }
  }
  for(let i = 0; i < oddNumbersMultipliedBy2Array.length; i++){
    sumEveryOddNumberByPart1VerificationPattern += sumOfNumbers(oddNumbersMultipliedBy2Array[i]);
  }

  //part2:
  //Suma cyfr, których nie pomnożyłeś przez dwa.
  let sumOfRemainingNumbers = 0;
  for(let i = 0; i < cardAsArrayOfNumbers.length; i++) {
    if(!indexesOfUsedNumbersArray.includes(i)) sumOfRemainingNumbers += cardAsArrayOfNumbers[i];
  }

  //part3: final validation check
  //Dodaj otrzymaną sumę do sumy cyfr, których nie pomnożyłeś przez dwa. 
  //Jeżeli modulo 10 otrzymanej liczby jest równe 0, numer karty jest prawidłowy
  let sum = sumEveryOddNumberByPart1VerificationPattern + sumOfRemainingNumbers;
  if (sum % 10 !== 0) isValid = false;

return isValid;
}

function sumOfNumbers(number){

  let resultNumber = 0;

  const numberAsString = number.toString();
  for (let i = 0; i < numberAsString.length; i++){
    const currentNumber = Number.parseInt(numberAsString[i]);
    resultNumber += currentNumber;
  }

  return resultNumber;
}