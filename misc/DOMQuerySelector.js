/* 

################################## Runs in coderPage ###########################
Accepts 2 parameters:
- DOM element: HtmlElement
- CSS class name: string
Returns: [HtmlElement]
- list of current element and all descendant DOM elements, that have that CSS class
*/
function getByClassName(element, name) {
  
  let result = [];
  
  helper(element, name, result);
  return result;
  
} 

function helper(node, className, result){
  if(!node) return;

  if(node.className === className){
    result.push(node);
  }
  
  let children = node.children;
  for(let i=0; i<children.length; i++){
    helper(children[i],className, result);
  }
}



/* 
element.children => HTMLCollection
element.parentElement => Element
element.className => string
element.classList => DOMTokenList
*/


const { JSDOM } = require("jsdom");
const { document } = new JSDOM(`
  <div class='a' id="root">
    <div class='b e' id='b-1'>
      <div class='a' id='a-2'>
        <div class='d' id='d-1'></div>
      </div>
      <div class='c' id='c-1'>
        <div class='a' id='a-3'>
          <div class='d' id='d-2'></div>
        </div>
      </div>
    </div>
  </div>
`).window;
const getIds = (elements=[]) => Array.from(elements).map(x => x.id);
const root = document.getElementById('root');
/*
console.log('actual:  ', getIds(getByClassName(root, 'a')));
console.log('expected:' , `[ 'root', 'a-2', 'a-3' ]`);
*/


/// Part 2

const { document: document2 } = new JSDOM(`
    <div id="root2">
      <div class="a" id="a-1">
        <div class="b" id="b-1">
          <div class="c" id="c-1"></div>
          <div class="c" id="c-2"></div>
        </div>
      <div class="a" id="a-2"></div>
        <div class="b" id="b-2"></div></div>
      </div>
    </div>
`).window;
//classes

const getByClassnameHierarchy = (element, classNames) => {
  let result = [];
  let classes = classNames.split('>');
  let rootEl = getByClassName(element,classes[0]);
  
  rootEl.forEach(el => helperFunc(el, 0, classes, result))
  
  return result;
}



function helperFunc(node,depth,classes, result){
  if(!node) return 
  
  if(depth === classes.length -1){
    if(node.classList.contains(classes[depth])) result.push(node);
    return;
  }
  
  let children = node.children;
  
  for(let i=0; i<children.length; i++){
    let childClass = children[i].classList;
    if(childClass.contains(classes[depth+1])){
        helperFunc(children[i], depth+1, classes, result);
    }
    
  }
}

const root2 = document2.getElementById('root2');

console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>b')));
console.log(`a>b expected:` , `['b-1']`, '\n');

// order matters!:
console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'b>a')));
console.log(`b>a expected:` , `[]`, '\n');

// gaps in the selector shouldn't return anything:
console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>c')));
console.log(`a>c expected:` , `[]`, '\n');

// the number of classes in the string doesn't matter:
console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>b>c')));
console.log(`a>b>c expected:` , `['c-1', 'c-2']`, '\n');

console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'b>c')));
console.log(`b>c expected:` , `['c-1', 'c-2']`, '\n');

console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'c')));
console.log(`c expected:` , `['c-1', 'c-2']`, '\n');