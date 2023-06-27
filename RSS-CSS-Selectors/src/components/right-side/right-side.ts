import { IHTMLElement } from '../../interfaces/html-elem';
import { createElement } from '../../modules/create-HTML-elem';
import { getCurrLevelValue, getLevelsAmount } from '../../modules/levelsActions';

/* Right side */

const rightSideTempl: IHTMLElement = {
    tag: 'div',
    class: ['right-side'],
};
const levelsHeaderTempl: IHTMLElement = {
    tag: 'div',
    class: ['levels-header'],
};

/* Levels */

const currLevel: object = getCurrLevelValue();
const levelsAmount: number = getLevelsAmount();

const levels: IHTMLElement = {
    tag: 'div',
    class: ['levels'],
    innerHTML: `Level ${currLevel['number' as keyof typeof currLevel]} of ${levelsAmount}`,
};

/* Level done */
const levelDone: IHTMLElement = {
    tag: 'span',
    class: ['level-done'],
    innerHTML: '&#10003',
};

/* Arrow */
const arrowLeft: IHTMLElement = {
    tag: 'span',
    class: ['arrow', 'arrow-left'],
    innerHTML: '&#8249;',
};
const arrowRight: IHTMLElement = {
    tag: 'span',
    class: ['arrow', 'arrow-right'],
    innerHTML: '&#8250',
};
const burger: IHTMLElement = {
    tag: 'div',
    class: ['burger'],
};
export function buildRightSide(): void {
    const wrapperMain = document.querySelector('.wrapper-main') as HTMLElement;

    const rightSide: HTMLElement = createElement(rightSideTempl, wrapperMain);
    const levelsHeader: HTMLElement = createElement(levelsHeaderTempl, rightSide);
    createElement(levels, levelsHeader);
    createElement(levelDone, levelsHeader);
    createElement(arrowLeft, levelsHeader);
    createElement(arrowRight, levelsHeader);
    createElement(burger, levelsHeader);
}
