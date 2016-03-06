<?php

  // include dirname(__FILE__) . '/cache/top-cache.php';
  include(dirname(__FILE__, 2) . "/libs/TwitterAPIExchange.php"); //get it from https://github.com/J7mbo/twitter-api-php
  include(dirname(__FILE__) . "/apikeys.php");

  $twitterHandleSuffixes = array('x', 'mtl', 'sf', 'bos', 'to', 'nyc', 'xnews');
  $followers_count_array = array('twitterFollowersCount' => array());
  $totalFollowers = 0;

  /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
  $settings = array(
      'oauth_access_token' => $twitter_keys_and_tokens["token"],
      'oauth_access_token_secret' => $twitter_keys_and_tokens["token_secret"],
      'consumer_key' => $twitter_keys_and_tokens["key"],
      'consumer_secret' => $twitter_keys_and_tokens["key_secret"]
  );
  $url = 'https://api.twitter.com/1.1/followers/ids.json';
  $requestMethod = 'GET';

  //Get number of followers of each twitter account and add them to an array
  foreach ($twitterHandleSuffixes as $suffix) {

    $getfield = '?screen_name=Neurotech' . $suffix;

    $twitter = new TwitterAPIExchange($settings);
    $follow_count = $twitter->setGetfield($getfield)
                 ->buildOauth($url, $requestMethod)
                 ->performRequest();
    $data = json_decode($follow_count, true);

    $followers_count = count($data['ids']);
    $totalFollowers += $followers_count;
    $twitter_count_array['twitterFollowersCount']['neurotech' . ucfirst($suffix)] = $followers_count;
    $twitter_count_array['twitterFollowersCount']['total'] = $followers_count;

  };

  // This JSON object will stored in cache
  echo json_encode($twitter_count_array);

  // include dirname(__FILE__) . '/cache/bottom-cache.php';
?>