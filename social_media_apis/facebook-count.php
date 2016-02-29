<?php

include(dirname(__FILE__, 2) . "/vendor/autoload.php");

$fb = new Facebook\Facebook([
  'app_id' => '',
  'app_secret' => '',
  'default_graph_version' => 'v2.5',
  'default_access_token' => ''
  ]);

// The Facebook Group ID of NeuroTechX is 1607814756147186
$response = $fb->get('/1607814756147186/members?limit=500');

$object = $response->getGraphEdge();
$members_count = count($object);

?>