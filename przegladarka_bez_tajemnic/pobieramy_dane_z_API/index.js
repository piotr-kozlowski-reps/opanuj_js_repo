// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 7 - Księgarnia

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Spraw, aby wyszukiwarka książek z Goodreads.com zaczęła działać poprawnie. 

// Aby zadanie uznać za zakończone, jako użytkownik powinienem być w stanie:
// 1. Wpisać frazę z nazwą książki w pole wyszukiwania
// 2. Nacisnąć przycisk `Wyszukaj` aby pobrać dane z Goodreads.com
// 3. Zobaczyć pięć przykładowych wyników z API Goodreads, zawierających okładkę oraz nazwę ksiażki.

// ### Punkty bonusowe

// 1. Rozbuduj wyniki wyszukiwania o nazwę autora
// 2. Rozbuduj wyniki o link do detali książki na `Goodreads.com`

// API którego możesz używać znajduje się pod adresem `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=harry%20potter`, gdzie `q` to parametr z nazwą książki.


// import './style.css';

// const API_URL = 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q='
const API_URL = 'https://api.agify.io/?name='


document.addEventListener('DOMContentLoaded', () => {

    let inputSelector = document.querySelector('input');
    let validationError = document.querySelector('.form-enter-validation');
    let resultsSelector = document.querySelector('.results');

    inputSelector.addEventListener('keyup', (event) => {

        let inputContent = event.target.value;
        updateValidation(validationError, inputContent);

    })

    document.forms[0].addEventListener('submit', (event) => {

        event.preventDefault();

        const isInputContent = !!inputSelector.value;

        if(isInputContent){

            // debugger;
            console.log(`${API_URL}${inputSelector.value}`);
            fetch(`${API_URL}${inputSelector.value}`)
              .then(response => response.json())
              .then(data => {
                resultsSelector.innerHTML = `<li class="entry"><p class="title">Założony wiek dla imienia: <strong>${data.name} </strong></p><br><p class="entry__name">Powinieneś mieć ${data.age} lat (zapytano o to: ${data.count} razy)</p></li>`
              })
            
        } else {
            validationError.classList.remove('hidden');
        }



    })



    function updateValidation(validationError, inputContent){
        if(inputContent){
            validationError.classList.add('hidden');
        } else {
            validationError.classList.remove('hidden');
        }
    }



})