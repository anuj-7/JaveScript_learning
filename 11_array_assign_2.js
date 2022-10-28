const array_numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`1. Total available elements or length = ${array_numbers.length}`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------`);
console.log(`2. First element in given array = ${array_numbers[0]} & last element in given array = ${array_numbers[array_numbers.length-1]}.`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------`);
console.log(`3. Third last element in given array = ${array_numbers[array_numbers.length-3]}.`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------`);
console.log(`4. All even number in given array -`);
for (let index = 0; index <= array_numbers.length; index++) {
    const element = array_numbers[index];
    if (element%2 == 0) {
        console.log(element);
    }    
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------`);
console.log(`5. All odd number in given array -`);
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    if (element%2 != 0) {
        console.log(element);
    }    
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------`);
console.log(`6. All even position number in given array -`);
for (let index = 0; index <= array_numbers.length; index++) {
    const element = array_numbers[index];
    if (index%2 == 0) {
        console.log(element);
    }    
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------`);
console.log(`7. All odd position number in given array -`);
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    if (index%2 != 0) {
        console.log(element);
    }    
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------`);
// console.log(`8. Sum of all elements in given array = `);
let sum_elements = 0; 
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    sum_elements = sum_elements + element; 
}
console.log(`8. Sum of all elements in given array = "${sum_elements}".`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------`);
console.log(`9. Number which are multiple  of 5 in given array -`);
for (let index = 0; index <= array_numbers.length; index++) {
    const element = array_numbers[index];
    if (element%5 == 0) {
        console.log(element);
    }    
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------`);
console.log(`10. Is number 115 available in given array = ${array_numbers.includes(115)}`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------`);
console.log(`10. Is number 23 available in given array = ${array_numbers.includes(23)}`);