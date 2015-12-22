<?php
    require_once('TwitterAPIExchange.php'); //get it from https://github.com/J7mbo/twitter-api-php

    /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
    $settings = array(
        'oauth_access_token' => "2411112222-Uu1lAaJUIf5QdGvipgRXX3XkVSWjUdiNpnfBswZ",
        'oauth_access_token_secret' => "dQlWnGVgOgcfd8z02lUfAveyOvkIQHpvTyeaF1ZpsPGve",
        'consumer_key' => "ZXfx4IgnYLp9aMfCEQGIPzsNQ",
        'consumer_secret' => "ztmjJWI1owuYmdhBfCKdkyejxGW5MfCDKuFOOXfRvmAy6pIJ3Y"
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