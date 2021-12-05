// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 12 - świetne alerty

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Informowanie użytkownika o tym, co się dzieje z aplikacją jest priorytetem.Jednym z rodzajów takiej interakcji są różnego rodzaju alerty.

// Napisz klasę która:
// 1. będzie zawierać metodę tworzącą nowy alert na podstawie Wiadomości oraz Rodzaju (Error/Warning/Success)
// 2. w chwili gdy metoda zostanie wywołana, alert powinien być widoczny przez 10 sekund lub do momentu gdy użytkownik na niego kliknie

// ### Punkty bonusowe

// - zadbaj o to, aby wyświetlały się maksymalnie 3 alerty a pozostałe czekały na swoją kolej.
// - zadbaj o dodanie animacji pokazywania / ukrywania alertu

// Import stylesheets
// import './style.css';

//class Alert
class Alert {
  constructor(message, alertType) {
    this.message = message;
    this.alertType = alertType;
  }

  showAlert() {
    const error = `
      <div class="inline-flex items-center bg-white leading-none text-red-600 rounded-full p-2 shadow text-teal text-sm">
        <span class="inline-flex bg-red-600 text-white rounded-full h-6 px-3 justify-center items-center">${this.alertType}</span>
        <span class="inline-flex px-2">${this.message}</span>
      </div>`;

    const warning = `
      <div class="inline-flex items-center bg-white leading-none text-yellow-600 rounded-full p-2 shadow text-sm">
        <span class="inline-flex bg-yellow-600 text-white rounded-full h-6 px-3 justify-center items-center text-">${this.alertType}</span>
        <span class="inline-flex px-2">${this.message}</span>
      </div>`;

    const success = `
      <div class="inline-flex items-center bg-white leading-none text-green-600 rounded-full p-2 shadow text-teal text-sm">
        <span class="inline-flex bg-green-600 text-white rounded-full h-6 px-3 justify-center items-center">${this.alertType}</span>
        <span class="inline-flex px-2">${this.message}</span>
      </div>`;

    const unknown = `
      <div class="inline-flex items-center bg-white leading-none text-green-600 rounded-full p-2 shadow text-teal text-sm">
        <span class="inline-flex bg-gray-600 text-white rounded-full h-6 px-3 justify-center items-center">Unknown alert type: ${this.alertType}</span>
        <span class="inline-flex px-2">${this.message}</span>
      </div>`;

    switch (this.alertType) {
      case "error":
        return error;
        break;

      case "warning":
        return warning;
        break;

      case "success":
        return success;
        break;

      default:
        return unknown;
    }
  }
}

////logic
const alertsHolder = document.querySelector("#alerts-holder");
const alertsArray = [];

//events
document.forms[0].addEventListener("submit", (event) => {
  event.preventDefault();

  const alertTypeValue = alerttype.value;
  const messageValue = message.value;
  const alert = new Alert(messageValue, alertTypeValue);

  const divElement = createDivElement(alert);
  const currentTime = Date.now();
  const elementAndTime = [divElement, currentTime];

  alertsArray.push(elementAndTime);

  refresh();
});

//utils
function createDivElement(alert) {
  const divElement = document.createElement("div");
  divElement.className = "p-2";
  divElement.innerHTML = alert.showAlert();
  divElement.style.cursor = "pointer";
  divElement.addEventListener("click", handleClickOnAlerts);
  return divElement;
}

function refresh() {
  clearSelectorContent(alertsHolder);
  for (const alertArrayItem of alertsArray)
    alertsHolder.appendChild(alertArrayItem[0]);
}

function handleClickOnAlerts() {
  alertsArray.splice(this, 1);
  alertsHolder.removeChild(this);
}

function updateArray() {
  for (const alertArrayItem of alertsArray) {
    const alertElementTime = alertArrayItem[1];
    const timePassedInMilliseconds = Date.now() - alertElementTime;
    console.log(timePassedInMilliseconds);

    if (timePassedInMilliseconds > 10000) alertsArray.splice(alertArrayItem, 1);
    console.log(alertsArray);

    refresh();
  }
}

function clearSelectorContent(selector) {
  while (selector.lastChild) {
    selector.removeChild(selector.lastChild);
  }
}

setInterval(updateArray, 2000);
