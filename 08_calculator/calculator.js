const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  return a.reduce((total, a) => total + a, 0);
};

const multiply = function(a) {
  return a.reduce((total, a) => total*a, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let totFactorial = 1;
  
  if(a != 0){
    do {
      totFactorial *= a;
      a--;
    } while (a >= 1);
  }

	return totFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
