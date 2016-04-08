//takes a sentence as a parameter and returns the shortest word in it, and the length of the word

module.exports = function(sentence) {
  var sentenceArray = sentence.replace(/[^a-zA-Z\s]+/g, '').split(' ');
  console.log(sentenceArray);

  var shortestWord = sentenceArray[0];

  for (var i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length < shortestWord.length) {
      shortestWord = sentenceArray[i];
    }

  }

  return {
    word: shortestWord,
    length: shortestWord.length
  };
};
