var expect = require('expect.js');
var Frame = require('../src/Frame.js');
suite('Bowling Score Test', function(){
	
	test('creating a Frame', function(done){
		var frame = new Frame(2,4);

		expect(2).to.eql(frame.firstThrow());
		expect(4).to.eql(frame.secondThrow());
		
		done();
	});

	test('Frame Score', function(done){
		var frame = new Frame(3,5);
		expect(8).to.eql(frame.sum());
		done();
	});

	test('Identify a spare frame', function(done){
		var frame = new Frame(1,9);

		//expect(frame.isSpare()).to.be.ok();
		done();
	});

	// test('Identify a strike frame', function(done){
	// 	var frame = new Frame(3,5);

	// 	expect()
	// });
});