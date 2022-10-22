
console.log(`                                                                                                   `);
console.log(`=============================================== Q.1 ===============================================`);
let array_nums = [20, 3, 4, 56, 90, 400, 49]
let array_nums2 = array_nums;
array_nums2.push(55, 66);

console.log(`Main array after clone array update = ${array_nums}.`);
console.log(`Clone array after update = ${array_nums2}.`);
console.log(`                                                                                                   `);
console.log(`=============================================== Q.2 ===============================================`);
const array_nums3 = [...array_nums]
array_nums.push(10, 25)

console.log(`Main array after update = ${array_nums}.`);
console.log(`Deep Clone array after main array update = ${array_nums3}.`);
console.log(`                                                                                                   `);
console.log(`=============================================== Q.3 ===============================================`);

let array_even = [2, 30, 14,8]
const array_merge = [...array_nums, ...array_even]
console.log(`After concat of array_nums and array_even = ${array_merge}`);
console.log(`                                                                                                   `);
console.log(`=============================================== Q.4 ===============================================`);

const employee_info = {
     emp_id: 27,
     emp_name: "John Doe",
     salary: {
         july_month: "40,0000 INR",
         aug_month: "50,0000 INR",
         jun_month: "65,0000 INR"
     },
     address: {
         locality: {
             colony: "OM Vrindavan Society",
             street: "Kanch Pokli, 431202",
         },
         city: "Mumbai",
         state: "Maharashtra",
         country: "India"
        },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
 }
console.log(`Given object is =`, employee_info);
console.log(`                                                                                                   `);
console.log(`=============================================== Q.5 ===============================================`);
console.log(`----------------------------------------------  a  ------------------------------------------------`);

console.log(`Employees address is =`, employee_info.address, employee_info.address.locality);
console.log(`----------------------------------------------  b  ------------------------------------------------`);

console.log(`Employees mobile number is =`, employee_info.mobiles);
console.log(`                                                                                                   `);
console.log(`=============================================== Q.6 ===============================================`);
let clone_emp_info = {...employee_info}
employee_info.address.locality.street = `chinch pokli, 411302`;
employee_info.mobiles[0] = "7776831341";

console.table(employee_info);
console.table(clone_emp_info);
console.log(`After update of street and mobile no. in main object it also updated in the cloned object.`);
console.log(`Due to spread operator deep cloning not done for nested object and array in the "employee_info" object.`);
console.log(`                                                                                                   `);
console.log(`=============================================== Q.7 ===============================================`);
console.log(`employee_info properties value after update using JSON.parse method.`);
let clone_emp_info2 = JSON.parse(JSON.stringify(employee_info))

employee_info.salary.july_month = `80,000 INR`;
employee_info.address.country  = `United kingdom`;
console.log(`----------------------------------------------  7.a  ------------------------------------------------`);
console.log(`Employee salary in cloned object = `, clone_emp_info2.salary.july_month);
console.log(`Employee salary in main object = `, employee_info.salary.july_month);
console.log(`----------------------------------------------  7.ab ------------------------------------------------`);
console.log(`Employee country in cloned object = `, clone_emp_info2.address.country);
console.log(`Employee country in main object = `, employee_info.address.country);
