
let reverseString = function (String0) {
    var strLn = String0.length-1
    var revstr = "";
    for (let index = strLn; index >= 0; index--) {
        if (String0.charAt(index)!=" ") {
           revstr = revstr + String0.charAt(index);
    }
}
    console.log(`Given string ${String0} after reverse without spaces = ${revstr}`);

}
reverseString("Hard work always pay back.")
console.log(`---------------------------------------------------------------------------------------------------`);
reverseString("Soon i will be IT angular champ")