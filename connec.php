<?php

try{
$db = new PDO('pgsql:host=localhost;dbname=capture','Thomas','12#tabiso');
//var_dump($db);

}
catch(Exception $e) {

    //echo $e -> getMessage();
      echo 'An Error occured';
}

?>