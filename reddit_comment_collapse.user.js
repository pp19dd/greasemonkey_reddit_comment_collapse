// ==UserScript==
// @name        reddit comment collapse
// @namespace   dino
// @include     http://www.reddit.com/*
// @version     1
// ==/UserScript==

var parent_selected = null;

$("body").append(
	"<style>" +
	".dino_wants_this_hidden { " +
	//"	background-color: red !important " +
	"	box-shadow: 0 0 6px gray " +
	"} " +
	"</style>"
);

$(".sitetable.nestedlisting > .thing").each( function(i,e) {

    $(".thing", e).add(e).mouseover( function(ev) {
        parent_selected = e;
        //$(e).css( { opacity: 0.3, 'background-color': '#ff0000 !important' } );
		$(e).addClass("dino_wants_this_hidden");
    });
    $(".thing", e).add(e).mouseout( function(ev) {
        parent_selected = null;
        //$(e).css( { opacity: 1, 'background-color': '#ffffff !important' } );
		$(e).removeClass("dino_wants_this_hidden");
    });
});

// + is 107 		- is 109			~ is 192
$("body").keydown( function(e) {
	if( parent_selected == null ) return( true );
	
	if( e.keyCode == 107 || e.keyCode == 109 || e.keyCode == 192 ) {
		$(".expand:visible:eq(0)", parent_selected).click();
	}
});