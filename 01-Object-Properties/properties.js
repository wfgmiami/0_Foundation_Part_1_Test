function setPropsOnObj(obj){
	obj.x = 7;
	obj.y = 8;
	obj.onePlus = function(num){
		return ++num;
	}
}

function setPropsOnArr(obj){
	obj.full = "stack";
	obj[0] = 5;

	obj.hello = function(){
		return "Hello!";
	}
	obj.twoTimes = function(num){
		return num * 2;
	}
}

function setPropsOnFunc(obj){
	obj.year = "20??";

	obj.divideByTwo = function(num){
		return num / 2;
	}

	obj.prototype.helloWorld = function(){
		return "Hello World";
	}
}


