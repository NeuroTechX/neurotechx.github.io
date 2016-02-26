<?php
  require_once('../libs/MeetupAPI.php');
  require_once('/apikeys.php');

  $cities = array('MTL', 'TO', 'SF', 'BOS', 'PAR', 'AMS', 'LAX', 'NYC', 'LDN', 'LIMA');
  $totalCount = 0;

  $meetup = new Meetup(array(
    'key' => $meetup_key
  ));


  foreach ($cities as $city) {

    $response = $meetup->getGroups(array(
      'group_urlname' => "NeuroTech{$city}"
    ));

    // Assign the members count of a city's meetup group to a separate variable.
    // For example, the member count of Montreal's meetup group will be $MTL_meetup_count
    ${$city . '_meetup_count'} = $response->results[0]->members;

    $totalCount += $response->results[0]->members;

  }


  // Get members count for the Paris-CogLab-Meetup-Cognitive-Science-Open-Lab group

  $response = $meetup->getGroups(array(
    'group_urlname' => "Paris-CogLab-Meetup-Cognitive-Science-Open-Lab"
  ));

  $Paris_CogLab = $response->results[0]->members;

  $totalCount += $response->results[0]->members;

?>