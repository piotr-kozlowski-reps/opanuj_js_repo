// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 10 dragNDrop

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Możliwość przeciągania elementów to intuicyjny sposób manipulowania elementami.

// Spraw aby:
// 1. było możliwe "przeciągnięcie" kart artykułów z sekcji "Drafts" do "Published" i odwrotnie.
// 2. daj użytkownikowi możliwość kontroli nad kolejnością artykułów w obrębie sekcji

// ### Punkty bonusowe

// - I tak jest dość trudno ;)


// Import stylesheets
// import './style.css';


const draftsBoxSelector = document.querySelector('#drafts_box');
const publishedBoxSelector = document.querySelector('#published_box');
const article1Selector = document.querySelector('#article1');
const article2Selector = document.querySelector('#article2');
let currentDraggedElement = null;


//listeners
article1Selector.addEventListener('dragstart', dragStart);
article1Selector.addEventListener('dragend', dragEnd);
article2Selector.addEventListener('dragstart', dragStart);
article2Selector.addEventListener('dragend', dragEnd);
publishedBoxSelector.addEventListener('dragover', dragOver);
publishedBoxSelector.addEventListener('dragenter', dragEnter);
publishedBoxSelector.addEventListener('dragleave', dragLeave);
publishedBoxSelector.addEventListener('drop', dragDrop);



//drag functions
function dragStart(){
  console.log('dragStart', this);
  this.className += ' border-2 border-dashed';
  setTimeout(() => this.className = 'invisible', 5)  
  currentDraggedElement = this;
}

function dragEnd(){
  console.log('dragEnd', this);
  this.className = 'bg-white rounded-md overflow-hidden my-10';
}

function dragOver(e){
  e.preventDefault();
}

function dragEnter(e){
  e.preventDefault();
  this.className += ' border-2 border-dashed opacity-50';
}

function dragLeave(){
  this.className = 'p-10 bg-gray-300 flex-1';
}

function dragDrop(){
  this.className = 'p-10 bg-gray-300 flex-1';
  this.append(currentDraggedElement);
}




// .hold {
//   border: solid #ccc 4px;
// }

// .hovered {
//   background: #f4f4f4;
//   border-style: dashed;
// }

// .invisible{
//   display: NamedNodeMap;
// }



