$.getJSON( "../social_media_apis/meetup-count.php", function( countsArray ) {
	$(".meetup-count").text(countsArray.meetupMembersCount.mtl);
});

$.getJSON( "../social_media_apis/twitter-count.php", function( countsArray ) {
	$(".twitter-count").text(countsArray.twitterFollowersCount.neurotechMtl);
});

