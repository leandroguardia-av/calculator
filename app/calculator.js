function isNumber(n) {
	return typeof n === 'number';
}

function add(a, b) {
	if (isNumber(a) && isNumber(b)) {
		return a + b;
	} else {
		throw "Input is not a number";
	}
}

module.exports = add;