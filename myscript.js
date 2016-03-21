
var start = function() {
	
	//  clear active positions
	var positions = document.getElementsByClassName("active");
	for (i=0; i<positions.length ; i++) {
		positions[i].classList.remove("active");
	}

	var positions = document.getElementsByClassName("active");
	for (i=0; i<positions.length ; i++) {
		positions[i].classList.remove("active");
	}

	//  Put players at start line
	// for (i=0; i<strips.length ; i++) {
	// 	document.getElementById(strips[i]).children[0].classList.add("active"); 
	// }

	for(var key in players) {
		document.getElementById(players[key].stripID).children[0].classList.add("active"); 

	}


	setPos();
	finisher = false;

}

var setPos = function (replay) {
	
	players['Player 1'].position = document.getElementsByClassName('active')[0]; 
	players['Player 2'].position = document.getElementsByClassName('active')[1];

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
	// var input;
	// if (player === 'Player 1') {
	// 	input = player1Pos;
	// } else {
	// 	input	= player2Pos;
	// }

	// input = whichPlayer(player)[0];


	if (players[player].position.classList[0] == "finish") {
		// update score
		players[player].score++;
		console.log('Player 1 score: '+players['Player 1'].score +'\n'+ 'Player 2 score: '+players['Player 2'].score)
		
		// console.log(players[player].score;);

		finisher = true;
		var replay = confirm(player+ ' wins!!!\n \nDo you want a re-match?');
		if (replay) {
			start();

		}

	}
};

var updatePosition = function (player) {
	players[player].position.nextElementSibling.classList.add("active");
	players[player].position.classList.remove("active");
	setPos();
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

//   Initiate GAME PLAY!   

var players = {
	'Player 1': {
		stripID: "Player_1",
		score: 0,
		position:"",
	},
	'Player 2': {
		stripID: "Player_2",
		score: 0,
		position:"",
	}
}


// 
var finisher = false;
var strips = ['player1_strip', 'player2_strip']

// var player1Score = 0;
// var player2Score = 0;



start();
//setPos();
document.addEventListener("keyup", keypress, false);



