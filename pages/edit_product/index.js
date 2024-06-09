let productId = '';

async function editProduct(){

  let nameProduct = document.getElementById('name-product').value;
  let descProduct = document.getElementById('desc-product').value;
  let priceProduct = document.getElementById('price-product').value;
  let quantityProduct = document.getElementById('quantity-product').value;

  await $.ajax({
    url: 'edit_product.php',
    method: 'POST',
    dataType: 'json',
    data: {
      id: productId,
      name: nameProduct,
      description: descProduct,
      price: priceProduct,
      quantity: quantityProduct,
    },
    success: function(response){

      alert('Produto editado com sucesso');
      window.location.href = '../list_products/index.html';
    },
    error: function(request, error, code){
      alert('Erro ao editar produto');
     
    }
  });
}



async function init(){
  let vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });

  productId = vars.productId;

  $.ajax({
    url: 'get_product.php',
    method: 'POST',
    dataType: 'json',
    data: {
      id: productId,
    },
    success: function(response){
      let product = response[0];

      document.getElementById('name-product').value = product.name;
      document.getElementById('desc-product').value = product.description;
      document.getElementById('price-product').value = product.value;
      document.getElementById('quantity-product').value = product.quantity;
    },
    error: function(){
      alert('Não foi possível buscar o produto');
      window.location.href = '../list_products/index.html';
    }
  });
}

async function deleteProduct(){
  await $.ajax({
    url: 'delete_product.php',
    method: 'POST',
    dataType: 'json',
    data: {
      id: productId,
    },
    success: function(response){
      alert('Produto deletado com sucesso');
      window.location.href = '../list_products/index.html';
    }
  });
}


window.onload = function(){ 
  document.getElementById('save-button').onclick = function(){
    editProduct();
  }

  document.getElementById('delete-button').onclick = function(){
    let value = confirm('Tem certeza que deseja deletar o produto?');

    if(value){
      deleteProduct();
    }
  }
};

init();
