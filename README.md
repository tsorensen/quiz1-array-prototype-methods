# Quiz 1 - Array Prototype Methods


Problem 1 - [`problems/01-double-array.js`](problems/01-double-array.js)
========================================================================

Write a function that accepts an array of numbers, and returns a new array with
all of the numbers doubled. You can utilize the [`.map` method][map] for a
simple solution.

```js
doubleArray([ 1, 2, 3 ]); // [ 2, 4, 6 ]
doubleArray([ 2, 4, 6 ]); // [ 4, 8, 12 ]
```


Problem 2 - [`problems/02-concat-each.js`](problems/02-concat-each.js)
======================================================================

Write a function that accepts an array of strings as the first parameter, and
another string as the second parameter. The function should return an array with
each element in the array equal to the original string prefixed with the second
string. You can utilize the [`.map` method][map] for a simple solution.

```js
concatEach([ 'foo', 'bar' ], 'asdf'); // [ 'asdffoo', 'asdfbar' ]
concatEach([ 'world', 'there' ], 'hello '); // [ 'hello world', 'hello here' ]
```


Problem 3 - [`problems/03-even.js`](problems/03-even.js)
========================================================

Write a function that accepts an array of numbers, and return an array with just
the even numbers. You can utilize the [`.filter` method][filter] for a simple
solution.

```js
even([ 1, 2, 3, 4, 5, 6 ]); // [ 2, 4, 6 ]
even([ 1, 3, 5 ]); // []
even([ 2, 4, 6 ]); // [ 2, 4, 6 ]
```


Problem 4 - [`problems/04-only-strings.js`](problems/04-only-strings.js)
========================================================================

Write a function that accepts an array of mixed values, and return an array with
just the string values. You can utilize the [`.filter` method][filter] for a
simple solution.

```js
onlyStrings([ 1, { foo: 'bar' }, 'hello world' ]); // [ 'hello world' ]
onlyStrings([ 1, 2, 3 ]); // []
onlyStrings([ 'hello', /world/ ]); // [ 'hello' ]
```


Problem 5 - [`problems/05-has-string.js`](problems/05-has-string.js)
====================================================================

Write a function that accepts an array of mixed values, and return `true` if the
array contains a string, or `false` if the array does not. You can utilize the
[`.some` method][some] for a simple solution.

```js
hasString([ 1, 2, 3, 4, '5' ]); // true
hasString([ 1, 2, 3, 4, 5 ]); // false
```


Problem 6 - [`problems/06-has-greater-than.js`](problems/06-has-greater-than.js)
================================================================================

Write a function that accepts an array of numbers as the first parameter, and a
number as the second parameter. Return `true` if any number in the array is
greater than the number given as the second parameter, or `false` if otherwise.
You can utilize the [`.some` method][some] for a simple solution.

```js
hasGreaterThan([ 4, 2, 8, 10 ], 11); // false
hasGreaterThan([ 1, 5, 3 ], 4); // true
```


Problem 7 - [`problems/07-sum.js`](problems/07-sum.js)
======================================================

Write a function that accepts an array of mixed values, and returns a total of
all of the numbers, and ignores any non-number value. You can utilize the
[`.reduce` method][reduce] or [`.forEach` method] for a simple solution.

```js
sum([ 1, 2, 3, 4 ]); // 10
sum([ 'foo', 'bar', '0', '1' ]); // 0
sum([]); // 0
sum([ '1', '2', 3, '4' ]); // 3
```


Problem 8 - [`problems/08-highest.js`](problems/08-highest.js)
==============================================================

Write a function that accepts an array of mixed values, and returns the highest
number out of all of the numbers, and ignores any non-number value. Return
`null` if there are no numbers in the array. You can utilize the
[`.reduce` method][reduce] for a simple solution.

```js
highest([ 1, 2, 3, 4, ]); // 4
highest([ -1, 'foo', 'bar', '2']); // -1
highest([ '1', '2', '3', '4' ]); // null
```

<!-- Links -->
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
[filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
