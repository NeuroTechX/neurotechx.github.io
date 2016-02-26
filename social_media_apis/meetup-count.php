<?php
  require_once('../libs/MeetupAPI.php');
  require_once('/apikeys.php');

  $meetup = new Meetup(array(
    'key' => $mtl_keys_and_tokens["meetup"]['key']
  ));

  $response = $meetup->getGroups(array(
    'group_urlname' => 'NeuroTechMTL'
  ));

  $members_count = $response->results[0]->members;

  echo $members_count;
?>