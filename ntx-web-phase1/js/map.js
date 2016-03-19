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

        'img/charcoal-pin.png', //'img/pin.png',
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(37,37)
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
                url: 'img/charcoal-pin.png',
                scaledSize: new google.maps.Size(37,37)
            };

            lastSelected.setIcon(newIcon);
        };

        var newIcon = {
            url: 'img/teal-pin.png',
            scaledSize: new google.maps.Size(47,47)
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
                            "<a href='https://"+chapterAcronym+".neurotechx.com' target='_blank' id='home-btn' class='btn btn-circle-small'><span><i class='fa fa-home'></i></span></a>"+

                            "<a href='https://meetup.com/neurotech"+chapterAcronym+"' target='_blank' id='meetup-btn' class='btn btn-circle-small'>"+


                        "<svg height='60px' width='50px' viewBox='0 20 100 100'><g><defs><rect height='100' id='SVGID_1_' width='100'/></defs><path id='meetupNew' fill='#ffffff' d='M46.118,51.323c-0.302,0-0.604-0.024-0.828-0.339c0.067-1.191,0.457-2.082,0.834-2.94   c0.169-0.387,0.339-0.772,0.478-1.187l0.168-0.489l0.14,0.496c0.326,1.151,0.222,3.296-0.284,4.451L46.118,51.323z M83.713,43.804   l-0.15,0.141c-2.571,2.424-3.504,6.54-4.176,10.204c2.146-0.58,3.969-2.562,4.756-4.742c0.479-1.331,0.811-3.353-0.328-5.422   L83.713,43.804z M36.748,50.408c0.135,0.053,0.289,0.115,0.501,0.115l0.107-0.022l0.261-0.128c0.201-0.986,0.138-2.263-0.17-3.504   c-0.79,0.898-1.274,1.946-1.456,3.287l-0.025,0.182l0.403-0.021C36.519,50.315,36.625,50.355,36.748,50.408 M94.999,73.785   c0,1.775-1.438,3.215-3.214,3.215H8.214C6.438,77,5,75.561,5,73.785v-47.57C5,24.439,6.438,23,8.214,23h83.571   c1.775,0,3.214,1.439,3.214,3.215V73.785z M32.029,56.305c-0.891-2.459-1.469-5.244-2.025-7.973   c-0.718-3.505-1.459-7.064-2.715-9.842c-0.149,0.014-0.297,0.152-0.439,0.152c-0.444,0-0.832,0.105-1.218,0.043   C25.267,38.621,24.897,39,24.463,39h-0.124c-0.112,0-0.215-0.441-0.263-0.473c-2.005,2.711-2.694,6.371-3.599,10.082   c-0.501-0.879-0.96-1.781-1.416-2.704c-0.804-1.622-1.635-3.288-2.577-4.623c-0.263-0.022-0.521-0.024-0.767-0.024   c-1.078,0-2.057,0.194-2.977,0.462l-0.048,2.491c-0.101,4.277-0.187,7.971,0.891,11.457c0.201,0.033,0.404,0.05,0.606,0.05   c1.292,0,2.435-0.631,2.932-0.884c0.079-1.094-0.058-1.947-0.198-2.854c-0.074-0.465-0.151-0.933,0.095-1.541   c0.75,0.973,1.408,2.039,2.064,3.104c0.418,0.675,0.836,1.347,1.157,1.927c0.216,0.022,0.42,0.031,0.614,0.031   c0.505,0,0.952-0.062,1.396-0.123c0.463-0.062,0.921-0.121,1.445-0.121l0.298,0.108c0.593-1.318,0.626-3.257,0.656-5.135   c0.028-1.722,0.059-3.5,0.825-4.825c0.835,3.848,1.972,7.586,3.471,11.422c0.528-0.072,1.112-0.253,1.652-0.42   c0.401-0.125,0.765-0.243,1.054-0.243C31.797,56.166,31.925,56.23,32.029,56.305 M42.381,57.109   c-0.288-0.521-0.702-0.764-1.294-0.764c-0.451,0-0.966,0.127-1.463,0.264c-0.507,0.137-1.028,0.268-1.499,0.268   c-0.129,0-0.251-0.031-0.371-0.057c-0.565-0.107-1.022-0.461-1.354-0.953c-0.6-0.893-0.747-2.355-0.209-4.137   C37.06,51.965,38.149,52,39.343,52h0.295c0.305,0,0.585,0.098,0.766,0.172c0.588-2.385,0.271-5.636-0.199-7.506   c-0.365-0.076-0.688-0.209-1.012-0.32c-0.566-0.195-1.095-0.385-1.821-0.385c-0.125,0-0.254-0.006-0.384,0.009   c-2.297,0.308-3.859,3.53-4.215,6.558c-0.33,2.793,0.272,6.147,2.944,7.179c0.551,0.212,1.235,0.317,2.03,0.317   C39.336,58.023,41.181,57.578,42.381,57.109 M51.497,56.43c-0.144-0.479-0.56-0.744-1.178-0.937   c-0.524,0.813-1.34,1.264-2.304,1.264c-1.025,0-2.043-0.521-2.655-1.362c-0.584-0.803-0.727-1.805-0.211-2.924   c0.828,0.168,1.639,0.322,2.393,0.322c0.627,0,1.191-0.1,1.666-0.154c-0.147-1.834,0.066-3.122,0.292-4.484   c0.188-1.138,0.383-2.312,0.424-3.733c-1.046-0.791-2.158-1.195-3.4-1.305c-3.063,2.342-4.485,5.931-4.351,10.944   c0.419,2.217,3.341,3.588,5.809,3.588C49.487,57.648,50.751,57.159,51.497,56.43 M62.109,49.556   c-0.381-0.305-0.703-0.663-1.027-1.027c-0.609-0.684-1.188-1.33-2.126-1.582c-0.194,0.004-0.233,0.146-0.255,0.579   c-0.02,0.348-0.049,0.884-0.58,0.884l-0.365,0.004l0.016-0.127c0.131-1.554,0.017-3.344-0.108-5.328   c-0.172-2.813-0.353-5.444,0.147-7.823C57.191,34.393,56.247,34,54.419,34h-0.067c-0.151,0-0.289-0.469-0.33-0.551   c-0.94,2.895-0.483,6.067-0.041,9.534c0.254,1.978,0.494,3.823,0.201,5.613c-0.361,0-0.729-0.045-1.084-0.073   c-0.315-0.027-0.627-0.06-0.906-0.06c-0.525,0-0.838,0.091-1.027,0.305c-0.212,0.239-0.275,0.648-0.264,1.142   c0.722,0.497,1.972,0.53,3.181,0.561l0.761,0.174c0.032,1.057,0.115,2.064,0.197,3.076c0.123,1.479,0.244,3.008,0.214,4.676   c0.32-0.045,0.608-0.061,0.888-0.078c0.541-0.034,1.053-0.066,1.633-0.135c-0.019-1.181-0.062-2.306-0.104-3.389   c-0.058-1.513-0.112-2.949,0.019-4.501c0.535-0.153,1.185-0.188,1.81-0.222C60.547,50.013,61.633,49.954,62.109,49.556    M73.268,47.677C72.516,47.062,71.584,46,70.521,46h-0.24c-0.115,0-0.211,0.291-0.264,0.238l-0.026,1.109   c-0.071,3.041-0.173,7.255-3.081,8.265c-0.277-1.825-0.352-3.819-0.422-5.604c-0.037-0.951-0.073-1.813-0.04-2.416   c-0.284-0.136-0.544-0.282-0.8-0.438c-0.724-0.434-1.403-0.839-2.502-0.983c-0.439,5.229,0.088,8.692,1.56,10.29   c0.606,0.659,1.387,0.996,2.319,0.996c0.656,0,1.399-0.161,2.139-0.423l0.281-0.433c0.525-0.805,0.869-1.338,1.654-1.935   c0.2-0.358,0.414-0.8,0.631-1.144C72.691,51.982,73.6,50.334,73.268,47.677 M87.311,42.754c-1.604-0.938-2.998-1.39-4.271-1.39   c-1.583,0-2.957,0.712-4.198,2.181c-2.338,2.76-2.825,8.507-3.161,11.4c-0.141,0.061-0.295,0.107-0.451,0.152   c-0.405,0.12-0.787,0.234-0.934,0.424c1.229,1.424,1.471,3.838,1.704,6.171c0.185,1.799,0.368,3.659,0.896,4.924   c0.293,0.063,0.703,0.096,1.256,0.096c0.259,0,0.531-0.008,0.802-0.008c0.457,0,0.907,0.021,1.264,0.129   c-0.851-2.146-1.183-5.054-0.919-9.304c3.469-0.819,6.551-3.28,8.042-6.422C88.238,49.209,88.955,46.207,87.311,42.754'/></g></svg>"+

                            "</span></a>"+
                            "<a href='https://twitter.com/neurotech"+chapterAcronym+"' target='_blank' id='twitter-btn' class='btn btn-circle-small'><span><i class='fa fa-twitter animated-small'></i></span></a>"+
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





        $('.btn').hover(function() {
            console.log('aya');
        });

}
