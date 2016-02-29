// Add "meetup-count", "twitter-count" and "facebook-count" as classes in index.html to display the counts

$.getJSON( "../social_media_apis/meetup-count.php", function( countsArray ) {
	$(".meetup-count").text(countsArray.meetupMembersCount.to);
});

$.getJSON( "../social_media_apis/twitter-count.php", function( countsArray ) {
	$(".twitter-count").text(countsArray.twitterFollowersCount.neurotechTo);
});

$.getJSON( "../social_media_apis/facebook-count.php", function( countsArray ) {
	$(".facebook-count").text(countsArray.facebookMembersCount.neurotechx);
});