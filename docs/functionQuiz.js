function isEven(n) {
	return (n % 2 === 0);
}

function factorial(n) {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

function kebabToSnake(kebab) {
	var snake = "";
	for (var i = 0; i < kebab.length; i++) {
		var letter = kebab[i];
		if (letter === "-") {
			snake += "_";
		} else {
			snake += letter
		}
	}
	return snake;
}