var colors;
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
var squaresShown = 6;

resetButton.addEventListener("click", function() {
	resetGame();
});

function resetGame() {
	// Randomize colors;
	colors = generateRandomColors(squaresShown);
	
	// Pick color and display it
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	
	// Coloring the squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
}

resetGame();

easyButton.addEventListener("click", function() {
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	squaresShown = 3;
	resetGame();
});

hardButton.addEventListener("click", function() {
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	squaresShown = 6;
	resetGame();
});

// Set up event listeners
for (var i = 0; i < 6; i++) {
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!"
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play again";
		} else {
			messageDisplay.textContent = "Try again!"
			this.style.backgroundColor = "#232323"
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var pick = Math.floor(Math.random() * colors.length);
	return colors[pick];
}

function generateRandomColors(n) {
	var colors = [];

	for (var i = 0; i < n; i++) {		
		colors.push(randomColor());
	}
	return colors;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}