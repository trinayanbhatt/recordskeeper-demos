<?php
$curl = curl_init();
$key = $_POST['key'];
curl_setopt_array($curl, array(
  CURLOPT_PORT => "8378",
  CURLOPT_URL => "http://35.171.226.226:8378",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"method\":\"liststreamkeyitems\",\"params\":[\"root\", \"$key\"],\"id\":\"curltext\",\"chain_name\":\"recordskeeper-test\"}",
  CURLOPT_HTTPHEADER => array(
    "Authorization: Basic cmtycGM6QW54M1M0QzRLdG5DQ3cxRlBrU2FIcFRXZE5EenlLM2tmazZwaVpDclhYZUQ=",
    "Cache-Control: no-cache",
    "Content-Type: application/json",
    "Postman-Token: d17567af-befe-ff2b-4892-d757e8870b70"
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