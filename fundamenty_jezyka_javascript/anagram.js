/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 17 - "Anagramy"
*/

/*
* Cel zadania
*------------
* Otrzymując jako parametry słowo i tablicę jego możliwych anagramów, zwróć tablicę z właściwymi anagramami.
*
*  Anagram to wyraz powstały przez przestawienie liter innego wyrazu, wykorzystujący wszystkie litery materiału wyjściowego.
*
* Przykład:
* getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]);  => ["orperzpinawomarg",  "graprzewanipromo"]
* 
* 
*/


function getAnagrams(word, possibleAnagrams) {

  let resultAnagramsArray = [];
  const allLettersReferenceObject = createLettersWithItsOccurrencesObject(word);

  for (let i = 0; i < possibleAnagrams.length; i++){

    let isAnagram = true;
    let wordToBeChecked = possibleAnagrams[i];


    //if both words length differs -> false + break
    if(wordToBeChecked.length !== word.length) {
      isAnagram = false;
      continue;
    }


    let possibleAnagramObject = {};
    if(isAnagram) {
      possibleAnagramObject = createLettersWithItsOccurrencesObject(wordToBeChecked);
    }

    //if anagram_proposition_object and reference_object differs -> false
    if(!(checkIfObjectsAreEqual(allLettersReferenceObject, possibleAnagramObject))){
      isAnagram = false;
    }

    if(isAnagram) resultAnagramsArray.push(wordToBeChecked);
  }

  return resultAnagramsArray;
}





//utils
function createLettersWithItsOccurrencesObject(word){

  debugger;
  const allLettersReferenceObject = {};

  for (letter of word) {
    if(!(letter in allLettersReferenceObject)) allLettersReferenceObject[letter] = 1;
    else allLettersReferenceObject[letter]++;
  }

  return allLettersReferenceObject;
}

function checkIfObjectsAreEqual(o1, o2) {

  const entries1 = Object.entries(o1);
  const entries2 = Object.entries(o2);

  if(entries1.length !== entries2.length) return false;
  
  for (let i = 0; i < entries1.length; i++){
    
    const keyToLookFor = entries1[i][0];
    const valueToLookFor = entries1[i][1];
    
    for (let j = 0; j < entries2.length; j++){
      
      const actualKey = entries2[j][0];
      let actualValue = entries2[j][1];
      
      if (keyToLookFor === actualKey && valueToLookFor === actualValue) entries2[j][1] = -1;
    }
  }

  
  for (let i = 0; i < entries2.length; i++){
    if(entries2[i][1] !== -1) return false

  }

  return true;

}




/* Weryfikacja */
function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]), "orperzpinawomarg, graprzewanipromo");
verify(getAnagrams("siema", ["hej", "witam", "dzień dobry", "emasi"]), "emasi");