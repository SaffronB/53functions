module.exports = function(sentence) {
  var cleaner = sentence.replace(/[^a-zA-Z\s]+/g, '').split(" ");

  console.log(cleaner);


  var longestWord = cleaner[0];

  for (var i = 0; i < cleaner.length; i++) {
    if (cleaner[i].length > longestWord.length) {
      longestWord = cleaner[i];
    }
}

  return {
    word: longestWord,
    length: longestWord.length
  };
};
