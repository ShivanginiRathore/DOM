const header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px black';

const title = document.getElementsByClassName('title');
title[0].style.fontWeight = 'bold'
title[0].style.color = 'green'

const ul = document.getElementById('items');
ul.children[2].style.background = 'green'
ul.style.fontWeight= 'bold'


const listByClass = document.getElementsByClassName('list-group-item');
// list.forEach((list1) => list1.style.color = 'red');
for(let i=0; i<listByClass.length; i++){
    listByClass[i].style.color = 'red'
}

const listByTag = document.getElementsByTagName('li');
for(let i=0; i<listByTag.length; i++){
    listByTag[i].style.color = "blue"
} 