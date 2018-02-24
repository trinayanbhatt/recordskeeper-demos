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
  CURLOPT_POSTFIELDS => "{\"method\":\"createrawsendfrom\",\"params\":[\"1GLnTSPXVT5v3auGy1JNoj1LhYgLz2BLy1vZna\",{\"18SXoC6CkLHqgLzx8hZoQzAixkboEUU4aYKY4J\":0},[{\"for\":\"root\",\"key\":\"k1\",\"data\":\"736f6d65206f746865722064617461\"}]],\"id\":\"curltext\",\"chain_name\":\"recordskeeper-test\"}",
  CURLOPT_HTTPHEADER => array(
    "Authorization: Basic cmtycGM6QW54M1M0QzRLdG5DQ3cxRlBrU2FIcFRXZE5EenlLM2tmazZwaVpDclhYZUQ=",
    "Cache-Control: no-cache",
    "Content-Type: application/json",
    "Postman-Token: a04df090-2ea9-9b78-e373-c71b54d8b41b"
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