// const header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px black';

// const title = document.getElementsByClassName('title');
// title[0].style.fontWeight = 'bold'
// title[0].style.color = 'green'

// const ul = document.getElementById('items');
// ul.children[2].style.background = 'green'
// ul.style.fontWeight= 'bold'


const listByClass = document.getElementsByClassName('list-group-item');
// list.forEach((list1) => list1.style.color = 'red');
// for(let i=0; i<listByClass.length; i++){
//     listByClass[i].style.color = 'red'
// }

// const listByTag = document.getElementsByTagName('li');
// for(let i=0; i<listByTag.length; i++){
//     listByTag[i].style.color = "blue"
// } 


// QUESTION 6
// Part1 - 2nd item have green background
// listByClass[1].style.background = 'green'
// // Part2 - 3rd item invisible
// listByClass[2].style.display = 'none'

// QUERY SELECTOR ALL
// Using QuerySelectorALL change the font color to green for 2nd item
const list = document.querySelectorAll('li');
list[1].style.color = 'green'
// Choose all the odd elements and make their background green using QuerySelectorALL﻿
const oddEle = document.querySelectorAll('li:nth-child(odd)');
for(let i = 0; i < oddEle.length; i++){
    oddEle[i].style.background = 'lightgreen';
}