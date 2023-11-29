//import { getElementFromDOM } from '../../helpers/get-DOMEelements';
import { IHTMLElement } from '../../helpers/interfaces';
import { createElement } from '../../helpers/build-html-element';
import { PageId } from '../../helpers/emuns';

const Buttons = [
    {
        id: PageId.Garage,
        text: 'to garage',
    },
    {
        id: PageId.Winners,
        text: 'to winners',
    },
];
const headerTempl: IHTMLElement = {
    tag: 'header',
    class: ['header'],
};

export class Header {
    protected container: HTMLElement;

    constructor() {
        this.container = createElement(headerTempl);
    }

    protected renderPageBtns(): void {
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            buttonHTML.classList.add('button', 'button_type1');
            this.container.append(buttonHTML);
        });
    }

    public render(): HTMLElement {
        this.renderPageBtns();
        return this.container;
    }
}

/* Create header section */

/*const body: HTMLElement | undefined = getElementFromDOM('body');

const headerTempl: IHTMLElement = {
    tag: 'header',
    class: ['header'],
};

const garageBtnTempl: IHTMLElement = {
    tag: 'button',
    class: ['button', 'button_type1'],
    innerHTML: 'to garage',
};

const winnersBtnTempl: IHTMLElement = {
    tag: 'button',
    class: ['button', 'button_type1'],
    innerHTML: 'to winners',
};

export function createHeader(): void {
    if (body) {
        const header = createElement(headerTempl, body);
        createElement(garageBtnTempl, header);
        createElement(winnersBtnTempl, header);
    }
}
*/
