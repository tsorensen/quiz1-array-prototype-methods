'use strict';

module.exports = function concatEach(strArray, prefix) {
  return strArray.map(function(elem) {
    return prefix + elem;
  });
};
