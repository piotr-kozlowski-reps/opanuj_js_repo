// # Przeprogramowani.pl - Opanuj JavaScript
// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 14 - Paginacja
// ### Jak zacząć
// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia
// Wyświetlanie dużej ilości danych bywa uciążliwe. Paginacja (stronicowanie) to sposób aby sobie z tym poradzić.

// Zaimplementuj prosty mechanizm pagiancji, który na jednej stronie wyświetli 2 elementy z listy.
// - Przyciski "Previous" & "Next" powinny się wyłączać w chwili gdy jesteśmy odpowiednio na pierwszej i ostatniej stronie paginacji.



// // Import stylesheets
// import './style.css';

document.addEventListener('DOMContentLoaded', () => {

const allListItemsAsArray = document.querySelector('#list_items').querySelectorAll('.rounded');
let index = 0;

//selectors
const listItemsSelectors = document.querySelector('#list_items');
clearSelectorContent(listItemsSelectors);

const previousSelector = document.querySelector('#previous');
const oneSelector = document.querySelector('#one');
const twoSelector = document.querySelector('#two');
const threeSelector = document.querySelector('#three');
const nextSelector = document.querySelector('#next');


//events
previousSelector.addEventListener('click', previousClicked)
nextSelector.addEventListener('click', nextClicked)
oneSelector.addEventListener('click', () => {
    index = 0;
    refreshContent();
})
twoSelector.addEventListener('click', () => {
    index = 2;
    refreshContent();
})
threeSelector.addEventListener('click', () => {
    index = 4;
    refreshContent();
})


//init
refreshContent();


//utils
function refreshContent(){
    
    if(index < 2) {
        turnOffSelector(previousSelector, 'Previous');
        previousSelector.removeEventListener('click', previousClicked);
    } else {
        turnOnSelector(previousSelector, 'Previous');
        previousSelector.addEventListener('click', previousClicked);
    }

    if(index >= allListItemsAsArray.length - 2) {
        turnOffSelector(nextSelector, 'Next');
        nextSelector.removeEventListener('click', nextClicked);
    } else {
        turnOnSelector(nextSelector, 'Next');
        nextSelector.addEventListener('click', nextClicked);
    }

    clearSelectorContent(listItemsSelectors);

    listItemsSelectors.appendChild(allListItemsAsArray[index]);
    listItemsSelectors.appendChild(allListItemsAsArray[index + 1]);
}

function turnOffSelector(selector, textContent){
    selector.className = 'relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l';
    selector.innerHTML = `<span class=" text-gray-300">${textContent}</span>`;
}

function turnOnSelector(selector, textContent){
    selector.className = 'relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200';
    selector.innerHTML = `<a class="page-link" href="#">${textContent}</a>`;
}

function clearSelectorContent(selector){
    while(selector.lastChild){
        selector.removeChild(selector.lastChild);
    }
}

function previousClicked(){
    index -= 2; 
    refreshContent()
}

function nextClicked(){
    index += 2; 
    refreshContent()
}

})