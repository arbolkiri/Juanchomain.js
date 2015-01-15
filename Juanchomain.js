/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------



function max(a, b) {
    "use strict";
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// console.log("hello?");

console.log(max(8, 2))

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(c, d, e) {
    "use strict";
    if (max(c,d) < e){
        return e;
    } else {
        return max(c,d);
    }

}

console.log(maxOfThree(69,6,7))
console.log(maxOfThree(6,69,7))
console.log(maxOfThree(7,50,69))
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------


function isVowel(char) {
    "use strict";

    // "a" "e" "i" "o" "u"
    if (char === "a" || char === "o" || 
        char === "e" || char === "i" || 
        char === "u" || char === "A" ||
        char === "E" || char === "I" ||
        char === "O" || char === "U"){
        return true;
    }
    else {
        return false;
    };
} 

console.log(isVowel('a'))
console.log(isVowel('b'))
console.log(isVowel('e'))
console.log(isVowel('o'))
console.log(isVowel('1'))
console.log(isVowel('#'))
console.log(isVowel(';'))
console.log(isVowel('O'))


// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
// "tothohisos isos fofunon"
// double every consonant and place an occurrence of "o" in between.
// eg: taco = totacoco     triple= totroripoplole
// this
// t = tot
// h = hoh
// i = i
// s = sos
function rovarspraket(phrase) {
    "use strict";
    // char1 = 'a'
    // char2 = 'b'
    // isVowel(char1) === true
    // isVowel(char2) === false
    // return phrase.charAt()
    var currentLetter;
    var output = ""
    for (var index = 0; index < phrase.length; index++){
        
        currentLetter = phrase.charAt(index);

        if (isVowel(currentLetter) === false){
            output += currentLetter + "o" + currentLetter 
        } else {
            output += currentLetter
        }
    }
    return output

}
console.log(rovarspraket('hello'))
console.log(rovarspraket('rover says hiiiiii'))
console.log(rovarspraket('rover says hiiiiiirrrrrrrrrrrrrrrrrrrrrrr'))



// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum() {
    "use strict";
    //...
}

function multiply() {
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse() {
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    "use strict";
    //...
}
