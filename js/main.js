window.mhHeight = 0;
window.pgHeight = 0;
window.wHeight = 0;

var updateHeights = function() {
	
	mhHeight = $( '.masthead' ).height();
	pgHeight = $( document ).height();
	wHeight = $( window ).height();
	
}

var updateScrollage = function() {
	
	var st = $( window ).scrollTop();
	
	var progress = st / ( pgHeight - wHeight );
	
	$('.masthead').css( 'top', Math.floor( -1 * ( mhHeight - wHeight ) * progress ) + 'px' );
	
	$('.masthead p.forward').css( 'right', Math.floor( -1 * progress * 200 ) + 'px' );

	$('.masthead p.backward').css( 'right', Math.floor( progress * 200 ) + 'px' );
	
}

jQuery(function($) {
	$('.masthead').fitText( 40, { minFontSize: '24px' } );
/*
	$('.about').fitText(2.4, { minFontSize: '18px' });
	$(window).resize();
*/
/*
	$('.masthead p').draggable({
		containment: 'parent',
		axis: 'x'
	});
*/

	$(window).on( 'resize', function() {
		updateHeights();
	}).trigger( 'resize' );
	
	$(window).on( 'scroll', updateScrollage );

});