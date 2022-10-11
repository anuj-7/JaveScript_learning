var test = function(arg1, arg2){
    console.log("Function expression", arg1);
    return "FE";
}
var returnValue = test(10, 20);
console.log(returnValue);

var square = function(val1){
    console.log(val1*val1);
}
square(5)
square(10)
square(20)