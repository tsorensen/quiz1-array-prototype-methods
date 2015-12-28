# Quiz 1 - Array Prototype Methods

Below are a series of problems to work through that should help reinforce the
Array prototype methods. If you don't already know what they are or how they
work, read the following links:

* [`.map()`][map]
* [`.forEach()`][forEach]
* [`.some()`][some]
* [`.filter()`][filter]
* [`.reduce()`][reduce]

There are many more array methods, but those are the most common ones that
you'll see and should utilize.

# Instructions

1. Fork this repo to your own user account

1. Clone your fork of the repo

1. Navigate to the repo's directory in the terminal

1. Install the dependencies:

  ```bash
  npm install
  ```

1. Solve the problems described below. Enter your code into the function
  definitions in the files in the `problems/` directory. Most of the problems
  can be solved in 1 line of code, but others will most definitely take more.

1. Run the tests with the following command:

  ```bash
  npm test
  ```

  You may see errors show up. That is alright! You can run them as many times as
  you want. If you're having trouble here are some helpful tips:

  * Use `console.log()` frequently if you're unsure of the value of a variable.
    Use prefixes to help you distinguish different logging statements like this:
    `console.log('testing', myObj);`

  * To check the type of a variable, use `typeof myObj`. Possible values you can
    get are `'string'`, `'number'`, `'object'`, and `'undefined'`.

    ```js
    typeof 'myString' === 'string';
    typeof 5 === 'number';
    typeof undefined === 'undefined';
    typeof null === 'object';
    typeof [] === 'object';
    typeof (/regex/) === 'object';
    typeof {} === 'object';
    ```


1. Once you're done, commit your code, push it, and submit a pull request to the
  original repo. It will run the automated tests and tell me whether or not they
  pass. If they fail, you can still make new commits. If you push them up, your
  changes will automatically be shown in the pull request, and the automated
  tests will rerun. If the tests pass on your machine, but fail in the pull
  request, contact me and we'll get it resolved.

1. After you have a passing pull request, submit the link to the pull request
  to canvas. If you're having trouble getting all of the tests to pass, you can
  still submit for partial points. The quiz is out of 30 and you have 32 tests
  to pass, which allows you 2 failing tests to still get 100% on the quiz.

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
all of the numbers, and ignores any non-number value. {You can utilize the
[`.reduce` method][reduce] or [`.forEach` method] for a simple solution.

```js
sum([ 1, 2, 3, 4 ]); // 10
sum([ 'foo', 'bar', '0', '1' ]); // null
sum([]); // null
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
