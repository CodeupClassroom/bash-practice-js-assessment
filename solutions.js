"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

var isTrue = input => {
    return input === true;
}

var isFalse = input => {
    return input === false;
}

var not = input => {
    return !input;
}

var addOne = input => {
    var number = parseFloat(input);

    if (typeof(number) === "number") {
        return (number + 1);
    }
    return NaN;
}

var isEven = input => {
    var number = parseFloat(input);

    if (typeof(number) === "number") {
        return (number % 2 === 0);
    }
    return NaN;
}

var isIdentical = (input1, input2) => {
    return (input1 === input2);
}

var isEqual = (input1, input2) => {
    return (input1 == input2);
}

var or = (input1, input2) => {
    return (input1 || input2);
}

var and = (input1, input2) => {
    return (input1 && input2);
}

var concat = (input1, input2) => {
    return '' + input1 + input2;
}