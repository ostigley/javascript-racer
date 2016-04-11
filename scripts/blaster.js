var addBlaster = function() {
//play auddio. 

	//playerposition here is the blaster position
	//initial blaster position
	var blasterPosition = players['Player 1'].position.parentNode.previousSibling.childNodes[players['Player 1'].lane]
	blaster.position.classList.add('blaster');
}

var blasterMove = function(){
	var blasters = document.querySelectorAll(".blaster");
	for(i =0 ; i <blasters.length ; i++) {
		var blasterLane = Number(blasters[i].classList[0].slice(1));
		blasters[i].parentNode.previousSibling.childNodes[blasterLane].classList.add("blaster");
		blasters[i].classList.remove('blaster');

	}
}