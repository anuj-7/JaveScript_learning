var square = function(arg1, value){
    console.log(arg1, value*value);
}
square("Square of 5 =", 5);
square("Square of 6 =", 6);
square("Square of 25 =", 25);
square("Square of 100 =", 100);

console.log("===================================");

function check(arg1) {
    console.log(typeof check);
}
check()

console.log("===================================");

var area_of_triangle = function(area, base, height){
    console.log(area, (base*height)/2);
}
area_of_triangle("Area of triangle =", 45, 34)

console.log("===================================");

var area_of_rectangle = function(rect, length, width){
    console.log(rect, (length*width));
}
area_of_rectangle("Area of triangle =", 499, 917)

console.log("===================================");

var swap_values = function(arg1, arg2){
    console.log("Before Swap");
    console.log(arg1, arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("After Swap");
    console.log(arg1, arg2);
}
swap_values("Virat", "Anushka")
console.log("-----------------------------------");
swap_values(1000, 2000)

console.log("===================================");

var multString = function(value){
console.log(value);
console.log("Total character in available string =", value.length);
console.log("Index of character 's' =", value.indexOf("S"));
console.log("Index of string \"lang\" =", value.indexOf("lang"));
console.log("Last character using length property =", value.charAt(value.length-1));
console.log("Third last character using length property =", value.charAt(value.length-3));
}
multString("JavaScript the most popular language")