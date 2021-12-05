const contactsListStartState = [
  { id: 1, name: 'Peter Petrelli' },
  { id: 2, name: 'Claire Bennet' },
  { id: 3, name: 'Hiro Nakamura' },
  { id: 4, name: 'Nathan Petrelli' },
  { id: 5, name: 'Sylar' },
  { id: 6, name: 'Niki Sanders' },
  { id: 7, name: 'Niki2 Sanders2' },
];

const numberOfNamesPerPage = 2;
const dividedArray =  divideContactListIntoArrays(contactsListStartState);
console.log(dividedArray);







function divideContactListIntoArrays(arrayToDivide) {
  const resultArray = [];
  const contactsListCopy = arrayToDivide.slice();

  let counter = 0;
  let partArray = [];
  for (let i = 0; i < contactsListCopy.length; i++) {
    if (counter < numberOfNamesPerPage) {
      partArray.push(contactsListCopy[i]);
      counter++;

      if (i === contactsListCopy.length - 1) {
        resultArray.push(partArray);
      }
    } else {
      resultArray.push(partArray);
      partArray = [];
      counter = 0;
      partArray.push(contactsListCopy[i]);
      counter++;
      if (i === contactsListCopy.length - 1) {
        resultArray.push(partArray);
      }
    }
  }

  return resultArray;
}