'use strict';

module.exports = function hasString(inputArray) {
  return inputArray.some(function(elem) {
    return typeof elem === 'string';
  });
};
