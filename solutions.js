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


// 1.) isTrue

function isTrue(x) {
    return x === true;

}


// 2.) isFalse

function isFalse(x) {
    return x === false;

}


// 3.) not

function not(x) {
    return !x

}


// 4.) addOne

function addOne(x) {
    return  parseFloat(x) + 1;

}


// 5.) isEven

function isEven(x) {
    return (x % 2 === 0 && x !== false);

}


// 6.) isIdentical

function isIdentical(x , y) {
    return x === y;
}


// 7.) isEqual

function isEqual(x , y) {
    return x == y;

}


// 8.) or

function or(x , y) {
    return x || y;

}


// 9.) and

function and(x , y) {
    return x && y;

}


// 10.) concat

function concat(x , y) {
    return (x + "") + (y + "");

}
