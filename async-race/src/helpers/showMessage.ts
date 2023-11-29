import { IHTMLElement } from './interfaces';
import { createElement } from './build-html-element';
import { getElementFromDOM } from './get-DOMEelements';

function hideMessage(message: HTMLElement): void {
    const listener = function (event: MouseEvent): void {
        if (event) {
            message.classList.add('message_hidden');
        }
        document.removeEventListener('click', listener);
    };

    document.addEventListener('click', listener);
}

export function showMessage(message: string, elem: HTMLElement): void {
    const messageTempl: IHTMLElement = {
        tag: 'div',
        class: ['message'],
        innerHTML: message,
    };
    if (elem.parentElement) {
        const message: HTMLElement = createElement(messageTempl);
        elem.parentElement.append(message);
        if (message) {
            setTimeout((): void => {
                hideMessage(message);
            }, 100);
        }
    }
}

export function showModalMessage(message: string): void {
    const messageTempl: IHTMLElement = {
        tag: 'div',
        class: ['message-modal'],
        innerHTML: message,
    };
    const parentEl = getElementFromDOM('.cars-wrapper') as HTMLElement;
    const messageEl: HTMLElement = createElement(messageTempl);
    parentEl.append(messageEl);
    document.onclick = (): void => {
        messageEl.remove();
    };
}
