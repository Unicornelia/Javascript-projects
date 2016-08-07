//this will square a number//
var square = function(number) {
	return number*number;
};

console.log(square(4));

//a function that adds together 2 numbers//

var addNumber = function(a, b) {
	return a + b;
}

console.log(addNumber(2, 3));

//JS fizzbuzz//

var fizzBuzz = function() {
	for (var x = 1; x < 101; x = x + 1) {
		if (!(x % 15)) {
			console.log("fizzbuzz");
		}
		else if (!(x % 5)) {
			console.log("fizz");
		}
		else if (x % 3 === 0) {
			console.log("buzz");
		}
		else {
			console.log(x);
		}
	}
};

fizzBuzz();


function addNumbers(n) {
//insert your code here.... and go crazy!
  if (n > 0) {
    return (n*(n + 1))/2;
  }
  else {
  return "false";
  }
};

console.log(addNumbers(100));
