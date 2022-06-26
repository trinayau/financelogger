export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.textContent = heading;
        li.append(h4, item.format());
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
