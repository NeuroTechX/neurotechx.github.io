$.getJSON( "../social_media_apis/meetup-count.php", function( countsArray ) {
	$(".meetup").text(countsArray.meetupMembersCount.mtl);
});

