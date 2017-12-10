import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

//import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

// Developer Tools/Scripts
// Note: make sure to place the Dev Tools script after jQuery, but before Foundation
// This is so the code modifications load before Foundation converts them

// this fixes the mega nav issue where it won't close easily on mobile
$( '#giantMenu button' ).on( 'click', function() {
	$( '#giantMenu' ).removeClass( 'is-open' );
});

// and this (again, inelegant) is a quick fix that allows the menu item to stay colored if you're hovering over the copy
$( '#giantMenu' ).hover(
  function() {
    $( '.menuButton' ).addClass( 'menuActivate' );
  }, function() {
    $( '.menuButton' ).removeClass( 'menuActivate' );
  }
);


function loadHandlebars() {
	console.log( 'load handlebars' );
	// this sets up our Handlebars, to be attached to the JSON data we provide
	var templateScriptLg = $('#ctaLargeTemplate').html();
	var theTemplateLg = Handlebars.compile( templateScriptLg );
	$( '#ctaLarge' ).append( theTemplateLg( theData ) );

	var templateScriptSm = $( '#ctaSmallTemplate' ).html();
	var theTemplateSm = Handlebars.compile( templateScriptSm );
	$( '#ctaSmall' ).append(theTemplateSm( theData ));
	console.log( 'loaded handlebars' );
}

function backToTopLoad(a) {
	console.log( 'load backToTop' );
	// this sets up our "Back to Top" button, which will follow you only once you reach a certain point (beyond the normal page's screen height)
		var t = 300, // px height on page where it starts to show up
			n = 1200, // px height where it'll fade out
			d = 700, // default movement point
			i = a( '.backToTopBtn' ); // attaches it to the correct class
		a( window ).scroll( function() { // if you scroll, it checks to see your document height
			a( this ).scrollTop() > t ? i.addClass( 'bttVisible' ) : i.removeClass( 'bttVisible bttFadeOut' ), a(this).scrollTop() > n && i.addClass( 'bttFadeOut' )
		}), i.on( 'click', function( t ) { // when you click it, it animates the scroll up instead of the jarring instantaneous acnhor effect
			t.preventDefault(), a( 'body,html' ).animate({
				scrollTop: 0
			}, d)
		}
	)
}

$(function() { // document ready
	// content we'll load
	loadHandlebars();
	backToTopLoad();
	console.log('Foundation Core Version: ' + Foundation.version);
});

$(document).foundation();
