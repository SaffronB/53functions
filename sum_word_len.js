module.exports = function(sentence) {
  var cleaner = sentence.replace(/[^a-zA-Z\s]+/g, '').split(" ");
  var sumWords = 0;

  for (var i = 0; i < cleaner.length; i++) {

      sumWords += Number(cleaner[i].length);

      }

  console.log(sumWords);
  return sumWords;
};
