'use strict'

function display(name, age) {
    console.log(typeof age);
}
display("Anil", )


function display1(name1, ...myName) {
    console.log(name1, myName);
    console.log(typeof myName);
}
display1("Anil", 31, "city", true);

function divide(x, y=1){
    console.log(x/y);
}
divide(10);

