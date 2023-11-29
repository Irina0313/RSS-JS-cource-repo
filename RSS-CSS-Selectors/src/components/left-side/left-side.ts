import { IHTMLElement } from '../../interfaces/html-elem';
import { createElement, createImageElement } from '../../modules/create-HTML-elem';
import { getCurrLevelValue, loadLevel } from '../../modules/levelsActions';
import { ISetObj } from '../../interfaces/level';
import { checkUserUnswer } from '../../modules/checkAnswer';
import { PassedLevelsWithHelp } from '../../classes/passedLevels';

import hljs from 'highlight.js';

//import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', html);

const leftSideTempl: IHTMLElement = {
    tag: 'div',
    class: ['left-side'],
};

/* Help link */
const helpTempl = {
    tag: 'h3',
    class: ['help'],
    innerHTML: "I'm stuck! Help, show the answer!",
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
const visuaGladeTempl: IHTMLElement = {
    tag: 'glade',
};
const visualItemsDivTempl: IHTMLElement = {
    tag: 'div',
    class: ['visual-for-check'],
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

const editorHeaderItem2: IHTMLElement = {
    tag: 'div',
    class: ['editor__header-item'],
    innerHTML: 'style.css',
};

const cssEditorMainTempl: IHTMLElement = {
    tag: 'div',
    class: ['css-editor__main'],
};

function buildLines(htmlViver: HTMLElement): void {
    const currLevel: object = getCurrLevelValue();
    const lines: string[] = currLevel['htmlViver' as keyof typeof currLevel]['pseudoCode'];
    const linesAmount: number = lines.length;
    let text = '';
    for (let i = 1; i < linesAmount + 1; i += 1) {
        text += `${i}<br />`;
    }
    const cssMainLinesTempl: IHTMLElement = {
        tag: 'div',
        class: ['main-lines'],
        innerHTML: text,
    };
    createElement(cssMainLinesTempl, htmlViver);
}

const inputWrapperTempl: IHTMLElement = {
    tag: 'div',
    class: ['input-wrapper'],
};

const inputTempl: IHTMLElement = {
    tag: 'input',
    class: ['css-editor__input'],
    attribute: { id: 'css-area', type: 'text', placeholder: 'Type in a CSS selector or level number to change it' },
};

const preTempl: IHTMLElement = {
    tag: 'pre',
    class: ['pre'],
};
const codeTempl: IHTMLElement = {
    tag: 'code',
    class: ['css-code', 'language-css'],
};

const cssEditorButtonTempl: IHTMLElement = {
    tag: 'button',
    class: ['css-editor__button'],
    innerHTML: 'enter',
};

/* HTML viver */
const htmlViverTempl: IHTMLElement = {
    tag: 'div',
    class: ['html-viver'],
};
const viverHeaderItem2: IHTMLElement = {
    tag: 'div',
    class: ['editor__header-item'],
    innerHTML: 'index.html',
};

export function buildLevelTitle(): void {
    /* Title */
    const currLevel = getCurrLevelValue();
    const levelTitleTempl = {
        tag: 'h1',
        class: ['level-title'],
        innerHTML: currLevel['title' as keyof typeof currLevel],
    };
    const leftSide = document.querySelector('.left-side') as HTMLElement;
    createElement(levelTitleTempl, leftSide);
}

export const delay = (ms: number): Promise<object> =>
    new Promise((res) => {
        setTimeout(res, ms);
    });

function buildHelpButton(): void {
    const leftSide = document.querySelector('.left-side') as HTMLElement;
    const helpBtn = createElement(helpTempl, leftSide);

    helpBtn.addEventListener('click', async () => {
        const input = document.querySelector('.css-editor__input') as HTMLInputElement;
        const currLevel = getCurrLevelValue();
        const rightAnswer: string = currLevel['answer' as keyof typeof currLevel][0];
        const code = document.querySelector('.css-code') as HTMLElement;
        input.value = '';
        code.innerHTML = '';
        for (const letter of rightAnswer) {
            await delay(400);
            input.value += letter;
            code.innerText = `${input['value' as keyof typeof input]}`;
            hljs.highlightElement(code);
        }
        const passedWhisHelp = new PassedLevelsWithHelp();
        passedWhisHelp.addPassed(currLevel['number' as keyof typeof currLevel]);
    });
}

export function changeLevelTitle(): void {
    const currLevel = getCurrLevelValue();
    const title = document.querySelector('.level-title') as HTMLElement;
    title.innerText = currLevel['title' as keyof typeof currLevel];
}

export function buildLeftSideHeader(): void {
    /* left side */

    const wrapperMain = document.querySelector('.wrapper-main') as HTMLElement;
    createElement(leftSideTempl, wrapperMain);
    buildLevelTitle();
    /* Help link */
    buildHelpButton();
}

export function buildVisualisation(): void {
    const leftSide = document.querySelector('.left-side') as HTMLElement;

    /* Visualisation */

    const visualisation: HTMLElement = createElement(visualizationTempl, leftSide);
    createElement(visualItemsTempl, visualisation);
    const divTempl = createElement(visualItemsDivTempl, visualisation);
    createElement(visuaGladeTempl, divTempl);
}

export function buildEditor(): void {
    const leftSide = document.querySelector('.left-side') as HTMLElement;
    /* Editor */
    const editor: HTMLElement = createElement(editorTempl, leftSide);
    const cssEditor: HTMLElement = createElement(cssEditorTempl, editor);
    const editorHeader: HTMLElement = createElement(editorHeaderTempl, cssEditor);
    createElement(editorHeaderItem2, editorHeader);
    const cssEditorMain: HTMLElement = createElement(cssEditorMainTempl, cssEditor);
    const inputWrapper: HTMLElement = createElement(inputWrapperTempl, cssEditorMain);
    createElement(inputTempl, inputWrapper);
    const button = createElement(cssEditorButtonTempl, cssEditorMain);
    const input = document.querySelector('input') as HTMLElement;
    const preEl = createElement(preTempl, inputWrapper);
    const codeEl: HTMLElement = createElement(codeTempl, preEl);
    input.oninput = function (): void {
        codeEl.innerText = `${input['value' as keyof typeof input]}`;
        hljs.highlightElement(codeEl);
    };
    button.addEventListener('click', () => {
        checkUserUnswer(String(input['value' as keyof typeof input]));
    });
    input.addEventListener('change', () => {
        const value = input['value' as keyof typeof input];
        if (isNaN(Number(value))) {
            checkUserUnswer(String(input['value' as keyof typeof input]));
        } else {
            loadLevel(Number(value));
        }
    });

    /* HTML viver */
    const htmlViver: HTMLElement = createElement(htmlViverTempl, editor);
    const viverEditorHeader: HTMLElement = createElement(editorHeaderTempl, htmlViver);
    createElement(viverHeaderItem2, viverEditorHeader);
    buildLines(htmlViver);
}

export function addVisualItems(): void {
    const visualItemsContainer = document.querySelector('.visual-items') as HTMLElement;
    const visualItemsGlade = document.querySelector('glade') as HTMLElement;
    const currLevel: object = getCurrLevelValue();
    const sets: ISetObj[] = currLevel['sets' as keyof typeof currLevel];
    const setsTempl: ISetObj[] = currLevel['setsTempl' as keyof typeof currLevel];
    sets.forEach(function (set: object): void {
        const values: IHTMLElement[] = Object.values(set);
        const keys: string[] = Object.keys(set);
        values.reduce(function (curr: HTMLElement, next: IHTMLElement, ind: number): HTMLElement {
            const newElem: HTMLElement = createImageElement(next, curr);
            newElem.classList.add(keys[ind]);
            return newElem;
        }, visualItemsContainer);
    });
    setsTempl.forEach(function (set: object): void {
        const values: IHTMLElement[] = Object.values(set);
        values.reduce(function (curr: HTMLElement, next: IHTMLElement): HTMLElement {
            const newElem: HTMLElement = createElement(next, curr);
            //newElem.classList.add(keys[ind]);
            return newElem;
        }, visualItemsGlade);
    });
}
