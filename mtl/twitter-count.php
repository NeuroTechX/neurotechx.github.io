<?php
    require_once('../TwitterAPIExchange.php'); //get it from https://github.com/J7mbo/twitter-api-php

    /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
    $settings = array(
        'oauth_access_token' => " ",
        'oauth_access_token_secret' => " ",
        'consumer_key' => " ",
        'consumer_secret' => " "
    );

    $ta_url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
    $getfield = '?screen_name=NeurotechMTL';
    $requestMethod = 'GET';
    $twitter = new TwitterAPIExchange($settings);
    $follow_count=$twitter->setGetfield($getfield)
    ->buildOauth($ta_url, $requestMethod)
    ->performRequest();
    $data = json_decode($follow_count, true);
    $followers_count=$data[0]['user']['followers_count'];
    echo $followers_count;
?>