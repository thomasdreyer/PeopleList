<?php

try{
$db = new PDO('mysql:host=localhost;dbname=capture','*****','******');
//var_dump($db);

}
catch(Exception $e) {

    //echo $e -> getMessage();
      echo 'An Error occured';
}

?>