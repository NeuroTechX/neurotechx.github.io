<?php

include(dirname(__FILE__, 2) . "/vendor/autoload.php");
include(dirname(__FILE__) . "/apikeys.php");

$members_count_array = array('facebookMembersCount' => array());

$app_id =	$facebook_keys_and_tokens['app_id'];
$app_secret = $facebook_keys_and_tokens['app_secret'];

$fb = new Facebook\Facebook([
  'app_id' => $app_id,
  'app_secret' => $app_secret,
  'default_graph_version' => 'v2.5',
  'default_access_token' => $app_id . "|" . $app_secret
  ]);

// The Facebook Group ID of NeuroTechX is 1607814756147186
$response = $fb->get('/1607814756147186/members?limit=500');

// Manually adding 14 to the count as 14 group members are consistently missing from the API response
$members_count = count($response->getGraphEdge()) + 14;
$members_count_array['facebookMembersCount']['neurotechx'] = $members_count;

echo json_encode($members_count_array);

?>