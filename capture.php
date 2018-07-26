<?php

$name = $_POST['name'];
$nameval = preg_match_all('/[^a-zA-Z]/', $name);
$surname = $_POST['surname'];
$surnameval = preg_match_all('/[^a-zA-Z]/', $surname);
$bday = $_POST['bday'];
$cellphone = $_POST['cellphone'];
$cellphoneval = preg_match_all('/[^0-9]/', $cellphone);
$email = $_POST['email'];
$date = date("Y/m/d");
   
   if( $nameval > 0 || $surnameval > 0 || $cellphoneval > 0)
   {
      
        //echo $name;
     	echo 'error';

      } else {
     
        

include 'connec.php';
try{
$stmt = $db->prepare("INSERT INTO pdata (firstname, surname, birth_date, cellphone, email, date)
                       VALUES(:firstname,:lastname,:bday,:cellphone,:email,:dt)");

$stmt->bindParam(':firstname',$name);
$stmt->bindParam(':lastname',$surname);
$stmt->bindParam(':bday',$bday);
$stmt->bindParam(':cellphone',$cellphone);
$stmt->bindParam(':email',$email);
$stmt->bindParam(':dt',$date);
$stmt->execute();

}
catch(Exception $e){

    echo $e -> getMessage();
}




  
   }





?>