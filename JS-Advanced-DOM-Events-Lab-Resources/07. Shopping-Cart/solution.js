function solve() {
  var totalPrice = 0;
  var productsArr = [];
  var textAreaToFill = document.querySelector('textarea')
  Array.from(document.querySelectorAll('.add-product')).forEach(x => {
    x.addEventListener("click", addProduct)
    document.querySelector('.checkout').addEventListener('click', onClick)

  });
  function addProduct(ev) {
    const product = ev.target.parentNode.parentNode.children[1];
    const title = product.children[0].textContent;
    const price = Number(product.parentNode.children[3].textContent).toFixed(2);
    totalPrice += price;
    if (!productsArr.includes(title)) {
      productsArr.push(title);
    }
    textAreaToFill.textContent += `Added ${title} for ${price} to the cart.\n`
  }

  function onClick() {
    textAreaToFill.textContent += `You bought ${productsArr.join(', ')} for ${totalPrice.toFixed(2)}.`; 
  }
}