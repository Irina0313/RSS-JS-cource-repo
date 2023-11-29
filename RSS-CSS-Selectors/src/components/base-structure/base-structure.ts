import { IHTMLElement } from '../../interfaces/html-elem';
import { createElement } from '../../modules/create-HTML-elem';

export function buildMain(): void {
    const body = document.querySelector('body') as HTMLElement;

    const mainTempl: IHTMLElement = {
        tag: 'main',
        class: ['main'],
    };

    const main = createElement(mainTempl, body);

    const wrapperMainTempl: IHTMLElement = {
        tag: 'div',
        class: ['wrapper-main'],
    };

    createElement(wrapperMainTempl, main);
}
