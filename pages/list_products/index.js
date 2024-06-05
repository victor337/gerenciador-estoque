async function getProducts() {

  $.ajax({
    url: 'get_products.php',
    method: 'GET',
    dataType: 'json',
    data: {
      name: 'produto 2',
      description: 'descricao',
      price: '12',
      quantity: 1,
    },
    success: function(response){
      var productsList = response;

      const p = document.createElement("p");
      const textToP = document.createTextNode("Produtos cadastrados");

      p.appendChild(textToP);

      document.body.appendChild(p);

      let ul = document.createElement('ul');

      productsList.forEach(p => {
        let li = document.createElement('li');
        li.appendChild((document.createTextNode(p.name)));
        li.addEventListener('click', function(){
          let href = '../product_details_page.html';
          window.location.href = href;
        }, false);
        ul.appendChild(li);
      });

      document.body.appendChild(ul);  
    }
  });
}


async function addProduct(){
  await $.ajax({
    url: 'add_product.php',
    method: 'POST',
    dataType: 'json',
    data: {
      name: 'produto 2',
      description: 'descricao',
      price: '12',
      quantity: 1,
    }
  });
  getProducts();
}

async function editProduct(){
  await $.ajax({
    url: 'edit_product.php',
    method: 'POST',
    dataType: 'json',
    data: {
      id: id,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    }
  });
  getProducts();
}

async function deleteProduct(id){
  await $.ajax({
    url: 'delete_product.php',
    method: 'POST',
    dataType: 'json',
    data: {
      id: id,
    }
  });
  getProducts();
}






document.getElementById('add-product').onclick = function() {
  addProduct();
}

document.getElementById('edit-product').onclick = function() {
  editProduct();
}

document.getElementById('delete-product').onclick = function() {
  deleteProduct('ojaosjkaosas');
}

document.getElementById('login').onclick = function() {
  login();
}


getProducts();