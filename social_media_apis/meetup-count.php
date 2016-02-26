<?php
  require_once('../libs/MeetupAPI.php');
  require_once('/apikeys.php');

  $cities = array('MTL', 'TO', 'SF', 'BOS', 'PAR', 'AMS', 'LAX', 'NYC', 'LDN', 'LIMA');
  $totalCount = 0;

  $meetup = new Meetup(array(
    'key' => $meetup_key
  ));

  $response = $meetup->getGroups(array(
    'group_urlname' => 'NeuroTechMTL'
  ));

  $members_count = $response->results[0]->members;

  echo $members_count;
?>