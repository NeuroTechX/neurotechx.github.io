<?php
$url = $_SERVER["SCRIPT_NAME"];

$break = Explode('/', $url);

$file = $break[count($break) - 1];

$cachefile = dirname(__FILE__).'/cached-'.substr_replace($file ,"",-4).'.JSON';
$cachetime = 1800; // 30 minutes

// Serve from the cache if it is younger than $cachetime
if (file_exists($cachefile) && time() - $cachetime < filemtime($cachefile)) {
    include($cachefile);
    exit;
}
ob_start(); // Start the output buffer
?>