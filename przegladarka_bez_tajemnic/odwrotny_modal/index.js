// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic
// ## Ćwiczenie nr. 15 - Odwrotny Modal

// ### Jak zacząć
// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia
// Modal to okienko, który zasłania główne okno aplikacji. Wykorzystujemy je, gdy chcemy uzyskać dodatkowe potwierdzenie akcji, którą rozpoczął użytkownik, np. usunięcie ważnego zasobu z bazy danych. 

// Twoje zadania:
// 1. Zaimplementuj logikę pozwalającą zamknąć modal po kliknięciu w "X"
// 2. Zaimplementuj logikę wyświetlającą modal po kliknięciu w przycisk "Przyjmuję wyzwanie"

// Punkty bonusowe:
// 1. Zamykaj modal, gdy użytkownik kliknie w szare tło oraz przyciski: Poddaje się/Lecimy!





// // Import stylesheets
// import './style.css';

document.addEventListener('DOMContentLoaded', () => {


    //selectors
    const przyjmijButtonSelector = document.querySelector('#przyjmijbutton');
    const modalSelector = document.querySelector('#modal');
    const crossSelector = document.querySelector('#cross');
    const poddajeButtonSelector = document.querySelector('#poddaje-button');
    const lecimyButtonSelector = document.querySelector('#lecimy_button');


    //events
    // przyjmijButtonSelector.addEventListener('click', () => {
    //     modalSelector.className = "main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center";
    // })

    document.addEventListener('click', (event) => {

        // debugger;
        console.log(event);

        if(event.target.matches("#przyjmijbutton")){
            console.log('open modal');
            openModal();
            return;
        }

        if (event.target.matches("#cross")) {
            console.log('cross clicked');
            closeModal();
            return;
        }

        if (event.target.matches("#poddaje-button")) {
            console.log('poddaje-button clicked');
            closeModal();
            return;
        }

        if (event.target.matches("#lecimy_button")) {
            console.log('lecimy_button clicked');
            closeModal();
            return;
        }
        
        if (!event.target.closest("#modal_content")) {
            console.log('outside modal_content clicked');
            closeModal();
            return;
        }

    })



    //utils
    function closeModal() {
        modalSelector.className += ' hidden';
    }

    function openModal(){
        modalSelector.className = "main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center";
    }
})

