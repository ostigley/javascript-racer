
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
	for (i=0; i<strips.length ; i++) {
		document.getElementById(strips[i]).children[0].classList.add("active"); 
	}
	setPos();
	finisher = false;

}

var setPos = function (replay) {
	
	player1Pos = document.getElementsByClassName('active')[0]; 
	player2Pos = document.getElementsByClassName('active')[1];

	// for (i=0; i<strips.length ; i++) {
	// 	strips[i] = document.getElementsByClassName('active')[i]; ; 
	// }

}



var finished = function(player) {
	var input;
	if (player === 'Player 1') {
		input = player1Pos;
	} else {
		input	= player2Pos;
	}


	if (input.classList[0] == "finish") {
		finisher = true;
		var replay = confirm(player+ ' wins!!!\n \nDo you want a re-match?');
		if (replay) {
			start();

		}

	}
};

var updatePosition = function (playerPos, player) {
	playerPos.nextElementSibling.classList.add("active");
	playerPos.classList.remove("active");
	setPos();
	finished(player);
}

var keypress = function (key) {
	if (!finisher) {
		var k = key.which;
		switch (k) {
			case 90: 
			updatePosition(player1Pos, 'Player 1')
			break;
			case 191: 
			updatePosition(player2Pos, 'Player 2')
			break;	
		};
	};
}

//   Initiate GAME PLAY!   
var player1Pos; 
var player2Pos;
var finisher = false;
var strips = ['player1_strip', 'player2_strip']

var player1Score = 0;
var player2Score = 0;



start();
//setPos();
document.addEventListener("keyup", keypress, false);



