// # Przeprogramowani.pl - Opanuj JavaScript
// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 18 - Przeszukaj listę
// ### Jak zacząć
// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia
// Listy kontaktów mają to do siebie, że szybko rosną do rozmiarów, których nie jesteśmy w stanie ogarnąć. Bądź proaktywny i zaimplementuj wyszukiwarkę, póki na liście widnieje trio przeprogramowanych ;).

// Twoje zadania:
// 1. Dodaj logikę przeszukiwania listy w oparciu o frazę wprowadzoną do inputa "Wyszukaj kontakt"


// Punkty bonusowe:
// 1. Dodaj animację znikania dla kontaktów, które nie pasują do frazy wyszukiwania
// 2. Dodaj animację pojawiania się dla kontaktow, ktore ponownie pasują do frazy wyszukiwania



// Import stylesheets
// import './style.css';

document.addEventListener('DOMContentLoaded', () => {

    //selectors
    const inputSelector = document.querySelector('input');

    const item1Selector = document.querySelector('#item1');
    const item1ValueSelector = document.getElementById('item1-value');
    
    const item2Selector = document.querySelector('#item2');
    const item2ValueSelector = document.getElementById('item2-value');
    
    const item3Selector = document.querySelector('#item3');
    const item3ValueSelector = document.getElementById('item3-value');


    const valuesArray = [
        ['item1', item1ValueSelector.outerText],
        ['item2', item2ValueSelector.outerText],
        ['item3', item3ValueSelector.outerText]
    ];

    
    //events
    inputSelector.addEventListener('keyup', (event) => {

        const currentInput = event.target.value;

        if(currentInput === ''){
            hideAllItems();
            showAllItems();
        } else {
            hideAllItems();
            for(let i = 0; i < valuesArray.length; i++){
                const itemString = valuesArray[i][1].toLowerCase();
                const inputString = currentInput.toLowerCase();
                if(itemString.includes(inputString)) showItem(i + 1);
            }
        }

    });


    //utils
    function showAllItems(){
        for (let i = 1; i <= valuesArray.length; i++){
            showItem(i);
        }
    }

    function hideAllItems() {
        for (let i = 1; i <= valuesArray.length; i++){
            hideItem(i);
        }
    }

    function showItem(index){
        document.querySelector(`#item${index}`).className = "flex cursor-pointer my-1 hover:bg-blue-lightest rounded";
    }

    function hideItem(index){
        // debugger;
        console.log(document.querySelector(`#item${index}`));
        document.querySelector(`#item${index}`).className = "hidden";
        console.log(document.querySelector(`#item${index}`));
    }

})

