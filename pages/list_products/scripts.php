<?php

$hostname = 'localhost';
$dbName = 'gerenciador_estoque';
$dbUser = 'root';
$dbPass = '';

$mySqlConfig = new mysqli($hostname, $dbUser, $dbPass, $dbName);

$products = $mySqlConfig->query("SELECT * from products");

$items = array();



while($row = mysqli_fetch_array($products)) {
    $object = new stdClass();
    $object->name = $row['name'];
    $object->value = $row['valueItem'];
    $object->quantity = $row['quantity'];
    $object->description = $row['description'];
    $items[] = $object;
}


echo json_encode($items);
