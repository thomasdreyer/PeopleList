<?php

include 'connec.php';


// $stmt = $db -> prepare("SELECT * FROM pdata");
// $Obj = array();
// while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

//      $Obj->name = $row['firstname'];
//     $Obj->surname = $row['surname'];
//     $Obj->bday = $row['birth_date'];
//     $Obj->cell = $row['cellphone'];
//     $Obj->email = $row['email'];
//     $Obj->joined = $row['date'];
// }

$Obj = array();
foreach($db -> query(
    "SELECT * FROM pdata 
    WHERE firstname = '$_POST[searchTerm]'
     OR surname = '$_POST[searchTerm]' 
     OR email = '$_POST[searchTerm]'
     OR birth_date = '$_POST[searchTerm]'
     OR cellphone = '$_POST[searchTerm]'
     ") as $row){
    $Obj[] = array(
        'name' => $row['firstname'],
        'surname' =>$row['surname'],
        'bday' => $row['birth_date'],
        'cell' =>$row['cellphone'],
        'email' => $row['email'],
        'joined' =>$row['date'],
        );
    // $Obj->name = $row['firstname'];
    // $Obj->surname = $row['surname'];
    // $Obj->bday = $row['birth_date'];
    // $Obj->cell = $row['cellphone'];
    // $Obj->email = $row['email'];
    // $Obj->joined = $row['date'];
    
}


$myJSON = json_encode($Obj);
echo $myJSON

?>