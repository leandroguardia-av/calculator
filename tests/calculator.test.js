const add = require('../app/calculator');

test('1 plus 2 equals 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('throws exception when tries to add a no-number value with a number', () => {
	expect(() => {
		add('1', 2);
	}).toThrow("Input is not a number");
});

test('throws exception when tries to add a number with a no-number value', () => {
	expect(() => {
		add(1, true);
	}).toThrow("Input is not a number");
});
