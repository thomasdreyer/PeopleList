<?php

$name = $_POST['name'];
$surname = $_POST['surname'];
$bday = $_POST['bday'];
$cellphone = $_POST['cellphone'];
$email = $_POST['email'];
$date = date("Y/m/d");

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







?>