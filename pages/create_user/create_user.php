<?php 

include("../../connection.php");

$name = $_POST['name'];
$email = $_POST['email'];
$pass = $_POST['pass'];

$passwordHash = password_hash($pass,  PASSWORD_DEFAULT); 


$sql = "INSERT INTO users (name, email, pass)
VALUES ('$name', '$email', '$passwordHash')";

$mySqlConfig->query($sql);

echo json_encode('SUCESSO');