
	
	trackLength = Number(prompt('How big?'));
	for (i=0; i<trackLength; i++) {
		var racetrack = document.querySelector('tbody');
		var tableRows = document.createElement("tr")
		racetrack.appendChild(tableRows);

		for (j=0; j<trackLength; j++) { 
			var tableCols = document.createElement('td');
			tableRows.appendChild(tableCols);
		}
	}


/*


		var startline = document.querySelector('#start');
		trackpiece.innerHTML = "<td class=\"Player_1\"></td><td class=\"Player_2\"></td>";
		racetrack.insertBefore(trackpiece, startline);
	}
	document.querySelector('tbody').removeChild(document.querySelector('tbody').childNodes[1])
	// the above line deletes a pesky html element that mysteriuosly gets created.  Update position function
	// does not work without.  This is a temp work around. */