<?php

include("../../connection.php");

$id = $_POST['id'];

$products = $mySqlConfig->query("SELECT * from products WHERE id = '$id' ");

$items = array();


while($row = mysqli_fetch_array($products)) {
    $object = new stdClass();
    $object->id = $row['id'];
    $object->name = $row['name'];
    $object->value = $row['price'];
    $object->quantity = $row['quantity'];
    $object->description = $row['description'];
    $object->updatedAt = $row['updatedAt'];
    $items[] = $object;
}


echo json_encode($items);
