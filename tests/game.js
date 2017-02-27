var expect = require('expect.js');
var game = require('../src/Game.js');
var frame = require('../src/Frame.js');

suite('Game Tests', function(){
	test('Creating a game', function(done){
		var game = new Game();

		expect(game).to.be.ok();
		done();
	});

	test('Game score', function(){
		var game = new Game();

		game.addFrame(new Frame(1,5));
		game.addFrame(new Frame(3,6));
		game.addFrame(new Frame(7,2));

		expect(25).to.be.eql(game.score());
	});


})