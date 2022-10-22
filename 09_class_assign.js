
console.log(`============================================== Q.1 ==============================================`);
console.log(`Class - Vehicle`);
class Vehicle{
    constructor(name, manufacturer, color, engine, isSportsCar){
        this.name = name;
        this.manufacturer = manufacturer; 
        this.color = color; 
        this.engine = engine;
        this.isSportsCar = isSportsCar;
    }
    details(){
        console.log(`Object Details - ${this.name}, ${this.manufacturer}, ${this.color}, ${this.engine}, ${this.isSportsCar}`);
    }
}
let mustang = new Vehicle("Mustang", "Ford", `Red`, `4951 cc`, true)
let swift = new Vehicle("Swift", "Suzuki", `Black`, `1191 cc`, false)
let verna = new Vehicle("Verna", "Hyundai", `Blue`, `1497 cc`, false)
let huracan = new Vehicle("Huracan", "Lamborghini", `Yellow`, `5204 cc`, true)
let alto = new Vehicle("Alto", "Suzuki", `Gray`, `796 cc`, true)
console.log(mustang);
console.log(swift);
console.log(verna);
console.log(huracan);
console.log(alto);

console.log(`============================================== Q.2 ==============================================`);
console.log(`Class - College`);
class College{
    constructor(name, departments, city, technical){
        this.name = name;
        this.departments = departments,
        this.city = city;
        this.technical = technical;
    }
}
let thapar = new College("Thapar Institute of Engineering", 7, "Patiala", true);
let pilani = new College(`BITS Pilani`, 8, `Pilani`, true)
let hindu = new College(`Hindu college`, 5, `delhi`, false);
let symbiosis = new College(`Symbiosis college of Arts & Commerce`, 6, `Pune`, false);
console.log(thapar);
console.log(pilani);
console.log(hindu);
console.log(symbiosis);

console.log(`============================================== Q.3 ==============================================`);
console.log(`"Trverse object"`);
function traverse_object(arg1) {
    for (const key in arg1) {
        if (Object.hasOwnProperty.call(arg1, key)) {
            const element = arg1[key];
            console.log(`${key} = ${element}`);
        }
    }
}
traverse_object(mustang);
console.log(`                                                                                                    `);
traverse_object(swift);
console.log(`                                                                                                    `);
traverse_object(verna);
console.log(`                                                                                                    `);
traverse_object(huracan);
console.log(`                                                                                                    `);
traverse_object(alto);
console.log(`----------------------------------------------------------------------------------------------------`);
traverse_object(thapar);
console.log(`                                                                                                    `);
traverse_object(pilani);
console.log(`                                                                                                    `);
traverse_object(hindu);
console.log(`                                                                                                    `);
traverse_object(symbiosis);

console.log(`============================================== Q.3 ==============================================`);

// var fibonacci_series = function (n) 
// {
//   if (n===1) 
//   {
//     return [0, 1];
//   } 
//   else 
//   {
//     var s = fibonacci_series(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };
//  console.log(fibonacci_series(7));

function fibonacci (n){
    console.log(`Fibonacci series till - ${n}`);
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
    let count = 0;
    for (let index = 0; index <=n; index++) {
        let temp = a+b;
        a = b;
        b = temp;
        console.log(temp);
    }

}
fibonacci(4);
console.log(`-------------------------------------------------------------------------------------------------`);
fibonacci(10);
console.log(`-------------------------------------------------------------------------------------------------`);
fibonacci(15);

function fabo(myNumber) {
    if (myNumber == 0) {
        return 0;
    }
    if( myNumber == 1) {
        return 1;
    }
    let fN = 0; sN=1; nextN = fN + sN;
    
    for (let index = 0; index < myNumber; index++) {
        fN = sN;
        sN = nextN;
        nextN = fN + sN;
        console.log(nextN);
    }
}

fabo(5);
