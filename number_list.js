// takes a number as a parameter (n) and returns a list of numbers from 1 to n
module.exports = function(n){

var numbers = [];

for (i=1; i <n+1; i++) {
  numbers.push(i);
}

  return (numbers);
};

// var numberList = function (n) {
//
// var numbers = [];
//
// for (i=1; i <n+1; i++) {
//   numbers.push(i);
// }
//
//   console.log (numbers);
// };
//
//
// numberList(5);
