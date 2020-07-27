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
// 1. isTrue
function isTrue(arg){
    return arg === true;
}

// 2. isFalse
function isFalse(arg){
    return arg === false;
}

// 3. not
function not(arg){
    return !arg;
}
// 4. addOne
function addOne(arg){
    return !isNaN(parseInt(arg)) ? parseInt(arg) + 1 : arg;
}

// 5. isEven
function isEven(arg){
    return parseInt(arg)%2 === 0;
}

// 6. isIdentical
function isIdentical(arg,arg1){
    return arg === arg1;
}

// 7. isEqual
function isEqual(arg,arg1){
    return arg == arg1;
}

// 8. or
function or(arg,arg1){
    return arg || arg1;
}

// 9 and
function and(arg,arg1){
    return arg && arg1;
}

// 10 concat
function concat(arg,arg1){
    if(typeof(arg)==typeof(arg1)){
        return arg + arg1;
    }
    else if(!isNaN(arg) && !isNaN(arg1)){
        return arg.toString() + arg1.toString();
    }
}