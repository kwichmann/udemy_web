function printReverse(a) {
	for (var i = a.length - 1; i >= 0; i--) {
		console.log(a[i]);
	}
}

function isUniform(a) {
	if (a.length <= 1) {
		return true;
	}

	var first = a[0];
	for (var i = 1; i < a.length; i++) {
		if (a[i] !== first) {
			return false;
		}
	}
	return true;
}

function sumArray(a) {
	var sum = 0;
	a.forEach(function(n) {sum += n;})
	return sum;
}

function max(a) {
	var m = -Infinity;
	a.forEach(function(n) {
		if (n > m) {
			m = n;
		}
	})
	return m;
}
