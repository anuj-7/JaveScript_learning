
console.log("******************************************** Q1 ********************************************************");
console.log(`1.3.1 -`);

function maleMarriageEligibility(gender, age, boyName) {
        var result = gender=="Male" && age>=21 
        ? `Hey ${boyName}, you are eligible for Marriage.` 
        : `Hey ${boyName}, you are Not eligible for marrige.`
        console.log(result);
}
maleMarriageEligibility("Male", 25, "Billgates");
console.log(`1.3.2 -`);
maleMarriageEligibility("male", 17, "stew Jobs");

console.log("******************************************** Q2 ********************************************************");
console.log(`1.6.1 -`);
function femaleMarriageEligibility(gender, age, girlName) {
        if(gender=="Female" && age>=21){console.log(`Hey ${girlName}, you are eligible for Marriage.`);}
        else{console.log(`Hey ${girlName}, you are Not eligible for marrige.`);}
}
femaleMarriageEligibility(`Female`, 16, "Jenifer")
console.log(`1.6.2 -`);
femaleMarriageEligibility(`Female`, 27, "Malinda Gates")
console.log("********************************************************************************************************");