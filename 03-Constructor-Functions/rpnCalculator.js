function RPNCalculator(){
	this.val = 0;

}

RPNCalculator.prototype = [];

RPNCalculator.prototype.plus = function(){
	var len = this.length;
	if (len == 0) throw "rpnCalculatorInstance is empty";
	this.val = this[len - 1] + this[len - 2];
	this.pop();
	this.pop();
	this.push(this.val);
}

RPNCalculator.prototype.minus = function(){
	var len = this.length;
	if (len == 0) throw "rpnCalculatorInstance is empty";
	this.val = this[len - 2] - this[len - 1];
	this.pop();
	this.pop();
	this.push(this.val);
}

RPNCalculator.prototype.divide = function(){
	var len = this.length;
	if (len == 0) throw "rpnCalculatorInstance is empty";
	this.val = this[len - 2] / this[len - 1];
	this.pop();
	this.pop();
	this.push(this.val);
}

RPNCalculator.prototype.times = function(){
	var len = this.length;
	if (len == 0) throw "rpnCalculatorInstance is empty";
	this.val = this[len - 2] * this[len - 1];
	this.pop();
	this.pop();
	this.push(this.val);
}

RPNCalculator.prototype.value = function(){
	return this.val;
}
