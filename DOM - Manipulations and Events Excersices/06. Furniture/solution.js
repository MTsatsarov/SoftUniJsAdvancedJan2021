function solve() {
  var firstButton = document.getElementsByTagName('button')[0];
  firstButton.addEventListener('click', GetData)
  var secondBtn = document.getElementsByTagName('button')[1].addEventListener('click', Calculate);

  function GetData() {
    var input = document.getElementsByTagName('textarea')[0].value;
    var arr = JSON.parse(input)
    var tbody = document.querySelector('tbody');
    for (let i = 0; i < arr.length; i++) {

      const element = arr[i];
      console.log(element);

      var row = document.createElement('tr');
      var imageTd = document.createElement('td');
      row.appendChild(imageTd);
      var img = document.createElement('img');
      img.setAttribute('src', element.img);
      imageTd.appendChild(img);

      var nameTd = document.createElement('td');
      var nameP = document.createElement('p');
      nameTd.appendChild(nameP);
      nameP.textContent = element.name;
      row.appendChild(nameTd);

      var priceTd = document.createElement('td');
      var priceP = document.createElement('p');
      priceTd.appendChild(priceP);
      priceP.textContent = element.price;
      row.appendChild(priceTd);

      var decorationFactorTd = document.createElement('td');
      var decorationFactorP = document.createElement('p');
      decorationFactorTd.appendChild(decorationFactorP);
      decorationFactorP.textContent = element.decFactor;
      row.appendChild(decorationFactorTd);

      var inputTd = document.createElement('td');
      var input = document.createElement('input');
      inputTd.appendChild(input);
      input.setAttribute('type', 'checkbox');
      row.appendChild(inputTd);
      tbody.appendChild(row);
    }
  }
  function Calculate() {
    var checkedItems = document.querySelectorAll('input[type=checkbox]:checked');
    var names = [];
    var totalPrice = 0;
    var decorationFactor = 0;
    for (const item of checkedItems) {
      names.push(item.parentNode.parentNode.children[1].children[0].textContent);
      totalPrice += Number(item.parentNode.parentNode.children[2].children[0].textContent);
      decorationFactor += Number(item.parentNode.parentNode.children[3].children[0].textContent);
    }

    var textArea = document.getElementsByTagName('textarea')[1];
    textArea.value=`Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decorationFactor/checkedItems.length}`
  }
}