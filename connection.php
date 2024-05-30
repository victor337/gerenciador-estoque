<?php 
    $hostname = 'localhost';
    $dbName = 'gerenciador_estoque';
    $dbUser = 'root';
    $dbPass = '';
    
    $mySqlConfig = new mysqli($hostname, $dbUser, $dbPass, $dbName);

    var_export($mySqlConfig);