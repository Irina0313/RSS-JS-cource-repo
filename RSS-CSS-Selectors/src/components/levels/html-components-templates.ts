import { IHTMLElement } from '../../interfaces/html-elem';
/* images import */

import RedRose from '../../assets/img/flowers/rose.png';
import YellowRose from '../../assets/img/flowers/yellow-rose.png';

export class VisualItemsTemplates {
    public redRose: IHTMLElement = {
        tag: 'rose',
        class: ['rose', 'red-rose'],
        attribute: { width: '65' },
        imageLink: RedRose,
    };
    public yellowRose: IHTMLElement = {
        tag: 'rose',
        class: ['rose', 'yellow-rose'],
        attribute: { width: '65' },
        imageLink: YellowRose,
    };
    public yellowRoseAnimated: IHTMLElement = {
        tag: 'rose',
        class: ['rose', 'yellow-animated'],
        attribute: { width: '65' },
        imageLink: YellowRose,
    };
    public animated: IHTMLElement = {
        tag: 'rose',
        class: ['rose', 'animated'],
        attribute: { width: '65' },
        imageLink: RedRose,
    };
    public butterflyOnGrass: IHTMLElement = {
        tag: 'butterfly',
        class: ['butterfly', '.butterfly-grass'],
    };
    public blueFly: IHTMLElement = {
        tag: 'butterfly',
        class: ['butterfly', 'blue-burtterfly'],
    };
    public blueFlyStatic: IHTMLElement = {
        tag: 'butterfly',
        class: ['butterfly', 'blue-burtterfly-static'],
    };
    public blueFlyStaticGrass: IHTMLElement = {
        tag: 'butterfly',
        class: ['butterfly', 'blue-burtterfly-grass'],
    };
    public roseTempl: IHTMLElement = {
        tag: 'rose',
    };
    public roseTemplWithYellowClass: IHTMLElement = {
        tag: 'rose',
        class: ['yellow'],
    };
    public roseTemplWithYellowClassAttr: IHTMLElement = {
        tag: 'rose',
        class: ['yellow'],
        attribute: { ['data-purpose']: 'yellow-bouquet' },
    };
    public roseTemplWithRedClass: IHTMLElement = {
        tag: 'rose',
        class: ['red'],
    };
    public roseTemplWithRedClassAttr: IHTMLElement = {
        tag: 'rose',
        class: ['red'],
        attribute: { ['data-purpose']: 'red-bouquet' },
    };
    public buttrflyTempl: IHTMLElement = {
        tag: 'butterfly',
    };
    public buttrflyIdBlue: IHTMLElement = {
        tag: 'butterfly',
        attribute: { id: 'blue' },
    };
}
