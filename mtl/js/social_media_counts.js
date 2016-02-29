$.getJSON( "../social_media_apis/meetup-count.php", function( countsArray ) {
	$(".meetup-count").text(countsArray.meetupMembersCount.mtl);
});

$.getJSON( "../social_media_apis/twitter-count.php", function( countsArray ) {
	$(".twitter-count").text(countsArray.twitterFollowersCount.neurotechMtl);
});

// Add a "facebook-count" class in index.html to display the members count of the NeuroTechX facebook group
$.getJSON( "../social_media_apis/facebook-count.php", function( countsArray ) {
	$(".facebook-count").text(countsArray.facebookMembersCount.neurotechx);
});
