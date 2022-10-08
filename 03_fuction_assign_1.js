// 1.
console.log("===========No Arguments & No return value=============");
function noReturn(){
    console.log("My name is Anuj Chauhan.");
    console.log("I am loving Javascript.");
}
noReturn()
// 2.
console.log("===========With Argument concat two value=============");
function myName(firstname, lastname) {
    console.log(firstname + lastname);
}
 myName("Anuj", "Chauhan")
// 3.
console.log("===========Swapping Values=============");
 function swap_values(value1, value2){
    console.log("-----------------Before Swap-----------------");
    console.log(value1, value2);
    console.log("-----------------After Swap-----------------");
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(value1, value2);
 }
 swap_values("Virat", "Anushka")
 swap_values(1000, 2000)
//  4.
 console.log("===========Addition three values=============");
 function add_three_numbers(num1, num2, num3){
    return num1+num2+num3;
 }
 var addition = add_three_numbers(10.23, 600, 40);
 console.log(addition);