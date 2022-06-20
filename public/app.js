const me = {
    name: 'Trina',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(' I spent' + amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('Hello, ' + person.name);
};
greetPerson(me);
import { Invoice } from './models/invoice.js';
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
// console.log(form.children)
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
