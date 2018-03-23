<?php

    $net = $_POST['net'];
    
    if ($net == 'TestNetwork'){
    $config = include('config-testnet.php');}
    else {
      $config = include('config-mainnet.php');
    }
$madmimiUser = $config['madmimi_user'];
$madmimiKey  = $config['madmimi_key'];


  // record lead in madmimi
    $name = $_POST['name'];
    $email = $_POST['email'];




   $words = explode(" ", $name);
   if (count($words) == 1) {
     $firstName = $words[0];
     $lastName = "";
   }
   else {
     $lastName = $words[count($words)-1];
     array_splice( $words, -1 );
     implode( " ", $words );
     $firstName = implode( " ", $words );
   }

    $madmimiUrl = $config["madmimi_demo_list"] . "?email=".$email;
 

     postDetailsToMadmimi($madmimiUrl, $firstName, $lastName);





function postDetailsToMadmimi($url, $firstName, $lastName){
    
    
        $ch = curl_init();
        $data = "api_key=".$GLOBALS["madmimiKey"]."&username=".$GLOBALS["madmimiUser"]."&first_name=".$firstName."&last_name=".$lastName;
        //error_log("data: $data madmimi url " . $url);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);// set post data to true
        curl_setopt($ch, CURLOPT_POSTFIELDS,$data);   // post data
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        error_log($result);
        $result_array = json_decode($result);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if($httpCode == 200){
            curl_close($ch);
        return $result_array;
           // echo $result;
        }
        else
       {    
           error_log("Could not post to Mad Mimi.");
            return false;
       } 
        
   } 

    ?>