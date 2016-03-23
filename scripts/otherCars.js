
var addCars = function (){ 
	nextLaneNumber = Math.floor(Math.random()*trackWidth*2).toString();
	// convert to string and add L for class name. 
	nextLane = ".L"+nextLaneNumber;
	// find lane node and add class othercars class.
	document.querySelector(nextLane).classList.add('othercars');
}

//get all othercar elements to iterate over: 
var moveCarsDown = function(){
	var othercars = document.querySelectorAll(".othercars");
	for(i =0 ; i <othercars.length ; i++) {
		var carLane = Number(othercars[i].classList[0].slice(1))
		updatePosition(othercars[i], "down", carLane);
	}
}


