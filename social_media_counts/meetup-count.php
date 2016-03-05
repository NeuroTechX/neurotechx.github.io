<?php

  // include dirname(__FILE__) . '/cache/top-cache.php';
  include(dirname(__FILE__, 2) . "/libs/MeetupAPI.php");
  include(dirname(__FILE__) . "/apikeys.php");

  $cities = array('MTL', 'TO', 'SF', 'BOS', 'PAR', 'AMS', 'LAX', 'NYC', 'LDN', 'LIMA');
  $totalMembers = 0;
  $totalEvents = 0;

  $meetup = new Meetup(array(
      'key' => $meetup_key
  ));

  $members_and_events_array = array('meetupMembersCount' => array(), 'meetupEventsCount' => array());

  foreach ($cities as $city) {

    $membersResponse = $meetup->getGroup(array(
      'urlname' => "NeuroTech{$city}"
    ));

    $eventsResponse = $meetup->getGroupEvents(array(
      'urlname' => "NeuroTech{$city}",
      'status' => "upcoming,past"
    ));

    // Assign the members count of a city's meetup group to a separate variable.
    // For example, the member count of Montreal's meetup group will be $MTL_members_count
    $members_and_events_array['meetupMembersCount'][$city] = $membersResponse->members;
    $members_and_events_array['meetupEventsCount'][$city] = count($eventsResponse);

    $totalMembers += $membersResponse->members;
    $totalEvents += count($eventsResponse);
  }


  // Get members count for the Paris-CogLab-Meetup-Cognitive-Science-Open-Lab group
  $ParisCogLab = "Paris-CogLab-Meetup-Cognitive-Science-Open-Lab";

  $membersResponse = $meetup->getGroup(array(
    'urlname' => $ParisCogLab
  ));

  $eventsResponse = $meetup->getGroupEvents(array(
    'urlname' => $ParisCogLab,
    'status' => "upcoming,past"
  ));

  $members_and_events_array['meetupMembersCount']['ParisCogLab'] = $membersResponse->members;
  $members_and_events_array['meetupEventsCount']['ParisCogLab'] = count($eventsResponse);

  $totalMembers += $membersResponse->members;
  $totalEvents += count($eventsResponse);

  $members_and_events_array['meetupMembersCount']['total'] = $totalMembers;
  $members_and_events_array['meetupEventsCount']['total'] = $totalEvents;

  echo json_encode($members_and_events_array);
  // include dirname(__FILE__) . '/cache/bottom-cache.php';

?>