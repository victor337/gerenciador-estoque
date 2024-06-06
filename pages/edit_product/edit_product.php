<?php

include("../../connection.php");

$id = $_POST['id'];
$name = $_POST['name'];
$description = $_POST['description']; 
$quantity = $_POST['quantity']; 
$price = $_POST['price']; 

$sql = 
"UPDATE products SET 
    name = '$name',
    description = '$description',
    price = '$price',
    quantity = '$quantity' 
WHERE id = '$id';
";

$products = $mySqlConfig->query($sql);

echo json_encode('SUCESSO');
