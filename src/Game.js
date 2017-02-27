function Game(){
	this._frames=[];
	this._gameSize=10;
}

Game.prototype.addFrame = function(frame){
	this._frames.push(frame);
}

module.exports = Game;