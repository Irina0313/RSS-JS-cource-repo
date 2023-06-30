import { IHTMLElement } from '../../interfaces/html-elem';
import { createElement, createImageElement } from '../../modules/create-HTML-elem';
import { getCurrLevelValue } from '../../modules/levelsActions';
import { ISetObj } from '../../interfaces/level';

/* left side */
const leftSideTempl: IHTMLElement = {
    tag: 'div',
    class: ['left-side'],
};

/* Title */
const currLevel = getCurrLevelValue();
const levelTitleTempl = {
    tag: 'h1',
    class: ['level-title'],
    innerHTML: currLevel['title' as keyof typeof currLevel],
};
/* Help link */
const helpTempl = {
    tag: 'h3',
    class: ['help'],
    innerHTML: "Help! I'm stuck!",
};
/* Visualisation */
const visualizationTempl: IHTMLElement = {
    tag: 'section',
    class: ['visualization'],
};
const visualItemsTempl: IHTMLElement = {
    tag: 'div',
    class: ['visual-items'],
};

/* Grass */
const grassTempl: IHTMLElement = {
    tag: 'div',
    class: ['grass'],
};

const grassImgTempl: IHTMLElement = {
    tag: 'div',
    class: ['grass__image'],
};

/* Editor */
const editorTempl: IHTMLElement = {
    tag: 'section',
    class: ['editor'],
};

const cssEditorTempl: IHTMLElement = {
    tag: 'div',
    class: ['css-editor'],
};

const editorHeaderTempl: IHTMLElement = {
    tag: 'div',
    class: ['editor__header'],
};

const editorHeaderItem1: IHTMLElement = {
    tag: 'div',
    class: ['editor__header-item'],
    innerHTML: 'CSS editor',
};

const editorHeaderItem2: IHTMLElement = {
    tag: 'div',
    class: ['editor__header-item'],
    innerHTML: 'style.css',
};

const cssEditorMainTempl: IHTMLElement = {
    tag: 'div',
    class: ['css-editor__main'],
};

const cssMainLinesTempl: IHTMLElement = {
    tag: 'div',
    class: ['main-lines'],
    innerHTML:
        '1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20',
};

const inputWrapperTempl: IHTMLElement = {
    tag: 'div',
    class: ['input-wrapper'],
};

const inputTempl: IHTMLElement = {
    tag: 'input',
    class: ['css-editor__input'],
    attribute: { type: 'text', placeholder: 'Type in a CSS selector' },
};

const cssEditorButtonTempl: IHTMLElement = {
    tag: 'button',
    class: ['css-editor__button'],
    innerHTML: 'enter',
};

const cssEditorRulesTempl: IHTMLElement = {
    tag: 'div',
    class: ['css-editor__rules'],
    innerHTML: `<br />{<br />
  /* Styles would go here. */<br />}<br />`,
};

/* HTML viver */
const htmlViverTempl: IHTMLElement = {
    tag: 'div',
    class: ['html-viver'],
};
const viverHeaderItem1: IHTMLElement = {
    tag: 'div',
    class: ['editor__header-item'],
    innerHTML: 'HTML viver',
};

const viverHeaderItem2: IHTMLElement = {
    tag: 'div',
    class: ['editor__header-item'],
    innerHTML: 'index.html',
};

export function buildLeftSideHeader(): void {
    /* left side */

    const wrapperMain = document.querySelector('.wrapper-main') as HTMLElement;
    const leftSide = createElement(leftSideTempl, wrapperMain);

    /* Title */

    createElement(levelTitleTempl, leftSide);

    /* Help link */

    createElement(helpTempl, leftSide);
}

export function buildVisualisation(): void {
    const leftSide = document.querySelector('.left-side') as HTMLElement;

    /* Visualisation */

    const visualisation: HTMLElement = createElement(visualizationTempl, leftSide);
    createElement(visualItemsTempl, visualisation);

    /* Grass */
    const grass: HTMLElement = createElement(grassTempl, visualisation);
    createElement(grassImgTempl, grass);
}

export function buildEditor(): void {
    const leftSide = document.querySelector('.left-side') as HTMLElement;

    /* Editor */

    const editor: HTMLElement = createElement(editorTempl, leftSide);
    const cssEditor: HTMLElement = createElement(cssEditorTempl, editor);
    const editorHeader: HTMLElement = createElement(editorHeaderTempl, cssEditor);
    createElement(editorHeaderItem1, editorHeader);
    createElement(editorHeaderItem2, editorHeader);
    const cssEditorMain: HTMLElement = createElement(cssEditorMainTempl, cssEditor);
    createElement(cssMainLinesTempl, cssEditorMain);
    const inputWrapper: HTMLElement = createElement(inputWrapperTempl, cssEditorMain);
    createElement(inputTempl, inputWrapper);
    createElement(cssEditorButtonTempl, inputWrapper);
    createElement(cssEditorRulesTempl, inputWrapper);

    /* HTML viver */
    const htmlViver: HTMLElement = createElement(htmlViverTempl, editor);
    const viverEditorHeader: HTMLElement = createElement(editorHeaderTempl, htmlViver);
    createElement(viverHeaderItem1, viverEditorHeader);
    createElement(viverHeaderItem2, viverEditorHeader);
    createElement(cssMainLinesTempl, htmlViver);
}

export function addVisualItems(): void {
    const visualItemsContainer = document.querySelector('.visual-items') as HTMLElement;
    const currLevel: object = getCurrLevelValue();
    const sets: ISetObj[] = currLevel['sets' as keyof typeof currLevel];
    sets.forEach(function (set: object, ind: number): void {
        const values: IHTMLElement[] = Object.values(set);
        values.reduce(function (curr: HTMLElement, next: IHTMLElement): HTMLElement {
            const newElem: HTMLElement = createImageElement(next, curr);
            newElem.classList.add(currLevel['setsIdenticClasses' as keyof typeof currLevel][ind]);
            return newElem;
        }, visualItemsContainer);
    });
    //const newImg: HTMLImageElement = new Image(Cofee);
    //newImg.src = Cofee;
    //console.log(newImg);
    //const image1 = visualItemsContainer.appendChild(newImg);
    //image1.setAttribute('width', '65');
    //image1.classList.add('cofee');
}
