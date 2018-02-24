<?php
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_PORT => "8378",
  CURLOPT_URL => "http://35.171.226.226:8378",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"method\":\"send\",\"params\":[\"16hvv5k8ENZwKcb5VCwCvfALDzzh2swj1QKX4Z\",50],\"id\":\"curltext\",\"chain_name\":\"recordskeeper-test\"}",
  CURLOPT_HTTPHEADER => array(
    "Authorization: Basic cmtycGM6QW54M1M0QzRLdG5DQ3cxRlBrU2FIcFRXZE5EenlLM2tmazZwaVpDclhYZUQ=",
    "Cache-Control: no-cache",
    "Content-Type: application/json",
    "Postman-Token: 2155ab9d-9150-30fb-2093-37a6fd6ebd78"
  ),
));
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}