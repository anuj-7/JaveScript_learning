
console.log(`================================================ Q1 ================================================`);


var vowelCount = function(givenStr) {
var count = 0;
    var givenString = givenStr.toLowerCase();
var Char = givenString.length;
for (let index = 0; index < Char; index++) {
    var charr = givenString.charAt(index);
    var vowels = "aeiou";
    var result = vowels.includes(charr);
    if (result) {
        count++;
    }
}
console.log(`Total No. of vowels in given string "${givenStr}" = "${count}"`);
}
vowelCount("Good Morning IT Champs")

console.log(`================================================ Q2 ================================================`);

var vowelCount = function (str1) {
    console.log(`Given string is "${str1}".`);
    var count =0;
    var lowerstr = str1.toLowerCase();
    var strlength = lowerstr.length;
    for (let index = 0; index <= strlength; index++) {
        var charr = lowerstr.charAt(index);
        if (charr == "a" || charr == "e" || charr == "i" || charr == "o" || charr == "u") {
            // var result = charr.length;
            count++;
        }
    }
    console.log(`Total Count of vowels in given String = ${count}`);
}
vowelCount(`I love JavaScript`)

console.log(`================================================ Q3 ================================================`);

var sumnum = function (val1) {
    var count = 0;
for (let index = 0; index <= val1; index++) {
    count = count + index;   
}    
console.log(`Sum all numbers from 1 to ${val1} = ${count}`);
}
sumnum(10)
sumnum(20)

console.log(`================================================ Q4 ================================================`);
var sumnum = function (val1) {
    var count = 0;
for (let index = 0; index <= val1; index++) {
    count = count + (index*index);   
}    
console.log(`Sum square numbers from 1 to ${val1} = ${count}`);
}
sumnum(10)

console.log(`================================================ Q5 ================================================`);

var evenPositionChars = function (string1) {
    console.log(`Even position Number in given srting "${string1}" =`);
    var totalleng = string1.length;
    for (let index = 0; index < totalleng; index++) {
        var charnum =  string1.charAt(index);
        if (charnum!=" " && index%2==0) {
            console.log(charnum);            
        }        
    }
}
evenPositionChars ("Hard work always pay back.")
console.log(`----------------------------------------------------------------------------------------------------`);
evenPositionChars ("Soon i will be IT angular champ")

console.log(`================================================ Q6 ================================================`);

var oddPositionChars = function (string1) {
    console.log(`ODD position Number in given srting "${string1}" =`);
    var totalleng = string1.length;
    for (let index = 0; index < totalleng; index++) {
        var charnum =  string1.charAt(index);
        if (charnum!=" " && index%2!=0) {
            console.log(charnum);            
        }        
    }
}
oddPositionChars ("Hard work always pay back.")
console.log(`---------------------------------------------------------------------------------------------------`);
oddPositionChars ("Soon i will be IT angular champ")
