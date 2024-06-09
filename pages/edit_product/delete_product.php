<?php

include("../../connection.php");

$id = $_POST['id'];

$sql = "DELETE FROM products WHERE id = '$id'";

$products = $mySqlConfig->query($sql);

echo json_encode('SUCESSO');
