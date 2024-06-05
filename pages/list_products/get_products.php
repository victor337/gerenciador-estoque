<?php

include("../../connection.php");

$products = $mySqlConfig->query("SELECT * from products");

$items = array();


while($row = mysqli_fetch_array($products)) {
    $object = new stdClass();
    $object->id = $row['id'];
    $object->name = $row['name'];
    $object->value = $row['price'];
    $object->quantity = $row['quantity'];
    $object->description = $row['description'];
    $items[] = $object;
}


echo json_encode($items);
