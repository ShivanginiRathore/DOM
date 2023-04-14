// // const header = document.getElementById('main-header');
// // header.style.borderBottom = 'solid 3px black';

// // const title = document.getElementsByClassName('title');
// // title[0].style.fontWeight = 'bold'
// // title[0].style.color = 'green'

// // const ul = document.getElementById('items');
// // ul.children[2].style.background = 'green'
// // ul.style.fontWeight= 'bold'


// const listByClass = document.getElementsByClassName('list-group-item');
// // list.forEach((list1) => list1.style.color = 'red');
// // for(let i=0; i<listByClass.length; i++){
// //     listByClass[i].style.color = 'red'
// // }

// // const listByTag = document.getElementsByTagName('li');
// // for(let i=0; i<listByTag.length; i++){
// //     listByTag[i].style.color = "blue"
// // } 


// // QUESTION 6
// // Part1 - 2nd item have green background
// // listByClass[1].style.background = 'green'
// // // Part2 - 3rd item invisible
// // listByClass[2].style.display = 'none'

// // QUERY SELECTOR ALL
// // Using QuerySelectorALL change the font color to green for 2nd item
// const list = document.querySelectorAll('li');
// list[1].style.color = 'green'
// // Choose all the odd elements and make their background green using QuerySelectorALL﻿
// const oddEle = document.querySelectorAll('li:nth-child(odd)');
// for(let i = 0; i < oddEle.length; i++){
//     oddEle[i].style.background = 'lightgreen';
// }




// ----------- Question 7 ---------------------
const items = document.querySelector('#items');

// // 1) parentElement
// console.log(items.parentNode);
// items.parentNode.style.background = 'grey'
// console.log(items.parentElement);
// items.parentElement.style.background = 'lightgreen'


// 2) lastelementchild
console.log(items.childNodes) 
console.log(items.children)
console.log(items.lastElementChild)

// 3) lastchild
console.log(items.lastChild)

// 4) createchild
// 5) firstelementchild
console.log(items.firstElementChild)
// 6) firstchild
console.log(items.firstChild)
// 7) nextsibling
console.log(items.nextSibling)
// 8) nextelementsibling
console.log(items.nextElementSibling)
// 9) previoussibling
console.log(items.previousSibling)
// 10) previouselementsibling
console.log(items.previousElementSibling)
// 11) createelement
var newDiv = document.createElement('div');
newDiv.className = 'newDivClass';
newDiv.id = 'newDiv';
// 12) setAttribute
newDiv.setAttribute('title', 'Hello Div');
// 13) createtextnode
const newNode = document.createTextNode('Hello World');
// 14) appendchild
newDiv.appendChild(newNode);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

// part 2
// add HEllo word before Item 1
const ul = document.querySelector('#items');
const firstItem = ul.firstElementChild;
const newLi = document.createElement('li');
newLi.innerText = 'New Item';
newLi.className = 'list-group-item';
ul.insertBefore(newLi, firstItem);


