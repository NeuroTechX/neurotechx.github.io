<?php

include dirname(__FILE__) . '/cache/top-cache.php';
include(dirname(__FILE__) . "/apikeys.php");

$url = 'https://slack.com/api/users.list?token=' . $slack_token;

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$curl_response = curl_exec($curl);
if ($curl_response === false) {
    $info = curl_getinfo($curl);
    curl_close($curl);
    die('error occured during curl exec. Additioanl info: ' . var_export($info));
}
curl_close($curl);
$decoded = json_decode($curl_response);
if (isset($decoded->response->status) && $decoded->response->status == 'ERROR') {
    die('error occured: ' . $decoded->response->errormessage);
}

$members_count_array = array('slackMembersCount' => array());
$members_count_array['slackMembersCount'] = count($decoded->members);

echo json_encode($members_count_array);

include dirname(__FILE__) . '/cache/bottom-cache.php';

?>