import { IHTMLElement } from '../../interfaces/html-elem';
/* images import */

import RedRose from '../../assets/img/flowers/rose.png';

/*function getImageLink(image): string{
const newImageEl: HTMLImageElement = new Image(image);
newImageEl.src = image;
}*/
export class VisualItemsTemplates {
    public redRose: IHTMLElement = {
        tag: 'rose',
        class: ['rose', 'red-rose'],
        attribute: { width: '65' },
        imageLink: RedRose,
    };
    public blueFly: IHTMLElement = {
        tag: 'butterfly',
        class: ['butterfly', 'blue-burtterfly'],
        attribute: { src: './assets/img/blue-but.gif' },
    };
}
