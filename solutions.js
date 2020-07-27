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

function isTrue(valueToCheck) {
    return valueToCheck === true;
}

function isFalse(valueToCheck) {
    return valueToCheck === false;
}

function not(valueToCheck) {
    return !valueToCheck;
}

function addOne(value) {
    if (isNaN(value)) {
        return NaN;
    } else {
        value = parseFloat(value);
        return value + 1;
    }
}

function isEven(value) {
    if (isNaN(value)) {
        return false;
    } else {
        value = parseFloat(value);
        var state = (value % 2) === 0;
        return state;
    }
}

function isIdentical(valueOne, valueTwo) {
    return valueOne === valueTwo;
}

function isEqual(valueOne, valueTwo) {
    return valueOne == valueTwo;
}

function or(valueOne, valueTwo) {
    return valueOne || valueTwo;
}

function and(valueOne, valueTwo) {
    return valueOne && valueTwo;
}

function concat(valueOne, valueTwo) {
    if ((typeof valueOne) != "string") {
        valueOne = valueOne.toString();
    }
    if ((typeof valueTwo) != "string") {
        valueTwo = valueTwo.toString();
    }
    var concatenatedResult = valueOne + valueTwo;
    return concatenatedResult;
}

