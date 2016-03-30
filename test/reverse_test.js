var assert = require ('assert');
var reverse = require ('../reverse')

describe ('test for reverse function', function() {
  it('it should reverse a string', function(){
    var result = reverse ('hello');
    assert.equal(result, "olleh");
  });
})
