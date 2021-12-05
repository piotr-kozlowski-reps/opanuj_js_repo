// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 3 - Reprodukcja obrazu

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Przy pomocy kodu JavaScript, odwzoruj oryginał obrazu na płótnie powyżej.

// W pliku `index.js` pobrana została referencja do elementu nadrzędnego twojego płótna - jest to zmienna `fakeCanvas`. Od tej zmiennej możesz rozpocząć pracę przy odwzorowaniu obrazu. Powodzenia!

// Pamiętaj - to nauka, więc unikaj drogi na skróty:

// * nie modyfikuj struktury kodu HTML
// * nie modyfikuj styli CSS
// * nie kopiuj oryginału i nie wklejaj go w miejscep płótna ;)


// debugger;
const PIXEL_COLOR = '#e44d4d';

let originalCanvasCopy = document.querySelector('.original-canvas').cloneNode(true);
let fakeCanvas = document.querySelector('.fake-canvas');
fakeCanvas.outerHTML = originalCanvasCopy.outerHTML;
