
let person = {
    fullname: "Sachin Tendulkar",
    city: "mumbai",
    Age: "42",
    ismarrid: true,
    adderess: {
        street: "AS club",
        pin_code: "123456",
        city: "Pune",
        state: "MH"
    },
    eat:function(){
        console.log(`I am vegetarian.`);
    },
    details: function () { 
        return `Details are : ${this.fullname}, ${this.Age}, ${this.adderess.city}`;
    }
}

console.log(Object.entries(person));


let pDetails = person.details();
console.log(pDetails);
console.log(`=========================`);
console.log(typeof person);
console.log(person.adderess);
console.log(person.adderess.street);
console.log(person.adderess.city);
person.adderess.landmark = "Near main road";

person.fullname = "Sachin Ramesh Tendulkar";
person.Pin = 123456;
person.profession = `Angular developer`;
delete person.Age;
// console.table(person);
console.log(person);
console.log(person.fullname);
console.log(person["city"]);

person.eat();