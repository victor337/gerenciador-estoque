<?php 
    $hostname = 'localhost';
    $dbName = 'gerenciador-estoque-db';
    $dbUser = 'root';
    $dbPass = '';
    
    $mySqlConfig = new mysqli($hostname, $dbUser, $dbPass, $dbName);

    var_export($mySqlConfig, true);