function Frame(i,j){
	this._firstThrow = i;
	this._secondThrow = j;
};

Frame.prototype.firstThrow = function(){
		return this._firstThrow;
	};

	Frame.prototype.secondThrow = function(){
		return this._secondThrow;
	};

	Frame.prototype.sum = function(){
		return this.firstThrow+this.secondThrow;
	};

	Frame.prototype.isSpare = function(){
		return this.sum(3,5) < 10;
	};


module.exports=Frame;