'use strict';

module.exports = function onlyStrings(inputArray) {
  return inputArray.filter(function(elem) {
    return typeof elem === 'string';
  });
};
