'use strict';

module.exports = function sum(numArray) {
  return numArray.reduce(function(prev, curr) {
    return typeof curr !== 'number' ? prev : prev + curr;
  }, 0);
};
