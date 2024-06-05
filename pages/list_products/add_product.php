<?php

include("../../connection.php");


$name = $_POST['name'];
$description = $_POST['description']; 
$quantity = $_POST['quantity']; 
$price = $_POST['price']; 

$sql = "INSERT INTO products (id, name, description, price, quantity)
VALUES (UUID(), '$name', '$description', '$price', '$quantity')";

$products = $mySqlConfig->query($sql);

echo json_encode('SUCESSO');
