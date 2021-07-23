function addItem() {
    var currItem = document.getElementById('newItemText');
    var itemToAdd = currItem.value;

    var itemList = document.getElementById('items');

    var li = document.createElement('li');
    li.textContent = itemToAdd;

    var a = document.createElement('a');
    a.textContent = '[Delete]';
    a.href = '#';
    currItem.value='';
    a.addEventListener('click', (ev) => {
       ev.target.parentNode.remove();
    })
    li.appendChild(a);

    itemList.appendChild(li);

}