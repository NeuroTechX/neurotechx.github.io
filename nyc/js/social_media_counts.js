// Add "meetup-count", "twitter-count" and "facebook-count" as classes in index.html to display the counts

$.getJSON( "../social_media_apis/meetup-count.php", function( countsArray ) {
	$(".meetup-count").text(countsArray.meetupMembersCount.nyc);
});

$.getJSON( "../social_media_apis/twitter-count.php", function( countsArray ) {
	$(".twitter-count").text(countsArray.twitterFollowersCount.neurotechNyc);
});

$.getJSON( "../social_media_apis/facebook-count.php", function( countsArray ) {
	$(".facebook-count").text(countsArray.facebookMembersCount.neurotechx);
});
