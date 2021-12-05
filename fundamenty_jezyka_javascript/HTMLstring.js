/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 21 - "HTML String"
*/

/*
* Cel zadania
*------------
* To zadanie stanowi wstęp do projektu "Abstract Syntax Trees" https://przeprogramowani.pl/opanuj-javascript_ast.pdf. Zacznij od zapoznania się z jego wprowadzeniem i opisem.
*
* Twoim rozgrzewkowym zadaniem jest napisanie funkcji, która przekonwertuje pojedynczy obiekt AST na HTML String.
*
* Przykład: convertAstToHtmlString({ 
“nodeType”: “element”, “tagName”: “div”,
“attributes”: [ { “name”: “class”, “value”: “test” }],
“children”: [ “nodeType”: “text”, “value”: “Hello world!”]
}) => "<div class="test">Hello world!</div>"
* 
* 
*/

function convertAstToHtmlString(astObject) {

  let resultTagObjectDecomposed = {};

  const elementNameString = astObject["tagName"];
  const tagAttributesString = collectTagAttributesAsFinalString(astObject);
  const content = createContent(astObject);

  return `<${elementNameString} ${tagAttributesString}>${content}</${elementNameString}>`;
}




//utils
function collectTagAttributesResultsArray(astObject){

  const resultAttributesStringsAsArray = [];

  const attributesArrayFromSource = astObject['attributes'];

  for (let i = 0; i < attributesArrayFromSource.length; i++){

    const valueObject = attributesArrayFromSource[i];
    const attributeAsString = `${valueObject.name}="${valueObject.value}"`;
    resultAttributesStringsAsArray.push(attributeAsString);
  }

  return resultAttributesStringsAsArray;
}

function collectTagAttributesAsFinalString(astObject){

  let attributesResultAsFormattedString = '';
  const attributesArrayFromSource = collectTagAttributesResultsArray(astObject);

  for (let i = 0; i < attributesArrayFromSource.length; i++){

    const attribute = attributesArrayFromSource[i];

    if (i !== (attributesArrayFromSource.length - 1)) attributesResultAsFormattedString += attribute + ' ';
    else attributesResultAsFormattedString += attribute;

  }

  return attributesResultAsFormattedString;
}

function createContent(astObject){

  // debugger;
  let finalStringContent = '';
  const contentFromSource = astObject['children'];

  if (contentFromSource[0]['nodeType'] === "text") finalStringContent += contentFromSource[0]['value'];

  return finalStringContent;
}






/* Weryfikacja */
function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(convertAstToHtmlString(
  { 
    "nodeType": "element", 
    "tagName": "div",
    "attributes": [ { "name": "class", "value": "test" } ],
    "children": [ { "nodeType": "text", "value": "Hello world!" }]}), '<div class="test">Hello world!</div>');
