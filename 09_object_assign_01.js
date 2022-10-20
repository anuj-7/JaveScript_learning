console.log(`===================================== Object Assignment 1 =====================================`);
let teacher = {

}
teacher.fullName = "Gajanan Kharat",
teacher.city = "Aurangabad",
teacher.PIN = 431001
console.log(`Teacher name is ${teacher.fullName}.`);
console.log(`===============================================================================================`);
teacher.degrees = {
    degree1: "CSC",
    degree2: "PHD",
    degree3: "Adv Computing",
    degree4: "full developer"
}

teacher.certificates = {
    certificate1: "Hacker Rank Participation",
    certificate2: "Certificate in IFE course",
    certificate3: "Certificate in Adv Programming"
}
console.log(`Object Keys are '${Object.keys(teacher)}'.`);
console.log(`Object values are '${Object.values(teacher)}'.`);
console.log(`===============================================================================================`);
teacher.concatdeg = function () {
    return `Total degrees are ${this.degrees.degree1}, ${this.degrees.degree2}, ${this.degrees.degree3} & ${this.degrees.degree4}`;
}    
 console.log(teacher.concatdeg());
 console.log(`===============================================================================================`);
teacher.isMarried = true,
console.log(`Object Keys after property 'isMarried' addition are '${Object.keys(teacher)}'.`);
console.log(`Object values after property 'isMarried' addition are '${Object.values(teacher)}'.`);
console.log(`===============================================================================================`);
teacher.city = "Pune",
teacher.PIN = 411057
console.log(`Object Keys after properties modification are '${Object.keys(teacher)}'.`);
console.log(`Object values after properties modification are '${Object.values(teacher)}'.`);
console.log(`===============================================================================================`);
delete teacher.certificates.certificate2;
console.log(`Object Keys after deleting certificate2 are '${Object.keys(teacher.certificates)}'.`);
console.log(`Object values after properties certificate2 are '${Object.values(teacher.certificates)}'.`);
console.log(`===============================================================================================`);
teacher.certificates.certificate4 = "Certified Full stack developer"
console.log(`Object Keys after adding certificate4 are '${Object.keys(teacher.certificates)}'.`);
console.log(`Object values after adding certificate4 are '${Object.values(teacher.certificates)}'.`);
console.log(`===============================================================================================`);
console.log(teacher.certificates);

