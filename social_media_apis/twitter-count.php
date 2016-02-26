<?php

  include(dirname(__FILE__, 2) . "/libs/TwitterAPIExchange.php"); //get it from https://github.com/J7mbo/twitter-api-php
  include(dirname(__FILE__) . "/apikeys.php");

  $twitterHandleSuffixes = array('x', 'mtl', 'sf', 'bos', 'to', 'nyc', 'xnews');

  /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
  $settings = array(
      'oauth_access_token' => $twitter_keys_and_tokens["token"],
      'oauth_access_token_secret' => $twitter_keys_and_tokens["token_secret"],
      'consumer_key' => $twitter_keys_and_tokens["key"],
      'consumer_secret' => $twitter_keys_and_tokens["key_secret"]
  );
  $url = 'https://api.twitter.com/1.1/followers/ids.json';
  $requestMethod = 'GET';

  //Get followers count of each twitter account
  foreach ($twitterHandleSuffixes as $suffix) {

    $getfield = '?screen_name=Neurotech' . $suffix;

    $twitter = new TwitterAPIExchange($settings);
    $follow_count = $twitter->setGetfield($getfield)
                 ->buildOauth($url, $requestMethod)
                 ->performRequest();
    $data = json_decode($follow_count, true);

    // Assign the followers count of each twitter account to a unique variable.
    // Ex. the follows count of the NeurotechX account will be assigned to $neurotechx_followers_count
    ${'neurotech' . ($suffix) . '_followers_count'} = count($data['ids']);

  };

?>