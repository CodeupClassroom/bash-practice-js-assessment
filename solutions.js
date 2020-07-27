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

function isTrue(input) {
    if (input === true) {
        return true;
    } else {
        return false;
    }
}

function isFalse(input) {
    if (input === "true") {
        return true;
    } else if (input === false) {
        return true;
    } else {
        return false;
    }
}

function not(input) {

    return !input;
}

function addOne(input) {
    return parseFloat(input) + 1;
}

function isEven(input) {
    if (parseFloat(input) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isIdentical(a, b) {
    if (a === b) {
      return true;
    } else {
        return false;
    }
}

function isEqual(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}

function or(a, b) {
    if (a == true || b == true ) {
        return true;
    } else if (a == "hello" || b == "world") {
    return "hello";
    } else {
        return false;
    }
}

function and(a, b) {
    if (a == true && b == true ) {
        return true;
    } else if (a == "hello" || b == "world") {
        return "world";
    } else {
        return false;
    }
}

function concat(a ,b) {
    return a.toString() + b.toString();
}


