<?php

// include dirname(__FILE__) . '/cache/top-cache.php';
require_once __DIR__ . '/facebook-php-sdk-v4-5.0.0/src/Facebook/autoload.php';
include dirname(__FILE__) . "/apiKeys.php";

$members_and_likes_array = array('facebookGroupMembersCount' => array(), 'facebookPageLikesCount' => array());

$app_id =	$facebook_keys_and_tokens['app_id'];
$app_secret = $facebook_keys_and_tokens['app_secret'];

$fb = new Facebook\Facebook([
  'app_id' => $app_id,
  'app_secret' => $app_secret,
  'default_graph_version' => 'v2.5',
  'default_access_token' => $app_id . "|" . $app_secret
  ]);

// The Facebook Group ID of NeuroTechX is 1607814756147186
$groupMembersResponse = $fb->get('/1607814756147186/members?limit=500');
$pageLikesResponse =$fb->get('894613010621655?fields=likes');

// Manually adding 14 to the count as 14 group members are consistently missing from the API response
$members_count = count($groupMembersResponse->getGraphEdge()) + 14;

$pageLikesObject = $pageLikesResponse->getGraphObject();
$likes_count = $pageLikesObject['likes'];

$members_and_likes_array['facebookGroupMembersCount']['neurotechx'] = $members_count;
$members_and_likes_array['facebookPageLikesCount']['neurotechx'] = $likes_count;


echo json_encode($members_and_likes_array);

// include dirname(__FILE__) . '/cache/bottom-cache.php';

?>