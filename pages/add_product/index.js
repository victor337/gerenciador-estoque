async function addProduct(){

    let nameProduct = document.getElementById('name-product').value;
    let descProduct = document.getElementById('desc-product').value;
    let priceProduct = document.getElementById('price-product').value;
    let quantityProduct = document.getElementById('quantity-product').value;

    await $.ajax({
        url: 'add_product.php',
        method: 'POST',
        dataType: 'json',
        data: {
            name: nameProduct,
            description: descProduct,
            price: priceProduct,
            quantity: quantityProduct,
        },
        success:  function(response){
            alert('Produto adicionado com sucesso');
            window.location.href = '../list_products/index.html';
        },
        error: function(request, status, error){
            alert('Erro ao adicionar produto');
        }
    });

}



window.onload = function(){ 
    document.getElementById('save-button').onclick = function() {
        addProduct();
    }
};
  


  
