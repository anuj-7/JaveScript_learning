let setOfNumbers = new Set ();
console.log(typeof setOfNumbers);
console.log(`========= Adding element into the set collection =========`);
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);

// console.log(setOfNumber);
// console.log(`========= Adding duplicate element =========`);
// setOfNumber.add(7);
// console.log(setOfNumber);

// console.log(`========= Checking total element =========`);
// console.log(setOfNumber.size);

// console.log(`========= Deleting element =========`);
// setOfNumber.delete(9);
// console.log(setOfNumber);

console.log("====== Adding duplicate element =======");
setOfNumbers.add(7);
console.log(setOfNumbers);

console.log("====== Checking number elements available into set =======");
console.log(setOfNumbers.size);

console.log("====== Deleting element 9 =======");
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log("====== Check whether element 7 available into set or not =======");
let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));

console.log("====== Traversing set =======");
for (const element of setOfNumbers) {
    console.log(element);
}

console.log("====== Removing duplicate element from array =======");
let arrayNumbers = [2, 3, 4, 5, 3, 6, 5];
// let arrayUniqueNumber = new Set(arrayNumbers); // it will convert array to set.
let arrayUniqueNumber = [...new Set(arrayNumbers)];  // to again convert set into array we use spread operator.
console.log(arrayUniqueNumber);

