
var givenString = "I love JavaScript";
var totalChar = givenString.length;
for (let index = 0; index <totalChar; index++) {
    if (index%2==0) {
        var charAt = givenString.charAt(index);
        console.log(charAt); 
    }  
}


console.log(`========================================================`);
var givenString = "I love JavaScript";
var Char = givenString.length;
for (let index = 0; index < Char; index++) {
    var charr = givenString.charAt(index);
    if (charr=="a"|| charr=="e"|| charr=="i"|| charr=="o"|| charr=="u") {
        console.log(charr); 
    }  
}




// WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = "a I love JavaScript";
console.log("================= Just log Vowels ======================");
for (let index = 0; index < givenString.length; index++) {
    var char = givenString.charAt(index); // a
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
        || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        console.log(char);
    }
}


// WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = "a I love JavaScript";
console.log("================= Just log Vowels ======================");
 var strLowerCase = givenString.toLowerCase();// "a i love javascript"
 for (let index = 0; index < givenString.length; index++) {
    var char = strLowerCase.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        console.log(char);
    }
}

var givenString = "a I love JavaScript";
console.log("================= Just log Vowels ======================");
 var strLowerCase = givenString.toLowerCase();// "a i love javascript"
 for (let index = 0; index < givenString.length; index++) {
    var char = strLowerCase.includes(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        console.log(char);
    }
}

// // WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
// var givenString = "a I love JavaScript";
// console.log("================= Just log Vowels by includes ======================");
//  var strincludes = givenString.includes(`a`,`e`,`i`,`o`,`u`);
//  for (let index = 0; index < givenString.length; index++) {
//     if (index == strincludes) {
//         console.log(char);
//     }
// }


