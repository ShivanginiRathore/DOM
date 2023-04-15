const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

function addItem(e){
    // console.log(1);
    e.preventDefault();
    const input = document.getElementById('item').value;
    
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