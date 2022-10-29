
console.log(`========================================================================================================================================`);
let bank_sbi = {
    bankName: "State bank of india",
    IFSC_code: "SBI00001254",
    account_type: "Saving",
    locker_available: true,
    // details1: function () {
    //     return `${this.bankName}, ${this.IFSC_code}, ${this.account_type}, ${this.locker_available}`;
    // }
}
let bank_location = {
    street: "FC road",
    city: "Pune",
    pin_code: 411005,
    // details2: function () {
    //     return `${this.street}, ${this.city}, ${this.pin_code}`;
    // }
}
let sbi_clone = Object.assign({}, bank_sbi);
let location_clone = Object.assign({}, bank_location);
console.log(`3.1.1 first cloned Object details using Object.assign method = "${sbi_clone.bankName}, ${sbi_clone.IFSC_code}, ${sbi_clone.account_type}, ${sbi_clone.locker_available}".`);
console.log(`3.1.2 Second cloned Object details using Object.assign method = "${location_clone.street}, ${location_clone.city}, ${location_clone.pin_code}".`);
// let concat_object = Object.assign({}, sbi_clone, location_clone);
// console.log(`3.1.3 Concated cloned Object details using Object.assign method = "${concat_object.details1()}, ${concat_object.details2()}".`);
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);
let sbi_clone2 = { ...bank_sbi }
let location_clone2 = { ...bank_location }
console.log(`3.2.1 first cloned Object details using spread method = "${sbi_clone2.bankName}, ${sbi_clone2.IFSC_code}, ${sbi_clone2.account_type}, ${sbi_clone2.locker_available}".`);
console.log(`3.2.2 Second cloned Object details using spread method = "${location_clone2.street}, ${location_clone2.city}, ${location_clone2.pin_code}".`);
console.log(`========================================================================================================================================`);

let rate_of_interest = {
    home_loan_interest: "12%",
    personal_loan_interest: "10%",
    due_interest: "4.5%",
    // details3: function () {
    //     return `${this.home_loan_interest}, ${this.personal_loan_interest}, ${this.due_interest}`;
    // }
}

let sbi_details = Object.assign({}, bank_sbi, bank_location, rate_of_interest)
console.log(`5. After merging three object bank_sbi, bank_location & rate_of_interest merged object details = "${sbi_details.bankName}, ${sbi_details.IFSC_code}, ${sbi_details.account_type}, ${sbi_details.locker_available}, ${sbi_details.street}, ${sbi_details.city}, ${sbi_details.pin_code}, ${sbi_details.home_loan_interest}, ${sbi_details.personal_loan_interest}, ${sbi_details.due_interest}"`)
console.log(sbi_details);

console.log(`========================================================================================================================================`);
console.log(`6. After traverse the merged object -`);
let array1 = [sbi_details]

for (const val in sbi_details) {
    console.log(`${val} - ${sbi_details[val]}`);
}
// for (let index = 0; index < array1.length; index++) {
//     const element = array1[index];
//     console.log(element);
    
// }
