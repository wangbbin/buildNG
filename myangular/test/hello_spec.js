//'use strict';

// describe("Hello", function() {
// 	it("says hello to receiver", function() {
// 		expect(sayHello('Jane')).toBe("Hello, Jane!");
// 	});
// });

var sayHello = require('../src/hello');
describe("Hello", function() {
	it("says hello", function() {
		expect(sayHello('Jane')).toBe("Hello, Jane!");
	});
});