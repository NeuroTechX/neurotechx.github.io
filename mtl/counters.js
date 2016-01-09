
// ----TWITTER ----

//ntMTL's username: neurotechmtl
//  ''    user_id:  2802579095

// Twitter's OAuth keys


//--- MEETUP----

// Ana's Meetup API Key 807711247a6c30141e7357665e35262f




var twitRequest = new XMLHttpRequest();
twitRequest.open("GET", "https://api.twitter.com/1.1/followers/ids.json?stringify_ids=true&screen_name=neurotechMTL&user_id=2802579095");
twitRequest.send();

