/**
 * imports from node_modules
*/

import $ from 'jquery';
import Headroom from "headroom.js";



/******************************************************************************/



/**
 * $trigger activating js for css-hamburgers
 * https://jonsuh.com/hamburgers/
 */
$('.hamburger').on('click', function() {
  $(this).toggleClass('is-active');
});



/**
 * $headroom.js
 * http://wicky.nillia.ms/headroom.js/
 */

 var options = {
  // vertical offset in px before element is first unpinned
  offset : 50,
  // or you can specify tolerance individually for up/down scroll
  tolerance : {
    up : 10,
    down : 0
  }
};
// pass options as the second argument to the constructor
// supplied options are merged with defaults

const header = document.querySelector("header");

const headroom = new Headroom(header, options);
headroom.init();



$('a[href*="#"]:not([href="#"])').on('click', function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, 1000);
      return false;
    }
  }
});
