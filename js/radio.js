/** 
 * This java script code links the buttons #play and #stop with the controls on an invisible 
 * html5 audio tag. html5check is a function that checks whether or not such an audio tag 
 * exists on the page already. the play and stop functions create the audio tag in its absence,
 * and also find the element and control it.
 * 
 * someone who knows what theyre doing should really take a look at this.
 */

// this function checks whether or not we are streaming audio to browser.
function html5check () {
	return ( $( "#radiocontrols" ).length );
}

function play () {
	if (!(html5check())) {
		// appends an invisible audio tag if there isnt one
		$( ".radiocontainer" ).append( "<audio controls id=\"radiocontrols\" style=\"visibility:hidden;display:none;\"><source src=\"http://stream.wusb.stonybrook.edu:8090/;\" type=\"audio/mpeg\" /></audio>" );

		// is essentially a duplicate of the bind in doc.ready. 
		// not sure if necessary.
		$( "#play" ).on( "click", function myfun1 () {
			var a = document.getElementsByTagName("audio")[0];
			a.play();
		});
	}

	// have to do this here because couldnt do it inside the if statement
	// something to do with js scoping i suppose?
	var a = document.getElementsByTagName("audio")[0];
	a.play();
}

//duplicate of all the above for the stop button.
function stop () {
	if (!(html5check())) {
		// appends an invisible audio tag if there isnt one
		$( ".radiocontainer" ).append( "<audio controls id=\"radiocontrols\" style=\"visibility:hidden;display:none;\"><source src=\"http://stream.wusb.stonybrook.edu:8090/;\" type=\"audio/mpeg\" /></audio>" );
		
		// is essentially a duplicate of the bind in doc.ready. 
		// not sure if necessary.
		$( "#stop" ).on( "click", function () {
			var a = document.getElementsByTagName("audio")[0];
			a.pause();
		});
	}

	// have to do this here because couldnt do it inside the if statement
	// something to do with js scoping i suppose?
	var a = document.getElementsByTagName("audio")[0];
	a.pause();
}
