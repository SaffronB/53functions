module.exports = function(numberList) {
  var hlArray = [];
  var lowestNumber = Math.min.apply(null, numberList);
  var highestNumber = Math.max.apply(null, numberList);
  hlArray.push(lowestNumber, highestNumber);

  return (hlArray);

};
