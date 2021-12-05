// # Przeprogramowani.pl - Opanuj JavaScript
// Moduł II. - Przeglądarka bez tajemnic
// ## Ćwiczenie nr. 20 - Akordeon
// ### Jak zacząć
// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.
// ### Cel ćwiczenia

// Akordeon (ang. Accordion) to kolejny bardzo popularny komponent webowy. Niestety ten widoczny po lewej, oprócz swoich walorów estetycznych, póki co nie ma zbyt wiele do zaoferowania. Czas to zmienić.

// Twoje zadania:
// 1. Zaimplementuj logikę zawijania/rozwijania sekcji po kliknięciu w strzałkę
// 2. Automatycznie zawijaj poprzednią sekcję, jeżeli użytkownik aktywuje inną

// Punkty bonusowe:
// 1. Dodaj logikę zmiany stanu (toggle) sekcji przy dwukrotnym kliknięciu w jej tytuł
// 2. Dodaj animację zawijania sekcji
// 3. Dodaj animację rozwijania sekcji


// Import stylesheets
// import './style.css';


document.addEventListener('DOMContentLoaded', () => {

  //selectors
  const article1IconSelector = document.getElementById('article1-icon');
  const article1BackgroundSelector = document.getElementById('article1-background');
  const article1ContentSelector = document.getElementById('article1-content');
  const article1TitleSelector = document.getElementById('article1-title');
  
  const article2IconSelector = document.getElementById('article2-icon');
  const article2BackgroundSelector = document.getElementById('article2-background');
  const article2ContentSelector = document.getElementById('article2-content');
  const article2TitleSelector = document.getElementById('article2-title');
  
  const article3IconSelector = document.getElementById('article3-icon');
  const article3BackgroundSelector = document.getElementById('article3-background');
  const article3ContentSelector = document.getElementById('article3-content');
  const article3TitleSelector = document.getElementById('article3-title');
  
  const article4IconSelector = document.getElementById('article4-icon');
  const article4BackgroundSelector = document.getElementById('article4-background');
  const article4ContentSelector = document.getElementById('article4-content');
  const article4TitleSelector = document.getElementById('article4-title');
  
  //vars
  let whichArticle = 'article2';
  const articles = {
    article1: [article1IconSelector, article1BackgroundSelector, article1ContentSelector, article1TitleSelector],
    article2: [article2IconSelector, article2BackgroundSelector, article2ContentSelector, article2TitleSelector],
    article3: [article3IconSelector, article3BackgroundSelector, article3ContentSelector, article3TitleSelector],
    article4: [article4IconSelector, article4BackgroundSelector, article4ContentSelector, article4TitleSelector]
  }



  //events
  article1IconSelector.addEventListener('click', () => {
    articleAction('article1');
  });
  article1TitleSelector.addEventListener('dblclick', () => {
    articleAction('article1');
  })
  
  
  article2IconSelector.addEventListener('click', () => {
    articleAction('article2');
  });
  article2TitleSelector.addEventListener('dblclick', () => {
    articleAction('article2');
  })
  

  article3IconSelector.addEventListener('click', () => {
    articleAction('article3');
  });
  article3TitleSelector.addEventListener('dblclick', () => {
    articleAction('article3');
  })
  
  
  article4IconSelector.addEventListener('click', () => {
    articleAction('article4');
  });
  article4TitleSelector.addEventListener('dblclick', () => {
    articleAction('article4');
  })




//utils
function articleAction(article){

  if(whichArticle === article) {
    turnOffAll();
    whichArticle = '0';
    return;
  }
  turnOn(article);
}

//ONs
function turnOn(article){

  for(const [key, value] of Object.entries(articles)){

    if(key === article) {
      turnOnIcon(value[0]);
      turnOnBackground(value[1]);
      turnOnContent(value[2]);
      turnOnTitle(value[3]);
    } else {
      turnOffIcon(value[0]);
      turnOffBackground(value[1]);
      turnOffContent(value[2]);
      turnOffTitle(value[3]);
    }

    whichArticle = article;
  }

}

function turnOnIcon(selector){
  selector.className = 'rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo';
  selector.innerHTML = `
  <!-- icon by feathericons.com -->
  <svg aria-hidden="true" data-reactid="281" fill="none" height="24" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <polyline points="18 15 12 9 6 15">
      </polyline>
  </svg>
  `;
}

function turnOnBackground(selector){
  selector.className = 'border-l-2 bg-grey-lightest border-indigo';
}

function turnOnContent(selector){
  // debugger;
  selector.className = '';
}

function turnOnTitle(selector){
  // debugger;
  selector.className = 'text-indigo font-thin text-xl';
}


//OFFs
function turnOffAll(){

  for(const [key, value] of Object.entries(articles)){

      turnOffIcon(value[0]);
      turnOffBackground(value[1]);
      turnOffContent(value[2]);
      turnOffTitle(value[3]);
    
  }

}

function turnOffIcon(selector){
  selector.className = 'rounded-full border border-grey w-7 h-7 flex items-center justify-center';
  selector.innerHTML = `
  <!-- icon by feathericons.com -->
  <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <polyline points="6 9 12 15 18 9">
      </polyline>
  </svg>
  `;
}

function turnOffBackground(selector){
  selector.className = 'border-l-2 border-transparent';
}

function turnOffContent(selector){
  selector.className = 'hidden';
}

function turnOffTitle(selector){
  // debugger;
  selector.className = 'text-grey-darkest font-thin text-xl';
}

})


