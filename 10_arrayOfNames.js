let arrayOfNames = ['Kamat', 'Memon', 'Nashpati', 'Taimur', 'Menon', 'Kamat', 'Andy', "Taimur"];
console.log(`a. Given array - [${arrayOfNames}]`);
console.log(`-------------------------------------------------------------`);

let newArrayOfNames = [... new Set(arrayOfNames)]

console.log(`b. Given array after removing duplicates - ${newArrayOfNames}`);
console.log(`-------------------------------------------------------------`);

console.log(`c. Count of duplicates removed from given array is -`, arrayOfNames.length-newArrayOfNames.length);

console.log(`-------------------------------------------------------------`);
console.log(`d. Total count of unique element available in array after removing duplicates -`, newArrayOfNames.length);
