function concatString(){
	var str = "";

	for (var i = 0; i < arguments.length; i++){
		str += arguments[i];
	}

	return str;

}

function yourFunctionRunner(){
	var str = "";
	for (var i = 0; i < arguments.length; i++){
		str += arguments[i]();
	}
	return str;
}

function makeAdder(num){
	return function(n){
		return n + num;
	}
}

function once(fn){
	fn();
	return function(){};
}

function createObjectWithClosures(){
	var val = 0;
	return {
		oneIncrementer:function(){ val++},
		tensIncrementer:function(){val += 10},
		getValue:function(){ return val },
		setValue: function(num) { val = num}
	}
}

function guestListFns(guestArray,secretCode){
	var fArr = [];

	function helperFunction(guest){
		return function(secret){
			if (secret == secretCode){
				return guest;
			}else{
				return "Secret-Code: Invalid";
			}
		}

	}
	for (var i = 0; i < guestArray.length; i++){
		var guest = guestArray[i];
		fArr.push(helperFunction(guest));
	}
	return fArr;
}

function generateGuestList(guestNameFunctions, secretCode){
	var guests = [];

	for (var i = 0; i < guestNameFunctions.length; i++){
		var guest = guestNameFunctions[i](secretCode);
		guests.push(guest);
	}
	return guests;
}