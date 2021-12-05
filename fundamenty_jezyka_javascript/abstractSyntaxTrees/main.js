// import {convertASTToString} from './convertASTToString.js';



function convertASTToString(astJsonObject){

  const { nodeType, tagName, attributes, children} = astJsonObject;
  // nodeType = element or text
  // tagName = ie. p / img
  const tagAttributesAsString = collectTagAttributesAsFinalString(attributes);

  let contentAsString = '';
  if(children === undefined) return contentAsString;
  for (let i = 0; i < children.length; i++){
    const child = children[i];
    if(child.nodeType === 'text') contentAsString += child.value;
    else contentAsString += convertASTToString(child);
  }

  return `<${tagName} ${tagAttributesAsString}>${contentAsString}</${tagName}>`;
}

function  collectTagAttributesAsFinalString(attributesArray){

  let attributesResultAsFormattedString = '';
  
  for(let i = 0; i < attributesArray.length; i++) {

    const attribute = attributesArray[i];
    if(i !== (attributesArray.length - 1)) attributesResultAsFormattedString += `${attribute.name}="${attribute.value}" `;
    else attributesResultAsFormattedString += `${attribute.name}="${attribute.value}"`;
    
  }

return attributesResultAsFormattedString;
}



var jsonObject = {"nodeType":"element","tagName":"div","attributes":[{"name":"class","value":"profile"}],"children":[{"nodeType":"element","tagName":"img","attributes":[{"name":"class","value":"profile__avatar"},{"name":"src","value":"https://www.thispersondoesnotexist.com/image"},{"name":"alt","value":"Avatar"}]},{"nodeType":"element","tagName":"div","attributes":[{"name":"class","value":"profile__details"}],"children":[{"nodeType":"element","tagName":"p","attributes":[{"name":"class","value":"profile__name"}],"children":[{"nodeType":"text","value":"John Doe"}]},{"nodeType":"element","tagName":"p","attributes":[{"name":"class","value":"profile__phone"}],"children":[{"nodeType":"text","value":"+48 123 456 789"}]},{"nodeType":"element","tagName":"p","attributes":[{"name":"class","value":"profile__link"}],"children":[{"nodeType":"element","tagName":"a","attributes":[{"name":"href","value":"https://przeprogramowani.pl/o-nas"}],"children":[{"nodeType":"text","value":"Zobacz więcej"}]}]}]}]};

console.log(convertASTToString(jsonObject));