console.log("============================================= Q1 =============================================");
var bigNumber = function(val1, val2){
    console.log(`Given number ====>`, val1, val2);
    var grtNumber = val1>val2 ? val1 : val2;
    console.log(`Greatest number from above is ====> ${grtNumber}`);

}
bigNumber(10, -10)
bigNumber(800, 899)
console.log("============================================= Q2 =============================================");
var evenOdd = function (val1){
    console.log(`Number ${val1} is even (true or false)====>`, val1%2==0 ? "True" : "false");
}
evenOdd(29)
evenOdd(44)
evenOdd(0)
evenOdd(101)
console.log("============================================= Q3 =============================================");
var strlength = function (arg1) {
    console.log(`String "${arg1}" is even or odd ====> `, (arg1.length)%2==0 ? "EVEN" : "ODD");
}
strlength("JavaScript")
strlength("developer")
strlength("Google")