<?php

include 'connec.php';


$countStmt = $db->query(
                         "SELECT COUNT(*) FROM pdata
                          WHERE firstname = '$_POST[searchTerm]'
                          OR surname = '$_POST[searchTerm]' 
                          OR email = '$_POST[searchTerm]'
                          OR birth_date = '$_POST[searchTerm]'
                          OR cellphone = '$_POST[searchTerm]'
                         ");
  if ($countStmt === false) {
                 // do something to report the error
                }
               $count = 0;
       while ($row = $countStmt->fetch(PDO::FETCH_NUM)) {
                           $count = $row[0];
                    }
               if ($count > 0 && $count <= 10){
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
      
                 }
        }
        else{

   $Obj = array();
                         foreach($db -> query(
                                              "SELECT * FROM pdata 
                                               WHERE firstname = '$_POST[searchTerm]'
                                               OR surname = '$_POST[searchTerm]' 
                                               OR email = '$_POST[searchTerm]'
                                               OR birth_date = '$_POST[searchTerm]'
                                               OR cellphone = '$_POST[searchTerm]'
                                               LIMIT 10 ") as $row){
                                                         $Obj[] = array(
                                                                        'name' => $row['firstname'],
                                                                        'surname' =>$row['surname'],
                                                                        'bday' => $row['birth_date'],
                                                                        'cell' =>$row['cellphone'],
                                                                        'email' => $row['email'],
                                                                        'joined' =>$row['date'],
                                                                       );
      
                 }



        }
                    
                    $data = array($Obj, $count);

                    $JSON = json_encode($data);
                              echo $JSON

?>