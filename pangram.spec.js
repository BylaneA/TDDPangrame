//var Pangram = require('./pangram');

describe('Pangram()', function()  {

  it('empty sentence', function() {
    var pangram = new Pangram('');
    expect(pangram.isPangram()).toBe(false);
  });

  it('famous pangram', function() {
    var pangram = new Pangram('The quick brown fox jumps over the lazy dog');
    expect(pangram.isPangram()).toBe(true);
  });

  it('random numbers', function() {
    var pangram = new Pangram('78269');
    expect(pangram.isPangram()).toBe(false);
  });

  it('random sentence', function() {
    var pangram = new Pangram('Hell is empty and all the devils are here');
    expect(pangram.isPangram()).toBe(false);
  });

});
