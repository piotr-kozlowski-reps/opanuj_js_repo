/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 6 - "W dwóch krokach"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która zwróci kolejną funkcję dodającą do przekazywanego
* parametru zarejestrowany wcześniej przedrostek.
*
*
* Przykład:
* const greeting = withPrefix('Witaj, ');
* greeting('Janek'); // => 'Witaj, Janek'
* greeting('Tomek'); // => 'Witaj, Tomek'
*
* const goodbye = withPrefix('Żegnaj, ');
* goodbye('Janek'); // => 'Żegnaj, Janek'
* goodbye('Tomek'); // => 'Żegnaj, Tomek'
*
* Utworzona funkcja to tzw. funkcja wyższego rzędu.
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/

function withPrefix(prefix) {
  return prefix;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

const course = function(element) {

  if (element === null || element === undefined) throw new Error('Argument was null or undefined');
  if (Object.prototype.toString.call(element) !== "[object String]") throw new Error('Unfortunately, not a string');

  return withPrefix('I ty Opanujesz JavaScript, ') + element;
};

try {
  verify(course('Marta'), 'I ty Opanujesz JavaScript, Marta');
  verify(course('Janek'), 'I ty Opanujesz JavaScript, Janek');
  verify(course(1), 'I ty Opanujesz JavaScript, Marta');
} catch {
  console.log('Niestety :(')
}