//   Build track HTML

var trackWidth = Number(prompt('How big?'));

for (i=0; i<20; i++) {
	// set racetrack variable by finding table body
	var racetrack = document.querySelector('tbody')
	// clear existing html ifplayers want different size game

	
	// create and append rows
	var tableRows = document.createElement("tr")
	racetrack.appendChild(tableRows);

	// iterate to create and append classes defining
	for (j=0; j<(trackWidth*2); j++) { 
		var tableCols = document.createElement('td')
		tableCols.classList.add('L'+j);

		if (j < trackWidth) {
			tableCols.classList.add('Player_1')
		} else {
			tableCols.classList.add('Player_2')
		}

		tableRows.appendChild(tableCols);
		
	}

}

//Add finish and start line
document.querySelector('tr').classList.add('finish');
document.querySelectorAll('tr')[19].classList.add('start')
//  Set left and right lane broundries: 

var laneBoundries = {
	left1: 0,
	left2: trackWidth,
	right1: trackWidth-1,
	right2: trackWidth*2-1
}

laneBoundries.check = function(player, boundry) {
	return ( (players[player].lane == laneBoundries[boundry+"1"]) || (players[player].lane == laneBoundries[boundry+"2"]) );
}

