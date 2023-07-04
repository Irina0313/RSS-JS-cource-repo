import { IHTMLElement } from '../interfaces/html-elem';

export function createElement(newElem: IHTMLElement, parentElem: HTMLElement): HTMLElement {
    const tag = document.createElement(newElem.tag);
    if (newElem.class) {
        newElem.class.forEach(function (item: string): void {
            tag.classList.add(`${item}`);
        });
    }
    if (newElem['innerHTML']) {
        tag.innerHTML = newElem['innerHTML'];
    }
    if (newElem['attribute']) {
        const attributeObj: object | undefined = newElem['attribute'];
        const getKeysArr = function (): string[] | void {
            if (attributeObj) {
                return Object.keys(attributeObj);
            }
        };
        const keysArr = getKeysArr();
        if (attributeObj && keysArr) {
            for (let i = 0; i < keysArr.length; i += 1) {
                tag.setAttribute(keysArr[i], attributeObj[keysArr[i] as keyof typeof attributeObj]);
            }
        }
    }

    parentElem.append(tag);
    return tag;
}

export function createImageElement(newElem: IHTMLElement, parentElem: HTMLElement): HTMLElement {
    const tag = document.createElement(newElem.tag);
    if (newElem.class) {
        newElem.class.forEach(function (item: string): void {
            tag.classList.add(`${item}`);
        });
    }
    if (newElem.imageLink) {
        const imageLink: string = newElem.imageLink;
        const newImage: HTMLImageElement = new Image();
        newImage.src = imageLink;

        const imageElem = tag.appendChild(newImage);
        if (newElem['attribute']) {
            const attributeObj: object | undefined = newElem['attribute'];
            const getKeysArr = function (): string[] | void {
                if (attributeObj) {
                    return Object.keys(attributeObj);
                }
            };
            const keysArr = getKeysArr();
            if (attributeObj && keysArr) {
                for (let i = 0; i < keysArr.length; i += 1) {
                    imageElem.setAttribute(keysArr[i], attributeObj[keysArr[i] as keyof typeof attributeObj]);
                    tag.setAttribute(keysArr[i], attributeObj[keysArr[i] as keyof typeof attributeObj]);
                }
            }
        }
    }
    parentElem.append(tag);
    return tag;
}

export function deleteHTML(...args: HTMLElement[]): void {
    args.forEach((item): void => {
        item.remove();
        console.log('element deleted');
    });
}

export function deleteChildren(elem: HTMLElement): void {
    const element = elem.children[0] as HTMLElement;
    if (element) {
        element.remove();
        deleteChildren(elem);
    }
}

export function showErrorMessage(message: string): void {
    const body = document.querySelector('body') as HTMLElement;
    const popUpWrapperTempl: IHTMLElement = {
        tag: 'div',
        class: ['pop-up-wrapper'],
    };

    const popUpWrapper: HTMLElement = createElement(popUpWrapperTempl, body);
    const popUpContainerTempl: IHTMLElement = {
        tag: 'div',
        class: ['pop-up-container'],
    };
    const popUpContainer: HTMLElement = createElement(popUpContainerTempl, popUpWrapper);
    const popUpMessageTempl: IHTMLElement = {
        tag: 'div',
        class: ['pop-up-message'],
        innerHTML: message,
    };
    createElement(popUpMessageTempl, popUpContainer);
    const popUpButtonTempl: IHTMLElement = {
        tag: 'button',
        class: ['pop-up-button'],
        innerHTML: 'OK',
    };
    const popUpButton = createElement(popUpButtonTempl, popUpContainer);
    popUpButton.addEventListener('click', () => {
        deleteHTML(popUpWrapper);
        const input = document.querySelector('.css-editor__input') as HTMLElement;
        input.focus();
    });
}
