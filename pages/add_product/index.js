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
            price: parseFloat(priceProduct.replace(',', '.')),
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

function cleanData(){
    document.getElementById('name-product').value = '';
    document.getElementById('desc-product').value = '';
    document.getElementById('price-product').value = '';
    document.getElementById('quantity-product').value = '';
}

function validateForm(){
    let nameProduct = document.getElementById('name-product').value;
    let descProduct = document.getElementById('desc-product').value;
    let priceProduct = document.getElementById('price-product').value;
    let quantityProduct = document.getElementById('quantity-product').value;

    if(nameProduct.length == 0){
        return 'Preencha o nome do produto';
    } else if(descProduct.length == 0){
        return 'Preencha a descrição do produto';
    } else if(priceProduct.length == 0){
        return 'Preencha o preço do produto';
    } else if(quantityProduct.length == 0){
        return 'Preencha a quantidade do produto';
    }

    if(parseFloat(priceProduct.replace(',', '.'))){
        
    } else {
        return 'Preencha um preço válido!';
    }

    if(parseInt(quantityProduct)){
        
    } else {
        return 'Preencha uma quantidade válida!';
    }

    return null;
    

}


window.onload = function(){ 
    document.getElementById('save-button').onclick = function() {
        let formMessage = validateForm();
        if(formMessage != null){
            alert(formMessage);
        } else {
            addProduct();
        }
        
    }

    document.getElementById('clean-button').onclick = function() {
        cleanData();
    }
};
  


  
