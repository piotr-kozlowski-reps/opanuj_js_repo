/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 3 - "Przeplatanie"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
* - używając kolejnych cyfr parametrów połączy je w jeden string.
*
* Przykład:
* zipIt(111, 222) // => '121212'
* zipIt(123, 456) // => '142536'
* zipIt(12, 5555) // => '152555'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
* spełniają tego warunku, funkcja powinna rzucić wyjątek.
*/

function zipIt(first, second) {
  const firstArray = Array.from(String(first), Number);
  const secondArray = Array.from(String(second), Number);

  const lenghtOfLongerArray = firstArray.length > secondArray.length ? firstArray.length : secondArray.length;

  let finalArray = [];
  for (let i = 0; i < lenghtOfLongerArray; i++){
    if(i < firstArray.length) finalArray.push(firstArray[i]);
    if(i < secondArray.length) finalArray.push(secondArray[i]);
  }
  
  return finalArray.join("");
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(zipIt(111, 222), '121212');
verify(zipIt(123, 456), '142536');
verify(zipIt(12, 5555), '152555');