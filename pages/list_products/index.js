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
  window.location.href = "../add_product/index.html";
}


getProducts();