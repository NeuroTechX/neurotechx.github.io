<?php
$url = $_SERVER["SCRIPT_NAME"];

$break = Explode('/', $url);

$file = $break[count($break) - 1];

$cachefile = dirname(__FILE__).'/cached-'.substr_replace($file ,"",-4).'.JSON';

//Twitter API Request limits: 15 calls every 15 minutes
$cachetime = 10800; // 3 hours

// Serve from the cache if it is younger than $cachetime
if (file_exists($cachefile) && time() - $cachetime < filemtime($cachefile)) {
    include($cachefile);
    exit;
}
ob_start(); // Start the output buffer
?>