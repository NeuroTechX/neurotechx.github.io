<?php

  error_reporting(0); //hide all errors

  include(dirname(__FILE__) . "/cache/top-cache.php");
  include(dirname(__FILE__, 2) . "/libs/MeetupAPI.php");
  include(dirname(__FILE__) . "/apikeys.php");

  $cities = array('mtl', 'to', 'sf', 'bos', 'par', 'ams', 'lax', 'nyc', 'ldn', 'lima');
  $totalCount = 0;

  $meetup = new Meetup(array(
    'key' => $meetup_key
  ));

  $members_count_array = array('meetupMembersCount' => array());

  //Get members count of each meetup group in the $cities array
  foreach ($cities as $city) {

    $response = $meetup->getGroups(array(
      'group_urlname' => "NeuroTech{$city}"
    ));

    $membersCount = $response->results[0]->members;

    // Assign the members count of a city's meetup group to a unique variable.
    // Ex. the members count of Montreal's meetup group will be assigned to $mtl_meetup_count
    ${($city) . '_meetup_count'} = $membersCount;

    $totalCount += $membersCount;

  };


  // Get members count for the Paris-CogLab-Meetup-Cognitive-Science-Open-Lab group

  $response = $meetup->getGroups(array(
    'group_urlname' => "Paris-CogLab-Meetup-Cognitive-Science-Open-Lab"
  ));

  $membersCount = $response->results[0]->members;

  $Paris_CogLab = $membersCount;

  $totalCount += $membersCount;

  include(dirname(__FILE__) . "/cache/bottom-cache.php");

?>