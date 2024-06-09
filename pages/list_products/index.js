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


      if(productsList.length == 0){
        const p = document.createElement("p");
        const textToP = document.createTextNode("Não existe nenhum produto cadastrado");
        p.appendChild(textToP);

        document.body.appendChild(p);
      } else {
        productsList.forEach(p => {
          let div = document.createElement('div');
          div.className = 'product';

          let title = document.createElement('h3');
          title.innerText = p.name;

          let desc = document.createElement('label');
          desc.innerText = p.description;

          let price = document.createElement('p');
          price.className = 'product-price';
          price.innerText = 'R$' + p.value;

          div.appendChild(title);
          div.appendChild(desc);
          div.appendChild(price);


          div.addEventListener('click', function(){
            let href = '../edit_product/index.html?productId=' + p.id;
            window.location.href = href;
          }, false);
          document.body.appendChild(div);
        });
  
      }

      
    }
  });
}

document.getElementById('add-product').onclick = function() {
  window.location.href = "../add_product/index.html";
}


getProducts();