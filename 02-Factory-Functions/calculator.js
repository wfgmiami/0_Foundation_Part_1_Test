function createCalculator(){
	
	var calc = {
		val: 0,
		value: function(){
			return this.val;
		},
		add: function(num){
			this.val += num;
		},
		subtract: function(num){
			this.val -= num;
		},
		clear: function(){
			this.val = 0;
		}

	}
	
	return calc;

}
