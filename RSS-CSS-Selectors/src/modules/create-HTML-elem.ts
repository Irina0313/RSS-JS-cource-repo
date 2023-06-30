import { IHTMLElement } from '../interfaces/html-elem';

export function createElement(newElem: IHTMLElement, parentElem: HTMLElement): HTMLElement {
    const tag = document.createElement(newElem.tag);
    newElem.class.forEach(function (item: string): void {
        tag.classList.add(`${item}`);
    });
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
    newElem.class.forEach(function (item: string): void {
        tag.classList.add(`${item}`);
    });
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
