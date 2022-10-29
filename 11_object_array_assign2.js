
console.log(`========================================================================================================================================`);
class bank {
    constructor (bank_name, location, account_no, ifsc, interest_rate){
    this.bank_name = bank_name;
    this.location = location;
    this.account_no = account_no;
    this.ifsc = ifsc;
    this.interest_rate = interest_rate; 
}
details(){
    console.log(`Bank details are ${this.bank_name}, ${this.location}, ${this.account_no}, ${this.ifsc}, ${this.interest_rate}`);
}
}

let axis_bank = new bank ("Axis Bank", "Pimpri", 10000254789, "AXI0001456", "5%");
let sbi_bank = new bank ("SBI Bank", "Chinchwad", 10002200006472, "SBI000099314", "4.5");
let icici_bank = new bank ("ICICI Bank", "Nigdi", 1600047006384, "ICICI00003875", "5.5%");
let kotak_bank = new bank ("Kotak Bank", "Chakan", 4000590088467, "KOT00014567", "6.5%");
let hdfc_bank = new bank ("HDFC Bank", "Moshi", 10001200563487, "HDFC000034872", "4.75%");
let punjab_bank = new bank ("Punjab_bank", "kothrud", "17000340052477", "PUN000197632", "6%");

let array_add = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, punjab_bank]
console.log(`C. All objects bank_name and location are -`);
for (const element of array_add) {
    console.log(`${element.bank_name}, ${element.location}`);
}
console.log(`========================================================================================================================================`);
console.log(`D. From Array object which have name Kotak Bank = `);
for (const element of array_add) {
    if (element.bank_name==="Kotak Bank") {
        console.log(element);
    }
}
console.log(`========================================================================================================================================`);
console.log(`E. All Object details from array using for of loop -`);
for (const element of array_add) {
    console.log(`${element.bank_name}, ${element.location}, ${element.account_no}, ${element.ifsc}, ${element.interest_rate}`);
}

