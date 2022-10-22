
class Person{
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }

}
let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");
console.log(sachin);
console.log(rohit);
sachin.details();

console.log(`***********************************************************************************************************************`);

class Student{
  constructor(rollNo, schoolName){
    this.rollNo = rollNo;
    this.schoolName = schoolName;
  }
}
let s1 = new Student(123, `ABC`)
let s2 = new Student(485, `PQR`)

console.log(s1 instanceof Student); // intanceof used to check the "object is part of class?"
console.log(sachin instanceof Student);

console.log(s1.rollNo, s1.schoolName);
s1.rollNo = 897;
console.log(s1.rollNo);
console.log(s1);


