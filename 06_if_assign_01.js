
console.log("******************************************** Q1 ********************************************************");
var oddEven = function (val) {
    if (val%2==0) {
        console.log(`Given number "${val}" is ===> EVEN.`);
    }
    else{
        console.log(`Given number "${val}" is ===> ODD.`);
    }    
}
oddEven(45)
console.log("-------------------------------------------------------------");
oddEven(70)
console.log("-------------------------------------------------------------");
oddEven(67)
console.log("-------------------------------------------------------------");
oddEven(98)

console.log("******************************************** Q2 ********************************************************");
console.log("Age eligibility for vote is equal or greater than 20.");
console.log("-------------------------------------------------------------");
var voteEligibility = function (age) {
    if (age>=20) {
        console.log(`Age = ${age}`);
        console.log(`You are eligible for vote.`);
    }
    else{
        console.log(`Age = ${age}`);
        console.log(`You are not eligible for vote.`);
    }
    
}
voteEligibility(18)
console.log("-------------------------------------------------------------");
voteEligibility(20)
console.log("-------------------------------------------------------------");
voteEligibility(17)
console.log("-------------------------------------------------------------");
voteEligibility(40)

console.log("******************************************** Q3 ********************************************************");
console.log(`Given string "JavaScript - ES6" is contains more than 10 character:-`);
var strlength = function(arg1){
    if (arg1.length>10) {
    console.log(true);
}
else{
    console.log(false);
}
}
strlength(`JavaScripts - ES6`)

console.log("******************************************** Q4 ********************************************************");
console.log(`Is Given string "JavaScript Language" start with "Java" :-`);

var startstr = function(arg1){
    var strtWith = arg1.startsWith(`Java`);
    // console.log(strtWith);
    if (strtWith==true) {
    console.log(`Yes`);
}
else{
    console.log(`No`);
}
}
startstr(`JavaScripts Language`)


console.log("********************************************************************************************************");