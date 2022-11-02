let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "kholi");

console.log(map);

console.log(`-------------- Adding duplicate value -------------`);
map.set(11, "Gautam")
console.log(map);

console.log(`-------------- Adding duplicate value -------------`);
map.set(33, "Gaungully");
console.log(map);

console.log(`-------------- Retrieving value -------------`);
let value = map.get(33);
console.log(value);
console.log(map.get(99));

console.log(`-------------- Deleting record -------------`);
map.delete(11);
console.log(map);

console.log(`-------------- Is key available -------------`);
console.log(map.has(77));

console.log(`-------------- Traversing over map collection -------------`);

let setOfKeys = map.keys();
console.log(setOfKeys);
for (const key of setOfKeys) {
    console.log(map.get(key));
}

console.log(`-------------- Adding objects in the Map -------------`);

class Person {
    constructor(rollNo, fullName, city, age, gender){
        this.rollNo = rollNo;
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.rollNo}  ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person(22, "Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person(33, "Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person(44, "Billgates", "USA", 67, "Male");

let mapOfPersons = new Map();
mapOfPersons.set(22, personAnil);
mapOfPersons.set(33, personAnita);
mapOfPersons.set(44, personBill);

let mapKeys = mapOfPersons.keys(); // 22   33   44
for (const key of mapKeys) {
     let personObject = mapOfPersons.get(key);
     personObject.details();

}


