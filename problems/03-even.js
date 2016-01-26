'use strict';

module.exports = function even(numArray) {
  return numArray.filter(function(elem) {
    return elem % 2 === 0;
  });
};
