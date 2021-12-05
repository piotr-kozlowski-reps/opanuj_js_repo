/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 1 - "Odwróć to"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która odwróci przekazany do niej string.
*
* Przykład:
* reverseMe('abc') // => 'cba'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/

const object = {key1: "value1"};

function reverseMe(input) {
  if (input === null || input === undefined) throw new Error('Input was null or undefined');
  if (Object.prototype.toString.call(input) !== "[object String]") throw new Error('Input was not String');

  // const stringToArray = input.split("");
  // const arrayReversed = stringToArray.reverse();
  // const arrayReversedJoined = arrayReversed.join("");
  // return arrayReversedJoined;

  return input.split("").reverse().join("");
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log(`Gratulacje!`);
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

// verify(reverseMe(null), undefined);
// verify(reverseMe(undefined), undefined);
// verify(reverseMe(2), undefined);
// verify(reverseMe(object), undefined);
verify(reverseMe('a'), 'a');
verify(reverseMe('abc'), 'cba');
verify(reverseMe('Przeprogramowani'), 'inawomargorpezrP');
verify(reverseMe('Brawo!'), '!owarB');