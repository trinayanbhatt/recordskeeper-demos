<?php
$curl = curl_init();
$key = $_POST['name'];
$data = $_POST['val'];
$adr = $_POST['addr'];

error_log($adr);
curl_setopt_array($curl, array(
  CURLOPT_PORT => "8378",
  CURLOPT_URL => "http://35.171.226.226:8378",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"method\":\"sendwithdata\",\"params\":[\"16hvv5k8ENZwKcb5VCwCvfALDzzh2swj1QKX4Z\",10,{\"for\":\"root\",\"key\":\"key10189\",\"data\":\"736f6d65206f74686572206461\"}],\"id\":\"curltext\",\"chain_name\":\"recordskeeper-test\"}\n",
  CURLOPT_HTTPHEADER => array(
    "Authorization: Basic cmtycGM6QW54M1M0QzRLdG5DQ3cxRlBrU2FIcFRXZE5EenlLM2tmazZwaVpDclhYZUQ=",
    "Cache-Control: no-cache",
    "Content-Type: application/json",
    "Postman-Token: 107868d0-ae11-d79c-2b20-47d7be5c92b9"
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