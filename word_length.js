module.exports = function(sentence){
var cleaner = sentence.replace(/[^a-zA-Z\s]+/g, '').split(" ");
var sumOf = 0;

for (var i = 0; i < cleaner.length; i++) {
  sumOf += Number(cleaner[i].length);;
  }

  var average = sumOf / Number(cleaner.length);


console.log(average);

return average;
};
