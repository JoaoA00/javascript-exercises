const convertToCelsius = function(tempfahrenheit) {
  const celsius = Math.round((tempfahrenheit - 32) * 5/9 * 10) / 10; //*10 /10 foram pra deixar com 1 casa decimal
  return celsius;
};

const convertToFahrenheit = function(tempCelsius) {
  const fahrenheit = Math.round(((tempCelsius * 9/5) + 32)*10) / 10; //*10 /10 foram pra deixar com 1 casa decimal
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
