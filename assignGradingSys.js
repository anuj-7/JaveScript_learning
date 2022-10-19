console.log(`======================================================Q.1=============================================================`);
var gradeSystem = function (score) {
    if (score<35 && score>=0 && score!=" " && score!= null && score!="") {
        console.log(`Student score is ${score}.`);
        console.log(`Result = You are failed.`);
    }
    if (score>=35 && score<=100) {
        console.log(`Student score is ${score}.`);
        console.log(`Result = You are passed.`);
    }
    if (score>35 && score<60) {
        console.log(`and GRADE is 'C'.`);
    }
    if (score>60 && score<75) {
        console.log(`and GRADE is 'B'.`);
    }
    if (score>=75 && score<90) {
        console.log(`and GRADE is 'A'.`);
    }
    if (score>90 && score<100) {
        console.log(`and GRADE is 'A+'.`);
    }
    if (score<0 || score>100) {
        console.log(`Student score is ${score}.`);
        console.log(`Invalid score`);
    }
    if (typeof(score) == "string") {
        console.log(`Student score is ${score}.`);
        console.log(`Invalid Input`);
    }
    if (score== null || score == undefined) {
        console.log(`Student score is ${score}.`);
        console.log(`Invalid Input`);
    }
}
gradeSystem(66)
console.log(`======================================================Q.2=============================================================`);
gradeSystem(13)
console.log(`======================================================Q.3=============================================================`);
gradeSystem(`" "`)
console.log(`======================================================Q.4=============================================================`);
gradeSystem(98)
console.log(`======================================================Q.5=============================================================`);
gradeSystem(`"fifty Five"`)
console.log(`======================================================Q.6=============================================================`);
gradeSystem(35)
console.log(`======================================================Q.7=============================================================`);
gradeSystem(75)
console.log(`======================================================Q.8=============================================================`);
gradeSystem(null)
console.log(`======================================================Q.9=============================================================`);
gradeSystem(undefined)
console.log(`======================================================Q.10=============================================================`);
gradeSystem(-20)
console.log(`======================================================Q.11=============================================================`);
gradeSystem(55)
console.log(`======================================================Q.12=============================================================`);
gradeSystem(82)

