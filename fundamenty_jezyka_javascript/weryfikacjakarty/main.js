
import {checkCardNumber} from './checkCardNumberModule.js';

/* Weryfikacja */

function verify(input, goal) {
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(checkCardNumber('5193 0801 5095 4111'), 'Mastercard');
// verify(checkCardNumber('378-282 24-6310--005'), 'American Express');
// verify(checkCardNumber('5555555 55555-44-44'), 'Mastercard');
// verify(checkCardNumber('5105-1-0 5105105100'), 'Mastercard');
// verify(checkCardNumber('4012888888881881'), 'Visa');
// verify(checkCardNumber('411-11-1111-11-11111'), 'Visa');
// verify(checkCardNumber('4111111111451111'), 'Nieprawidłowy');
// verify(checkCardNumber('411111145111'), 'Nieprawidłowy');
