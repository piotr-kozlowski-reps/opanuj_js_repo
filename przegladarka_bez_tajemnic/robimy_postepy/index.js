// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic
// ## Ćwiczenie nr. 15 - Robimy postępy

// ### Jak zacząć
// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia
// Kroki postępu to komponent towarzyszący użytkownikowi, gdy musi zrealizować kilka działań, aby ukończyć zadanie. Często używa się go podczas procesu zakupowego, aby zwiększyć szansę, że użytkownik wypełni wszystkie formularze.

// Twoje zadania:
// 1. Zaimplementuj logikę cofania się lub przechodzenia dalej po kliknięciu w przycisk "Wróć" lub "Dalej"
// 2. Zablokuj odpowiedni przycisk gdy użytkownik znajduje się na początku/końcu procesu

// Punkty bonusowe:
// 1. Dodaj animację wypełniania kolorem paska i okręgu z numerem akcji po kliknięciu "Dalej"
// 2. Dodaj animację usuwania wypełnianiaW kolorem paska i okręgu z numerem akcji po kliknięciu "Wróć"



// // Import stylesheets
// import './style.css';


document.addEventListener('DOMContentLoaded', () => {

    

    //selectors
    const num1CircleSelector = document.querySelector('#num1_circle');
    const num1LineSelector = document.querySelector('#num1_line');
    
    const num2CircleSelector = document.querySelector('#num2_circle');
    const num2LineSelector = document.querySelector('#num2_line');
    
    const num3CircleSelector = document.querySelector('#num3_circle');
    const num3LineSelector = document.querySelector('#num3_line');
    
    const num4CircleSelector = document.querySelector('#num4_circle');
    const num4LineSelector = null;

    const wrocButtonSelector = document.querySelector('#wroc_button');
    const dalejButtonSelector = document.querySelector('#dalej_button');


    //vars
    let index = 0;
    const numberSelectorArrays = [
        [num1CircleSelector, num1LineSelector],
        [num2CircleSelector, num2LineSelector],
        [num3CircleSelector, num3LineSelector],
        [num4CircleSelector, num4LineSelector],
    ]



    //init
    refresh();

    //events
    wrocButtonSelector.addEventListener('click', decrementIndexAndRefresh);
    dalejButtonSelector.addEventListener('click', incrementIndexAndRefresh);



    //utils
    function refresh(){

        console.log(numberSelectorArrays);

        for(let i = 0; i < index; i++){
            numberSelectorArrays[i][0].className = "w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center";
            numberSelectorArrays[i][0].innerHTML = `<span class="text-white text-center w-full"><i class="fa fa-check w-full fill-current white"></i></span>`;
            if(numberSelectorArrays[i][1] != null || numberSelectorArrays[i][1] != undefined) numberSelectorArrays[i][1].style.width = '100%';
        }

        
        for(let i = index; i < numberSelectorArrays.length; i++){
            numberSelectorArrays[i][0].className = "w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center";
            numberSelectorArrays[i][0].innerHTML = `<span class="text-grey-darker text-center w-full">${i + 1}</span>`;
            if(numberSelectorArrays[i][1] != null || numberSelectorArrays[i][1] != undefined) numberSelectorArrays[i][1].style.width = '0%';
        }

        // debugger;
        let temporaryIndex = index - 1;
        if (temporaryIndex >= 0 && temporaryIndex < numberSelectorArrays.length){
            if(numberSelectorArrays[temporaryIndex][1] != null || numberSelectorArrays[temporaryIndex][1] != undefined) numberSelectorArrays[temporaryIndex][1].style.width = '20%';
        }

        if (index === 0) {
            wrocButtonSelector.removeEventListener('click', decrementIndexAndRefresh);
            wrocButtonSelector.className = 'bg-transparent text-gray-50 font-semibold py-2 px-4 border border-gray rounded mr-4 opacity-25 cursor-default';
        } else {
            wrocButtonSelector.addEventListener('click', decrementIndexAndRefresh);
            wrocButtonSelector.className = 'bg-transparent hover:bg-red text-red-dark font-semibold hover:text-white py-2 px-4 border border-red hover:border-transparent rounded mr-4';
        }

        if (index === numberSelectorArrays.length){
            dalejButtonSelector.removeEventListener('click', incrementIndexAndRefresh);
            dalejButtonSelector.className = 'bg-transparent text-gray-50 font-semibold py-2 px-4 border border-gray rounded mr-4 opacity-25 cursor-default';
        } else {
            dalejButtonSelector.addEventListener('click', incrementIndexAndRefresh);
            dalejButtonSelector.className = 'bg-transparent hover:bg-red text-red-dark font-semibold hover:text-white py-2 px-4 border border-red hover:border-transparent rounded mr-4';
        }

    }

    function decrementIndexAndRefresh(){
        console.log('decrement');
        index--;
        refresh();
    }
    
    function incrementIndexAndRefresh(){
        console.log('increment');
        // debugger;
        index++;
        refresh();
    }




    //init test
    // num1CircleSelector.className = "w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center";
    // num1CircleSelector.innerHTML = '<span class="text-grey-darker text-center w-full">1</span>';
    // num1LineSelector.style.width = '20%';







})

