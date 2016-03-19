// Google Maps Scripts
// When the window has finished loading create our google map below
var map;
var mapZoom;

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, "resize", function() {
     var center = map.getCenter();
     google.maps.event.trigger(map, "resize");
     map.setCenter(center);

     setMapZoom();
     map.setZoom(mapZoom);
});

function setMapZoom(){
    if($(window).width() > 1260){
        mapZoom = 3;
    }else{
        mapZoom = 2;
    };
};

function initialize() {

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    setMapZoom();
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: mapZoom,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(27, -15),  // Centered on Atlantic Ocean

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        //styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]
        //styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"off"},{"hue":"#ff0000"},{"saturation":"94"},{"lightness":"88"},{"weight":"3.01"},{"invert_lightness":true}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"}]}]
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#d6d7d8"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"}]}]
        //styles: [{"featureType":"all","elementType":"geometry","stylers":[{"gamma":"0.82"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"gamma":"1.21"}]},{"featureType":"all","elementType":"labels","stylers":[{"lightness":"-60"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"gamma":"5.37"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#419d8c"},{"lightness":"-39"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"saturation":"0"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#42738d"},{"gamma":"5.37"}]}]
        //styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]

    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);


    // Custom Map Marker Icon
    var image = new google.maps.MarkerImage(

        'img/blue-pin.png', //'img/pin.png',
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(28,37)
    );

    var neuroTechMTL = new google.maps.Marker({
        position: new google.maps.LatLng(45.5016, -73.5672),
        map: map,
        icon: image,
        title: 'NeuroTechMTL',
        animation: google.maps.Animation.DROP
    });

    var neuroTechTO = new google.maps.Marker({
        position: new google.maps.LatLng(43.7000, -79.4000),
        map: map,
        icon: image,
        title: 'NeuroTechTO',
        animation: google.maps.Animation.DROP
    });

    var neuroTechBOS = new google.maps.Marker({
        position: new google.maps.LatLng(42.360082, -71.058880),
        map: map,
        icon: image,
        title: 'NeuroTechBOS',
        animation: google.maps.Animation.DROP
    });

    var neuroTechNYC = new google.maps.Marker({
        position: new google.maps.LatLng(40.7127, -74.0059),
        map: map,
        icon: image,
        title: 'NeuroTechNYC',
        animation: google.maps.Animation.DROP
    });

    var neuroTechSF = new google.maps.Marker({
        position: new google.maps.LatLng(37.7833, -122.4167),
        map: map,
        icon: image,
        title: 'NeuroTechSF',
        animation: google.maps.Animation.DROP
    });

    var neuroTechLAX = new google.maps.Marker({
        position: new google.maps.LatLng(34.052234, -118.243685),
        map: map,
        icon: image,
        title: 'NeuroTechLAX',
        animation: google.maps.Animation.DROP
    });

    var neuroTechAMS = new google.maps.Marker({
        position: new google.maps.LatLng(52.370216, 4.895168),
        map: map,
        icon: image,
        title: 'NeuroTechAMS',
        animation: google.maps.Animation.DROP
    });

    var neuroTechPAR = new google.maps.Marker({
        position: new google.maps.LatLng(48.8566, 2.3522),
        map: map,
        icon: image,
        title: 'NeuroTechPAR',
        animation: google.maps.Animation.DROP
    });

    var neuroTechLDN = new google.maps.Marker({
        position: new google.maps.LatLng(51.5073, -0.1277),
        map: map,
        icon: image,
        title: 'NeuroTechLDN',
        animation: google.maps.Animation.DROP
    });

    var neuroTechBCN = new google.maps.Marker({
        position: new google.maps.LatLng(41.385064, 2.173403),
        map: map,
        icon: image,
        title: 'NeuroTechBCN',
        animation: google.maps.Animation.DROP
    });

    var neuroTechTLV = new google.maps.Marker({
        position: new google.maps.LatLng(32.0667, 34.8000),
        map: map,
        icon: image,
        title: 'NeuroTechTLV',
        animation: google.maps.Animation.DROP
    });

    var neuroTechLIMA = new google.maps.Marker({
        position: new google.maps.LatLng(-12.0463, -77.0427),
        map: map,
        icon: image,
        title: 'NeuroTechLIMA',
        animation: google.maps.Animation.DROP
    });


    /////////////////////////// Chapter Details Cards /////////////////////////////////

    $('#chapter-details').hide();

    var lastSelected;

    var resizeMarkers = function(chapterName){
        var chapterName = chapterName;

        if(lastSelected){
            var newIcon = {
                url: 'img/blue-pin.png',
                scaledSize: new google.maps.Size(28,37)
            };

            lastSelected.setIcon(newIcon);
        };

        var newIcon = {
            url: 'img/blue-pin.png',
            scaledSize: new google.maps.Size(38,47)
        };

        chapterName.setIcon(newIcon);
        lastSelected = chapterName;
    }

    // Content and Transitions of Details Cards

    var cardAndTransitionFactory = function(chapterAcronym){

        var cardAndTransition = function() {
                $('#chapter-details').hide( "drop", {direction: "left", easing: "easeInQuart" }, 750, function() {
                    $('#chapter-details-container').empty().append(
                        "<div id='chapter-details'>"+
                            "<h2>NeuroTech"+chapterAcronym.toUpperCase()+"</h2>"+
                            "<a href='https://"+chapterAcronym+".neurotechx.com' target='_blank' class='btn btn-circle-small'><span>Website</span></a>"+
                            "<a href='https://meetup.com/neurotech"+chapterAcronym+"' target='_blank' class='btn btn-circle-small'><span>Meetup</span></a>"+
                            "<a href='https://twitter.com/neurotech"+chapterAcronym+"' target='_blank' class='btn btn-circle-small'><span>Twitter</span></a>"+
                            "<img class='img-responsive' src='img/whatwedo/ntx_edu.jpg'>"+
                        "</div>"
                    );

                    $('#chapter-details').hide().show("drop", {direction: "right"}, 750);
                });

                var mapMarker = eval('neuroTech' + chapterAcronym.toUpperCase());
                resizeMarkers(mapMarker);
         };

         return cardAndTransition;
    }



    var mtlCard = cardAndTransitionFactory('mtl');
    var toCard = cardAndTransitionFactory('to');
    var bosCard = cardAndTransitionFactory('bos');
    var nycCard = cardAndTransitionFactory('nyc');
    var sfCard = cardAndTransitionFactory('sf');
    var laxCard = cardAndTransitionFactory('lax');
    var amsCard = cardAndTransitionFactory('ams');
    var parCard = cardAndTransitionFactory('par');
    var ldnCard = cardAndTransitionFactory('ldn');
    var bcnCard = cardAndTransitionFactory('bcn');
    var tlvCard = cardAndTransitionFactory('tlv');
    var limaCard = cardAndTransitionFactory('lima');





    var chapterAcronyms = ['MTL', 'TO', 'BOS', 'NYC', 'SF', 'LAX', 'AMS', 'PAR', 'LDN', 'BCN', 'TLV', 'LIMA']

    $.each(chapterAcronyms, function( i, acronym ) {
        google.maps.event.addListener(eval('neuroTech' + acronym), 'click', function(){
            clearInterval(chapterInterval);

            var chapterCard = eval(acronym.toLowerCase()+'Card');
            chapterCard();
        });
    });


    var chapterInterval = window.setInterval(displayNextDetailsCard, 5000);
    var chapterDetailsCards = [mtlCard, toCard, bosCard, nycCard, sfCard, laxCard, amsCard, parCard, ldnCard, bcnCard, tlvCard, limaCard];

    var i = 0;
    function displayNextDetailsCard() {
        if (i >= chapterDetailsCards.length) {i = 0};
        chapterDetailsCards[i]();
        i++;
    }

}
