function add(a, b) {
	if (typeof a === 'number' && typeof b === 'number') {
		return a + b;
	} else {
		throw "Input is not a number";
	}
}

module.exports = add;