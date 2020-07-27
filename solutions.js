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

function isTrue(input){
    if (input === true){
        return true;
    }else {
        return false;
    }
}

function isFalse(input){
    if (input === false){
        return true;
    }else {
        return false;
    }
}

// function not(input){
//     if (input )
//         return true;{
//     } else{
//             return false;
//     }
// }

function addOne(x){
    return x + 1;
}

function isEven(input){
    if (input % 2 === 0){
        return true;
    }
}

function isIdentical(){

}

function isEqual(){

}

function or(x,y){
    return typeof x || y;
}

function and(x,y){
    return typeof x && y;
}

function concat(x, y){
    return x + y;
}
