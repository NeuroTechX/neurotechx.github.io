<?php
  include(dirname(__FILE__, 2) . "/libs/TwitterAPIExchange.php"); //get it from https://github.com/J7mbo/twitter-api-php
  include(dirname(__FILE__) . "/apikeys.php");

  $twitterHandleSuffix = array('x', 'mtl', 'sf', 'bos', 'to', 'nyc', 'xnews');

  $keys_and_tokens = $mtl_keys_and_tokens["twitter"];

  /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
  $settings = array(
      'oauth_access_token' => $keys_and_tokens["token"],
      'oauth_access_token_secret' => $keys_and_tokens["token_secret"],
      'consumer_key' => $keys_and_tokens["key"],
      'consumer_secret' => $keys_and_tokens["key_secret"]
  );

  $url = 'https://api.twitter.com/1.1/followers/ids.json';
  $getfield = '?screen_name=NeurotechMTL';
  $requestMethod = 'GET';
  $twitter = new TwitterAPIExchange($settings);
  $follow_count = $twitter->setGetfield($getfield)
               ->buildOauth($url, $requestMethod)
               ->performRequest();
  $data = json_decode($follow_count, true);
  $followers_count= count($data['ids']);
  echo $followers_count;
?>