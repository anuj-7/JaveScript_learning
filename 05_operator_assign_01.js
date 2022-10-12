console.log("============================================= Q1 =============================================");
var wordLengthSquare = function(arg1){
    console.log(`Given word :-`, arg1);
    console.log(`Given word's length :- `, arg1.length);
    console.log(`Given word's length square :- `, arg1.length*arg1.length);
    
}
console.log("-------------------------------------------- 1.1 --------------------------------------------");
wordLengthSquare("JavaScript")
console.log("-------------------------------------------- 1.2 --------------------------------------------");
wordLengthSquare("Google")
console.log("-------------------------------------------- 1.3 --------------------------------------------");
wordLengthSquare("Developer")
console.log("============================================= Q2 =============================================");
var reverse = function(){
    var string1 = "I am Angular Developer";
    console.log(`Given string :- ${string1}`);
    console.log("--------------------------------------------- 2.1 --------------------------------------------");
    var revStr = string1.split(``).reverse().join(``);
    console.log(`Given string after reverse by each latter ====> "${revStr}"`);
    var revString = string1.split(` `).reverse().join(` `)
    console.log(`Given string after reverse by each word ====> "${revString}"`);
    console.log("--------------------------------------------- 2.2 --------------------------------------------");
    // console.log(`Length of the given string :-`, string1.length);
    // var splString = string1.split(` `).length
    // console.log(`No. of words in the given string :-`, splString);
    console.log(`Result of Given string length divided by total no. of words in string is :-`, string1.length/string1.split(` `).length);
    console.log("--------------------------------------------- 2.3 --------------------------------------------");
    // console.log(`Length of the given string :-`, string1.length);
    // var splString = string1.split(` `).length
    // console.log(`No. of words in the given string :-`, splString);
    console.log(`Result of Given string length multiply by total no. of words in string is :-`, string1.length*string1.split(` `).length);
}

reverse()