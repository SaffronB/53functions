//takes a number as a parameter (n) and returns the sum of numbers from 1 to n
module.exports = function(n) {
  var numbers = [];
  var sum = ''

  for (i = 1; i < n+1 ; i++) {
    numbers.push(i);
  }

for (var i = 0, sum = 0; i < numbers.length; sum += numbers[i++]) {

  }
  return (sum);
};
