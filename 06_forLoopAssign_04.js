
console.log(`================================================ Q1 ================================================`);

var reverseString = function (String0) {
    var strlength = String0.length - 1;
    var  reverseStr = "";
    for (let index = strlength; index >= 0; index--) {
        reverseStr = reverseStr + String0.charAt(index);
        console.log(String0.charAt(index));
    }
    console.log(reverseStr);
}
z