'use strict';

module.exports = function highest(numArray) {
  if(numArray.length > 0) {
    return numArray.reduce(function(prev, curr) {
      if(typeof prev === 'number' && typeof curr === 'number') {
        return prev > curr ? prev: curr;
      } else if(typeof prev !== 'number') {
        return curr;
      } else if(typeof curr !== 'number') {
        return prev;
      } else {
        return null;
      }
    });
  }

  return null;
};
