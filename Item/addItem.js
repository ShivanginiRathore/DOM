const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup',filterItems);

function addItem(e){
    // console.log(1);
    e.preventDefault();
    const input = document.getElementById('item').value;
    const desc = document.getElementById('itemDesc').value;
    
    const newLi = document.createElement('li');
    newLi.className = 'list-group-item';

    // CODE BY YOUTUBER
    newLi.appendChild(document.createTextNode(input));
    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));
    newLi.appendChild(delBtn);

    // ADD EDIT BUTTON
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right ';
    editBtn.appendChild(document.createTextNode('Edit'));
    newLi.appendChild(editBtn);

    // ADD DESCRIPTION
    newLi.appendChild(document.createTextNode(` ${desc}`));

    itemList.appendChild(newLi);

    // CODE BY ME
    // newLi.innerText = input;
    // itemList.append(newLi);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);        }
    }
}

function filterItems(e){
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var desc = item.lastChild.textContent;
        console.log(itemName)
        if(itemName.toLowerCase().indexOf(text) != -1 || desc.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })


    // My Code

    // for(let i=0; i<items.length; i++){
    //     var itemName = items[0].firstChild.textContent;

    //     console.log('Item from list is -> '+itemName+': Text is ->'+text);
    //     if(itemName.toLowerCase().indexOf(text) != -1){
    //         items[0].style.display = 'block';
    //     } else{
    //         items[0].style.display = 'none';
    //     }
        
    // }



}