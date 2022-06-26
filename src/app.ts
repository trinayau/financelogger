import { Payment } from './models/payment.js';
import { Invoice } from './models/invoice.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// This var must follow the interface HasFormatter
// Making sure that whatever object is stored inside docOne variable has this interface
// Structures code and makes things more secure

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'work on the mario website', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);

// // restricting array of objects that only implement HasFormatter interface
// let docs: HasFormatter[]= [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);

// const invOne = new Invoice('mario', 'work on mario website', 250);
// const invTwo = new Invoice('luigi', 'work on luigi website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    console.log(doc);
})
