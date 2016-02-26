<?php
  include(dirname(__FILE__, 2) . "/libs/MeetupAPI.php");
  include(dirname(__FILE__) . "/apikeys.php");

  $cities = array('MTL', 'TO', 'SF', 'BOS', 'PAR', 'AMS', 'LAX', 'NYC', 'LDN', 'LIMA');
  $totalCount = 0;

  $meetup = new Meetup(array(
    'key' => $meetup_key
  ));


  foreach ($cities as $city) {

    $response = $meetup->getGroups(array(
      'group_urlname' => "NeuroTech{$city}"
    ));

    $membersCount = $response->results[0]->members;


    if (is_int($membersCount)){

      // Assign the members count of a city's meetup group to a unique variable.
      // ex. the member count of Montreal's meetup group will be $MTL_meetup_count
      ${$city . '_meetup_count'} = $membersCount;
      $totalCount += $membersCount;

    } else {

      // Assign the variable to any empty string if $membersCount is not an integer. This will prevent an error message from displaying on the site
      ${$city . '_meetup_count'} = "";

    };

  }


  // Get members count for the Paris-CogLab-Meetup-Cognitive-Science-Open-Lab group

  $response = $meetup->getGroups(array(
    'group_urlname' => "Paris-CogLab-Meetup-Cognitive-Science-Open-Lab"
  ));

  $Paris_CogLab = $response->results[0]->members;

  $totalCount += $response->results[0]->members;

?>