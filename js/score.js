
let gameOn = true;

let server = {
	left: document.getElementById("leftServe"),
	right: document.getElementById("rightServe"),
	serverDisplays: document.getElementByClassNames("whosServing"),
	myServe: Boolean,
	whosServing: 0,

	//this is where I left off, updates which serve the players are on.
	whoIsServing: function() {
		if (this.myServe) {
			switch(this.whosServing) {
				case 0:
					this.right.innerText = "Server X";
					break;
				case 1:
					this.right.innerText = "Server XX";
					break;
				default:
					this.right.innerText = "fault";
			}
		} else {
			switch(this.whosServing) {
				case 0:
					this.left.innerText = "Server X";
					break;
				case 1:
					this.left.innerText = "Server XX";
					break;
				default:
					this.left.innerText = "fault";
			}
		}
	}
	//function that decides who is serving and which serve they're on
	//
	service: function(increaseOrDecrease) {
		debugger;
		if (increaseOrDecrease) {
			if(this.whosServing == 1) {
				if(this.myServe == true) {
					this.myServe == false;
				} else {
					this.myServe == true;
				}
				this.whosServing = 0;
			} else {
				this.whosServing++;
			}
		} else {
			if(this.whosServing == 0) {
				if(this.myServe == true) {
					this.myServe == false;
				} else {
					this.myServe == true;
				}
				this.whosServing = 1;
			} else {
				this.whosServing--;
			}
		}
	}
}

let scores = {
	leftScoreDisplay: document.getElementById("leftPlayerScore"),
	leftPlayerButton: document.getElementById("leftPlayerButton"),
	leftUndo: document.getElementById("leftUndoButton"),
	rightScoreDisplay: document.getElementById("rightPlayerScore"),
	rightPlayerButton: document.getElementById("rightPlayerButton"),
	rightUndo: document.getElementById("rightUndoButton"),
	leftScore: 0,
	rightScore: 0,

	updateLeftScore: function(upOrDown) {
		if(gameOn) {
			if (upOrDown == true) {
				this.leftScore++;
				this.leftScoreDisplay.textContent = scores.leftScore;
			}
			else {
				if(this.leftScore > 0) {
					this.leftScore--;
					this.leftScoreDisplay.textContent = scores.leftScore;
				} else {
					//maybe add a red blink animation
				}
			}
		}
	},

	updateRightScore: function(upOrDown) {
		if(gameOn) {
			if(upOrDown == true) {
				this.rightScore++;
				this.rightScoreDisplay.textContent = scores.rightScore;
			}
			else {
				if(this.rightScore > 0){
					this.rightScore--;
					this.rightScoreDisplay.textContent = scores.rightScore;
				}
				else {
					//maybe add a red blink animation
				}
			}
		}
	},
//changes who serves both forwards and reverse

}

function leftService() {

}

function rightService() {

}

function rightIncrease() {
	server.service(true);
	scores.updateRightScore(true);
	winOrLose(scores.leftScore, scores.rightScore);
}

function rightDecrease() {
	server.service(false)
	scores.updateRightScore(false);
}

function leftIncrease() {
	server.service(true);
	scores.updateLeftScore(true);
	winOrLose(scores.leftScore, scores.rightScore);
}

function leftDecrease() {
	server.service(false);
	scores.updateLeftScore(false);
}

function winOrLose(leftScore, rightScore) {
	if (leftScore >= 11 && rightScore < (leftScore - 1)) {
		debugger;
		//add the win z index
		server.left.innerText = "Winner!!";
		gameOn = false;
	} else if (rightScore >= 11 && leftScore < (rightScore - 1)) {
		//add the win z index
		server.right.innerText = "Winner!!";
		gameOn = false;
	}
}


(function() {
	server.left.addEventListener('click', leftService);
	server.right.addEventListener('click', rightService);
	scores.leftPlayerButton.addEventListener('click', leftIncrease);
	scores.leftUndo.addEventListener('click', leftDecrease);
	scores.rightPlayerButton.addEventListener('click', rightIncrease);
	scores.rightUndo.addEventListener('click', rightDecrease);
})()
