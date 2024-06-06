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