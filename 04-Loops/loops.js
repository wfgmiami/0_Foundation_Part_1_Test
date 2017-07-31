function repeat(str, num){
	
	var newStr = "";

	if (num == 0)
		return newStr;

	for (var i = 0; i < num; i++){
		newStr += str;
	}

	return newStr;

}

function sum(arr){
	return arr.reduce(function(sum, item){ return sum += item},0)
}

function join(arr){
	var str = "";
	var len = arguments.length;

	if (arr.length == 0)
		return str;

	if (len == 1){
		str = arr.reduce(function(string, item){
			return string += item;
		})
	}
	else{
		var delim = arguments[1];
		str = arr.reduce(function(string, item){
			return string += item + delim;
		}, delim);

		str = str.substr(1, str.length - 2);
	}
	return str;
}

function gridGenerator(num){
	var str = "";
	if (num == 0)
		return str;
	for (var i = 0; i < num; i++){
		for (var j = 0; j < num; j++){
			if ((i + j) % 2){
				str += " ";
			}
			else {
				str += "#";
			}
		}
		str += "\n";
	}
	return str;
}

function paramify(obj){
	var str = [];

	for (var keys in obj){
		if (obj.hasOwnProperty(keys))
				str.push(keys + "=" + obj[keys]);
	}
	if (str.length == 0)
		return "";
	str.sort();
	str = str.reduce(function(string, item) {return string += item + "&"}, "&");

	return str.substr(1, str.length - 2);
}

function paramifyObjectKeys(obj){
	var str = [];
	if (Object.keys(obj).length == 0)
		return "";

	for (var keys in obj){
		if (!(keys in obj.__proto__))
				str.push(keys + "=" + obj[keys]);
	}

	str.sort();
	str = str.reduce(function(string, item) {return string += item + "&"}, "&");

	return str.substr(1, str.length - 2);

}

function renameFiles(arr){
	var intArr = [];
	var index = 1;

	for (var i = 0; i < arr.length; i++){
		if (arr[i].indexOf("(") > -1){
			var begPar = arr[i].indexOf("(");
			var endPar = arr[i].indexOf(")")
			intArr.push(Number(arr[i].slice(begPar + 1, endPar)));
		}
	}


	for (var i = 0; i < arr.length - 1; i++){
		if (arr[i].indexOf("(") == -1){
			for (var j = i + 1; j < arr.length; j++){
				if (arr[i] == arr[j]){
					intArr.forEach(function(item){
						if (index == item)
							index++;
					})
					arr[j] = arr[j] + "(" + index + ")";
					intArr.push(index);
					index = 1;
					intArr.sort(function(a,b) {return a - b});
				}
			}
		}
	}
	return arr;
}