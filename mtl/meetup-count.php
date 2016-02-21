<?php
	require_once('../libs/MeetupAPI.php');

	$meetup = new Meetup(array(
	  'key' => ""
	));

	$response = $meetup->getGroups(array(
    'group_urlname' => 'NeuroTechMTL'
	));

	$members_count = $response->results[0]->members;

	echo $members_count;
?>