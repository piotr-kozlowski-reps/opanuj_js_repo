// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic
// ## Ćwiczenie nr. 17 - Fancy upload

// ### Jak zacząć
// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia
// W wielu aplikacjach webowych dajemy użytkownikom możliwość uploadowania plików na serwer. W tym zadaniu zbudujesz naprawdę dopieszczony input, który po wybraniu pliku przez użytkownika, wyświetli mu kilka szczegółowych informacji.

// Twoje zadania:
// 1. Wyświetl nazwę wybranego pliku
// 2. Wyświetl wielkość pliku w MB
// 3. Wyświetl format pliku 

// Punkty bonusowe:
// 1. Dodaj przycisk pozwalajacy zrezygnować z wybranego pliku i przywrócić domyślny stan komponentu





// // Import stylesheets
// import './style.css';


document.addEventListener('DOMContentLoaded', () => {

const outputSelector = document.querySelector('#output');
const mainTextButtonSelector = document.querySelector('#main-text-button');
const labelSelector = document.querySelector('label');


    document.querySelector('input').addEventListener('change', event => {

        // debugger;
        // outputSelector.innerHTML = '';
        for(const file of event.target.files) {
            const name = file.name ? file.name : 'NOT SUPPORTED';
            const type = file.type ? file.type : 'NOT SUPPORTED';
            const size = file.size ? file.size : 'NOT SUPPORTED';

            labelSelector.className = 'w-64 flex flex-col items-center px-4 py-6 bg-white text-gray rounded-lg shadow-lg tracking-wide uppercase border border-gray';
            outputSelector.className = 'pt-8';
            outputSelector.innerHTML = `
            <p class="text-center text-gray-400 text-sm normal-case py-80">nazwa pliku: <span class="font-bold">${name}</span></p>
            <p class="text-center text-gray-400 text-sm normal-case py-80">typ: <span class="font-bold">${type}</span></p>
            <p class="text-center text-gray-400 text-sm normal-case py-80">wielkość pliku: <span class="font-bold">${Math.round(size * 0.000977).toFixed(2)}</span> kb</p>`;
        }

        // (Math.round(num * 100) / 100).toFixed(2);
        mainTextButtonSelector.textContent = 'wybrano plik:';


    })




})



//   const output = document.getElementById('output'); 
//   if (window.FileList && window.File) { 
//       document.getElementById('file-selector').addEventListener('change', event => { 
//           output.innerHTML = ''; 
//           for (const file of event.target.files) { 
//               const li = document.createElement('li'); 
//               const name = file.name ? file.name : 'NOT SUPPORTED'; 
//               const type = file.type ? file.type : 'NOT SUPPORTED'; 
//               const size = file.size ? file.size : 'NOT SUPPORTED'; 
//               li.textContent = `name: ${name}, 
//               type: ${type}, size: ${size}`; output.appendChild(li); 
//             } }); 
//         } 