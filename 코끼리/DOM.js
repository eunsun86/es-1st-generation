/* DOM related */


// getElementById
var element = document.getElementById('tag-id'); // returns a single element
element.getElementsByTagName('div');


// getElementsByClassName
var elements = document.getElementsByClassName('classname'); // returns a node list
elements.length;
elements[0];
elements[1];
elements[2];


// getElementsByTagName
var elements = element.getElementsByTagName('div'); // returns a node list
elements.length;
elements[0];
elements[1];
elements[2];


// querySelectorAll [Node List]
var elements = document.querySelectorAll('ul li'); // returns a node list
elements.length;
elements[0];
elements[1];
elements[2];


// querySelector
var element = document.querySelector('ul li'); // returns a single element
element.querySelector('li');


// parentElement
element.parentElement;


// children
var ulElement = document.querySelector('ul');
ulElement.children; // returns a node list
ulElement.children.length;
ulElement.children[0];
ulElement.children[1];
ulElement.children[2];


// setAttribute, getAttribute
ulElement.setAttribute('hi', 'hi'); // <ul hi="hi"></ul>
ulElement.getAttribute('hi'); // "hi"


// classList
ulElement.classList; // object .length
ulElement.classList.add('classname'); // 'classname' 클래스 추가
ulElement.classList.remove('classname'); // 'classname' 클래스 제거
ulElement.classList.contains('classname'); // Boolean - true, false


// dataset
// <h1 data-vanilla="hello" data-no-vanilla="bye">hi</h1>
var headingElement = document.querySelector('h1');
headingElement.dataset; // object
headingElement.dataset.vanilla; // "hello"
headingElement.dataset.noVanilla; // "bye"


// style property
headingElement.style; // object
headingElement.style.display; // 'block', 'inline-block', 'none'
headingElement.style.display = 'none';

headingElement.style.backgroundColor;
headingElement.style.backgroundColor = 'red';


// innerHTML
// <h1><span>hi,</span> vanilla</h1>
headingElement.innerHTML; // '<span>hi,</span> vanilla'
headingElement.innerHTML = 'hi, <span>vanilla</span>';


// textContent
// <h1>vanilla</h1>
headingElement.textContent; // 'vanilla'
headingElement.textContent = 'no vanilla'; // <h1>no vanilla</h1>



// createElement
var element = document.createElement('img');
element.textContent = 'sdfhusdfusdf';
element.src = 'https://fhsufh'


// appendChild
document.appendChild(element); // document의 맨 마지막 child로 추가


// prepend
document.prepend(element); // document의 첫번째 child로 추가
