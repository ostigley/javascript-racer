
	
	trackWidth = Number(prompt('How big?'));
	for (i=0; i<25; i++) {
		var racetrack = document.querySelector('tbody');
		var tableRows = document.createElement("tr")
		racetrack.appendChild(tableRows);

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

