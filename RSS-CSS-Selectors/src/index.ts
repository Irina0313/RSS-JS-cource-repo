import './index.html';
import './style.scss';
import { buildMain } from './components/base-structure/base-structure';
import { buildLeftSideHeader, buildVisualisation, buildEditor, addVisualItems } from './components/left-side/left-side';
import { buildRightSide } from './components/right-side/right-side';
import { buildFooter } from './components/footer/footer';
import { buildPseudoCode } from './components/left-side/visualCode';
import { getEmitterMouseMove } from './classes/emiter';
import { IHTMLElement } from './interfaces/html-elem';
import { createElement } from './modules/create-HTML-elem';
window.addEventListener('load', function () {
    /* initialization */

    buildMain();
    buildLeftSideHeader();
    buildVisualisation();
    buildEditor();
    buildRightSide();
    buildFooter();
    /* add roses and butterflies */
    addVisualItems();
    /* add HTMLviver */
    buildPseudoCode();
    const visualItems = document.querySelectorAll('.visual-items>*');
    const pseudoCodeItems = document.querySelectorAll('.code');
    for (let i = 0; i < visualItems.length; i += 1) {
        for (let k = 0; k < pseudoCodeItems.length; k += 1) {
            if (pseudoCodeItems[k].classList.contains(visualItems[i].classList[2])) {
                getEmitterMouseMove(
                    visualItems[i],
                    visualItems[i].classList[2],
                    pseudoCodeItems[k],
                    pseudoCodeItems[k].classList[2]
                );
                createCodeAboveImage(pseudoCodeItems[k].classList[2], visualItems[i]);
            }
        }
    }
});

function createCodeAboveImage(classCodeElem: string, parentElem: HTMLElement | Element): void {
    const targetCodeElem = document.querySelectorAll(`code.${classCodeElem}`);
    let str = '';
    for (let i = 0; i < targetCodeElem.length; i += 1) {
        const el = targetCodeElem[i] as HTMLElement;
        str += el.innerText.trim();
    }
    const modalTempl: IHTMLElement = {
        tag: 'span',
        class: ['modal-str', 'hidden'],
    };
    const elem = createElement(modalTempl, parentElem as HTMLElement);
    elem.innerText = str;
}
