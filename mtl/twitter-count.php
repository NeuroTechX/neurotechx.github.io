<?php
$tw = get_option("twitterfollowerscount");
if ($tw['lastcheck'] < ( mktime() - 3600 ) )
{
$xml=file_get_contents('https://api.twitter.com/1.1/users/show.json?screen_name=neurotechmtl');
if (preg_match('/followers_count>(.*)</',$xml,$match)!=0) {
$tw['count'] = $match[1];
}
$tw['lastcheck'] = mktime();
update_option("twitterfollowerscount",$tw);
}
echo $tw['count'];
?>