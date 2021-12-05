// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 1 - Lustro

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Spraw, aby tekst lustrzany pojawiał się... w lustrze ;)

// Dostęp do pola tekstowego uzyskasz poprzez klasę `.text-input`.
// Dostęp do lustra uzyskasz poprzez klasę `.mirror`.


document.addEventListener('DOMContentLoaded', () => {
  let formInputSelector = document.querySelector('input');
  let mirrorSelector = document.querySelector('.mirror');

  formInputSelector.addEventListener('keyup', (event) => {
    const mirrorString = createMirror(event.target.value);
    mirrorSelector.innerText = mirrorString;

  });
});

function createMirror(source){
  return source.split('').reverse().join('');
}
