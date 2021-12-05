// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 8 - Sortowanie danych

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// W tabeli znajdują się informacje o modułach kursu "Opanuj JavaScript".

// Spraw aby:
// 1. po kliknięciu na "Czas trwania" moduły sortowały się według czasu trwania
// 2. trzałka przy napisie "Czas trwania" sugerowała użytkownikowi kolejność
// 3. sekundy były wyświetlane w formacie hh:mm:ss

// ### Punkty bonusowe

// Zaimplementuj animację zamiany kolejności wykorzystując animacje CSS.

document.addEventListener("DOMContentLoaded", () => {
  const tbodySelector = document.querySelector("tbody");
  const allTRsSelector = tbodySelector.querySelectorAll("tr");
  const iconCzasTrwaniaDown = document
    .querySelector("thead")
    .querySelector("#down-arrow");
  const iconCzasTrwaniaUp = document
    .querySelector("thead")
    .querySelector("#up-arrow");
  const aHrefCzasTrwania = document.querySelector("thead").querySelector("a");

  const dataConvertedToStringsArray = createObjectsArrayOfData(allTRsSelector);

  let isAscendingOrder = false;
  aHrefCzasTrwania.addEventListener("click", () => {
    clearSelectorContent(tbodySelector);

    if (isAscendingOrder) {
      dataConvertedToStringsArray.sort((a, b) => a[2] - b[2]);
      isAscendingOrder = !isAscendingOrder;
      removeArrow(iconCzasTrwaniaDown);
    } else {
      dataConvertedToStringsArray.sort((a, b) => b[2] - a[2]);
      isAscendingOrder = !isAscendingOrder;
      removeArrow(iconCzasTrwaniaUp);
    }

    const contentForTbody = document.querySelector("tbody");
    for (item of dataConvertedToStringsArray) {
      const newTRItem = document.createElement("tr");

      const newTD1 = createNewTDItem(item[0]);
      const newTD2 = createNewTDItem(item[1]);
      const newTD3 = createNewTDItem(item[2]);

      // debugger;
      newTRItem.appendChild(newTD1);
      newTRItem.appendChild(newTD2);
      newTRItem.appendChild(newTD3);

      contentForTbody.appendChild(newTRItem);
    }

    //utils
    function createNewTDItem(itemText) {
      const newTDItem = document.createElement("td");
      newTDItem.classList.add("border");
      newTDItem.classList.add("px-4");
      newTDItem.classList.add("py-2");
      newTDItem.innerHTML = itemText;

      return newTDItem;
    }

    function removeArrow(iconReference) {
      iconCzasTrwaniaDown.classList.remove("hidden");
      iconCzasTrwaniaUp.classList.remove("hidden");
      iconReference.classList.add("hidden");
    }

    function clearSelectorContent(selector) {
      while (selector.lastChild) {
        selector.removeChild(selector.lastChild);
      }
    }
  });

  //utils
  function createObjectsArrayOfData(allTRsArray) {
    let allTRsArrayResult = [];

    for (tr of allTRsArray) {
      const textDividedByTAB = tr.innerText.split(/\t/g);
      allTRsArrayResult.push(textDividedByTAB);
    }

    return allTRsArrayResult;
  }
});
