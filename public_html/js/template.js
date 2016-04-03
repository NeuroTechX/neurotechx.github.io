/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

/*jslint browser: true*/
/*global $, jQuery, alert, google, init*/
/*jshint strict: true */



//jQuery to hide menu on load
//$(document).ready(function () {
  //  "use strict";
    // hide .navbar first
//  $(".navbar").hide();

//});

// jQuery to unhide + collapse the navbar on scroll
$(window).scroll(function () {
    "use strict";
    if ($(".navbar").offset().top > 50) {
        //fade-in unhide
        //$(".navbar").fadeIn();
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        //fade-out hide
        //$(".navbar").fadeOut();
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    "use strict";
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    "use strict";
    $('.navbar-toggle:visible').click();
});