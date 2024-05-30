import product from '../../models/product.js';

async function generateList() {
  const xhttpr = new XMLHttpRequest();
   xhttpr.open('GET', 'scripts.php', true);

   xhttpr.send();

  xhttpr.onload = () => {


    var productsList = JSON.parse(xhttpr.responseText);

    var products = [];

    productsList.forEach(p => {
      let newProduct = product(p.name, p.description, p.value, p.quantity);
      products.push(newProduct);
    });
  
    let ul = document.createElement('ul');

    products.forEach(p => {
      let li = document.createElement('li');
      li.appendChild((document.createTextNode(p.name)));
      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  };


}

generateList();