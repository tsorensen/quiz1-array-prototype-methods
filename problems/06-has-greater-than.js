'use strict';

module.exports = function hasGreaterThan(numArray, max) {
  return numArray.some(function(elem) {
    return elem > max;
  });
};
