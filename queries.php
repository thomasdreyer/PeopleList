<?php

include 'connec.php';

 $Obj = array();
                         foreach($db -> query(
                                              "SELECT * FROM pdata 
                                               WHERE firstname = '$_POST[searchTerm]'
                                               OR surname = '$_POST[searchTerm]' 
                                               OR email = '$_POST[searchTerm]'
                                               OR birth_date = '$_POST[searchTerm]'
                                               OR cellphone = '$_POST[searchTerm]'
                                               LIMIT 10 
                                               OFFSET '$_POST[dataOffset]'") as $row){
                                                         $Obj[] = array(
                                                                        'name' => $row['firstname'],
                                                                        'surname' =>$row['surname'],
                                                                        'bday' => $row['birth_date'],
                                                                        'cell' =>$row['cellphone'],
                                                                        'email' => $row['email'],
                                                                        'joined' =>$row['date'],
                                                                       );
      
                 }




                    $JSON = json_encode($Obj);
                              echo $JSON


?>