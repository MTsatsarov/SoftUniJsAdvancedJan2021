function addItem() {
    const itemToAdd = document.getElementById('newItemText').value;

    var ul = document.getElementById('items');
    var li = document.createElement('li');
    li.textContent=itemToAdd;

    ul.appendChild(li);
}