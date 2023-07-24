import { IHTMLElement } from './interfaces';

export function createElement(newElem: IHTMLElement): HTMLElement {
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
    //parentElem.append(tag);
    return tag;
}
