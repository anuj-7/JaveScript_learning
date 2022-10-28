const fruits_seasonal = [" Banana", " Orange", " Apple", " Mango", " Water Melon"];
console.log(`Given elements in array = [${fruits_seasonal}]`);
console.log(`1. First element = "${fruits_seasonal[0]}" & last element = "${fruits_seasonal[fruits_seasonal.length-1]}".`);
fruits_seasonal.unshift(" Papaya");
console.log(`2. Array after adding " Papaya" before "Banana" = [${fruits_seasonal}].`);
fruits_seasonal.splice(fruits_seasonal.length-2, 1);
console.log(`3. Array after removing "Mango" = ${fruits_seasonal}.`);
fruits_seasonal.push(" Pineapple")
console.log(`4. Array after adding " Pineapple" in the last = [${fruits_seasonal}].`);
fruits_seasonal.splice(4, 0, " Dragon Fruit")
console.log(`5. Array after adding " Dragon Fruit" before " Water Melon" = [${fruits_seasonal}].`);
fruits_seasonal.splice(2, 1, " kiwi")
console.log(`6. Array after replacing " Orange" with " Kiwi" = [${fruits_seasonal}].`);
console.log(`7. Element with index 1 and 4 = "${fruits_seasonal[1]}" & "${fruits_seasonal[4]}".`);
console.log(`8. Last 3 elements(using length property) in Array = "${fruits_seasonal[fruits_seasonal.length-1]}", "${fruits_seasonal[fruits_seasonal.length-2]}", "${fruits_seasonal[fruits_seasonal.length-3]}".`);


