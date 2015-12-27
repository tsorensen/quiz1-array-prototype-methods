'use strict';

var chai = require('chai');
var doubleArray = require('../problems/01-double-array');
var concatEach = require('../problems/02-concat-each');
var even = require('../problems/03-even');
var onlyStrings = require('../problems/04-only-strings');
var hasString = require('../problems/05-has-string');
var hasGreaterThan = require('../problems/06-has-greater-than');
var sum = require('../problems/07-sum');
var highest = require('../problems/08-highest');

var expect = chai.expect;

function createTestFunc(funcName, func) {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var expected = args.pop();
    var arr = args[0];

    var strArgs = args.map(function(arg) {
      return JSON.stringify(arg);
    }).join(', ');
    var strExpected = JSON.stringify(expected);

    it(funcName + '(' + strArgs + ') => ' + strExpected, function() {
      var orig = arr.slice(0);
      var modified = func.apply(null, args);

      expect(modified).to.be.eql(expected);
      expect(arr).to.be.eql(orig, 'the original array changed');
    });
  }
}

describe('01 double array', function() {

  var testArray = createTestFunc('doubleArray', doubleArray);

  testArray([ 1, 2, 3 ], [ 2, 4, 6 ]);
  testArray([ 0 ], [ 0 ]);
  testArray([], []);
  testArray([ 5, 2, 8, 4, -1 ], [ 10, 4, 16, 8, -2 ]);

});


describe('02 concat each', function() {

  var testArray = createTestFunc('concatEach', concatEach);

  testArray([ 'foo', 'bar' ], 'asdf', [ 'asdffoo', 'asdfbar' ]);
  testArray([ 'world', 'there' ], 'hello ', [ 'hello world', 'hello there' ]);
  testArray([ '' ], 'foo', [ 'foo' ]);
  testArray([], '', []);

});


describe('03 even', function() {

  var testArray = createTestFunc('even', even);

  testArray([ 1, 2, 3 ], [ 2 ]);
  testArray([ 2, 8, 10, -2 ], [ 2, 8, 10, -2 ]);
  testArray([ 1, 3, 5, 7, 9 ], []);
  testArray([], []);

});


describe('04 only strings', function() {

  var testArray = createTestFunc('onlyStrings', onlyStrings);

  testArray([ 1, '2', '3', 4 ], [ '2', '3' ]);
  testArray([ 'hello world', { foo: 'bar' }, 'foobar' ], [ 'hello world', 'foobar' ]);
  testArray([ /regex/, 'foo', /bar/ ], [ 'foo' ]);
  testArray([], []);

});


describe('05 has string', function() {

  var testArray = createTestFunc('hasString', hasString);

  testArray([ 1, 2, 3, 4, 5 ], false);
  testArray([], false);
  testArray([ 'foo', 1, 2, 3, 4 ], true);
  testArray([ 'hello', 'world' ], true);

});


describe('06 has greater than', function() {

  var testArray = createTestFunc('hasGreaterThan', hasGreaterThan);

  testArray([ 2, 4, 5, 6 ], 1, true);
  testArray([ 10, 12, 15 ], 15, false);
  testArray([ -2, 5, 12 ], 0, true);
  testArray([], 0, false);

});


describe('07 sum', function() {

  var testArray = createTestFunc('sum', sum);

  testArray([ 1, 2, 3, 4 ], 10);
  testArray([ 10, '9', 8, 7, 6 ], 31);
  testArray([ -2, 2, -3, 3, -4, 4], 0);
  testArray([], 0);

});


describe('08 highest', function() {

  var testArray = createTestFunc('highest', highest);

  testArray([ 1, 2, 3, '4' ], 3);
  testArray([ 10, 9, 8, 7, 6 ], 10);
  testArray([ -2, '2', -3, '3', -4, '4'], -2);
  testArray([], null);

});
