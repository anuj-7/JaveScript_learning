
console.log(`====================================================== Q1 ======================================================`);
let givenStr = function (val1) {
    let strLower = val1.toLowerCase();
    let count = 0;
    for (let index = 0; index < val1.length; index++) {
        var char = strLower.charAt(index);
        let vowels = "aeiou";
        let invowels = vowels.includes(char);
        if (invowels) {
            count++;
        }
    }
    console.log(`Total number of vowels using includes in given string "${val1}" = ${count}`);
}
givenStr("I am a good IT Developer")

console.log(`====================================================== Q2 ======================================================`);

let addition = function (number) {
    let count = 0;
    for (let index = 0; index <= number; index++) {
        count = count + (index * index * index);
    }
    console.log(`Sum of cube of numbers from 1 to 5 = ${count}`);
}
addition(5)

console.log(`====================================================== Q3 ======================================================`);

let oddPositionChars = function (str0) {
    // console.log(`ODD position Number in given srting "${str0}" = `);
    var result = "";
    for (let index = 0; index < str0.length; index++) {
        let charr = str0.charAt(index);
        if (charr != " " && index % 2 != 0) {
            result = result + charr;
        }
    }
    console.log(`ODD position Number in given srting "${str0}" = ${result}`);
}
oddPositionChars("Hard work always pay back.")
console.log(`----------------------------------------------------------------------------------------------------------------`);
oddPositionChars("Soon i will be IT angular champ")

console.log(`================================================================================================================`);

var string = "I am very  good IT Developer";
var stringLower = string.toLowerCase();
var stringLength = stringLower.length;
var isVowels = "aeiou";
var countVowels = 0;
for (let index = 0; index < stringLength; index++) {
    var vowels = stringLower.charAt(index);
    var totalVowels = isVowels.includes(vowels);
    if (totalVowels) {
        countVowels++;
    }
}
console.log(` The total count of vowels =  ${countVowels}`);