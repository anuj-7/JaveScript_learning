console.log(`========= unshift() ============`);
let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
// arrayOfNumbers[4] = 11;
console.log(arrayOfNumbers);
arrayOfNumbers.unshift(5);
arrayOfNumbers.unshift(0, 99, 77, 66);
console.log(arrayOfNumbers);
console.log(`========= unshift() ============`);
arrayOfNumbers.shift();
console.log(arrayOfNumbers);
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

console.log(`========= slice() ============`);
let arrayNumbers = [1, 3, 7, 8, 9, 3, 7]
let sliceElement = arrayNumbers.slice(2);
console.log(sliceElement);

console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers);
let splicedElements =  array_numbers.splice(4);
console.log(splicedElements);
console.log(array_numbers);

console.log(`============== Splice() insert & replacement ================`);
let array_number = [1, 3, 7, 8, 9, 3];
console.log(array_number);
 // let splicedElements =  array_number.splice(4); // It remove elements from 4th index to the end
 // let splicedElements =  array_number.splice(2, 3) // It removes the total  element starting from index 2
 // console.log(splicedElements);
 // let splicedElements =  array_number.splice(2, 0, 22 ) // Will insert element 22 before index 2, 0 - means don't replace
 // array_number.splice(2, 1, 22);
 array_number.splice(2, 1, 22, 44, 66);
 console.log(array_number);




// console.log(arrayOfNumbers.includes(7));
// console.log(arrayOfNumbers.includes(9));

for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; 
    // console.log(element);
}

for (const index in arrayOfNumbers) {
        const element = arrayOfNumbers[index];
        // console.log(element);
}
for (const index in arrayOfNumbers) {
    const element = arrayOfNumbers[index];
    // console.log(element);
}

let totalElements = arrayOfNumbers.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    // console.log(element);
    
}
