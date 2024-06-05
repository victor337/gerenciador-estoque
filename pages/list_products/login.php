<?php

include("../../connection.php");

$email = $_POST['email'];
$pass = $_POST['pass'];

$passwordHash = password_hash($pass,  PASSWORD_DEFAULT); 

$sql = "SELECT * FROM users WHERE email = '$email'";

$result = $mySqlConfig->query($sql);

$items = array();
$passHashed = '';

while($row = mysqli_fetch_array($result)) {
    $object = new stdClass();
    $object->email = $row['email'];
    $object->name = $row['name'];
    $object->passHashed = $row['pass'];
    $passHashed = $row['pass'];
    $items[] = $object;
}


if(password_verify($pass, $passHashed)) {
    echo json_encode($items);
} else {
    echo json_encode('no_user');
}



// $email = $array['email'];
// $name = $array['name'];

// echo("{'email': {$email},'name': {$name}}");
