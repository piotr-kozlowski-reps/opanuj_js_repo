import caesar13 from './caesar13';

/* Weryfikacja */

function verify(input, goal) {
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(caesar13("PRZEPROGRAMOWANI"), "CEMRCEBTENZBJNAV");
verify(caesar13("1PRZEPROGRAMOWANI1"), "1CEMRCEBTENZBJNAV1");
verify(caesar13("!!PRZEPROGRAMOWAN I"), "!!CEMRCEBTENZBJNA V");