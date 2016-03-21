//   Initiate GAME PLAY!   

//____________________________________________________________________________________



//___________________________________________________________________________________


//  Start function:   This function sets initial positions to the start point of the table.  And resets active positions to "". 
var start = function() {
	
	//  clear active positions from the board. 
	var positions = document.querySelectorAll(".active");
	for (i=positions.length-1; i>-1 ; i--) {
	//iteration is reversed because the position array reduces in size by 1 each iteration. 
		positions[i].classList.remove("active");
	}

	//  Put players back to start position. 
	for(var key in players) {
		var array = document.getElementsByClassName(players[key].stripID)
		array[array.length-1].classList.add("active"); 
	}

	// call set=Pos to define position variables. 
	setPos();
	finisher = false;

	//   initiate event listener for movements
	document.addEventListener("keyup", keypress, false);
}


//  Set position: function to update position of players in Player object. 

var setPos = function (replay) {
	// re-initialise position variables in pplayer object. 
	players['Player 1'].position = document.getElementsByClassName('Player_1 active')[0]; 
	players['Player 2'].position = document.getElementsByClassName('Player_2 active')[0];
	// [0] index is returning the table entry that is currently active.  there sohuld only be two entries that are avtive on the whole page. 
}

var whichPlayer = function (player){
	if (player === 'Player 1') {
		return players.player1;
	} else {
		return players.player2;
	}
}

var finished = function(player) {
//Check if player has crossed the finishe line.  Ask for new game.  Update score. 
	
	if (players[player].position.classList[1] == "finish") {
		finisher = true;
		
		// update score
		players[player].score++;
		//____   Scoreboard
		var scoreboard = document.getElementById(players[player].scorebox).childNodes[3]
		var scores = document.createTextNode(players[player].score);
		scoreboard.appendChild(scores);


		//Ask to replay. 
		var replay = confirm(player+ ' wins!!!\n \nDo you want a re-match?');
		if (replay) {
			start();
		}
	}
};

var updatePosition = function (player) {
	// move player forward on the board
	players[player].position.parentNode.previousSibling.previousSibling.childNodes[players[player].lane].classList.add("active")
	//players[player].position.nextElementSibling.classList.add("active");
	players[player].position.classList.remove("active");
	
	// re-initialise position variables in pplayer object. 
	setPos();

	//check if finished:
	finished(player);
}

var keypress = function (key) {
	if (!finisher) {
		var k = key.which;
		switch (k) {
			case 90: 
			updatePosition('Player 1');
			break;
			case 191: 
			updatePosition('Player 2');
			break;	
		};
	};
}



// 1)____ Set up players & set finisher to false.
var players = {
	'Player 1': {
		stripID: "Player_1",
		score: 0,
		position:"",
		lane: 0,
		scorebox: "player1box"
	},
	'Player 2': {
		stripID: "Player_2",
		score: 0,
		position:"",
		lane: 1,
		scorebox: "player2box"
	}
}
var finisher = false;

// 2)____ Initiate start of game. 

start();



