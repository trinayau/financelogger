import { ListTemplate } from './models/ListTemplate.js';
import { Payment } from './models/payment.js';
import { Invoice } from './models/invoice.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    // specify type explicitly, we are expecting a specific type in our constructor
    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');

})
