var counter = (function(){
	var _number;

	var _checkPositive = function(x){
		if (x < 0) {
			return false;
		} else{
			return true;
		}
	}

	var setValue = function(x){
		if (_checkPositive(x) ){
			_number = x;
		} else {
			console.log('Wrong value');
		}
	}

	var increaseCounter = function(){
		_number++;
	}

	var decreaseCounter = function(){
		_number--;
	}

	var printCounter = function(){
		console.log(_number);
	}

	return{
		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter
	}

}())

counter.setValue(10);
counter.increaseCounter();
counter.increaseCounter();
counter.increaseCounter();
counter.decreaseCounter();
counter.printCounter();