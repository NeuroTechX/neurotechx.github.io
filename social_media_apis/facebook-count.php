<?php

include(dirname(__FILE__, 2) . "/vendor/autoload.php");

$members_count_array = array('facebookMembersCount' => array());

$fb = new Facebook\Facebook([
  'app_id' => '',
  'app_secret' => '',
  'default_graph_version' => 'v2.5',
  'default_access_token' => ''
  ]);

// The Facebook Group ID of NeuroTechX is 1607814756147186
$response = $fb->get('/1607814756147186/members?limit=500');

// Manually adding 14 to the count as 14 group members are consistently missing from the API response
$members_count = count($response->getGraphEdge()) + 14;
$members_count_array['facebookMembersCount']['neurotechx'] = $members_count;

echo json_encode($members_count_array);


?>