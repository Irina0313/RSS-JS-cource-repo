import { IHTMLElement } from '../interfaces/html-elem';
import { createElement } from '../modules/create-HTML-elem';

type strObj = { [key: string]: string };
type func = (param: strObj) => void;

export class EventEmitter {
    public events: { [key: string]: func[] };
    constructor() {
        this.events = {};
    }

    public emit(eventName: string, data: strObj): void {
        const event = this.events[eventName];
        if (event) {
            event.forEach((fn: func) => {
                fn(data);
            });
        }
    }

    public subscribe(eventName: string, fn: func): void {
        if (!this.events[eventName]) {
            this.events[eventName] = [fn];
        }
        this.events[eventName].push(fn);
        /*return () => {
            this.events[eventName] = this.events[eventName].filter((eventFn) => fn !== eventFn);
        };*/
    }
}

// eslint-disable-next-line max-lines-per-function
export function getEmitterMouseMove(
    elemEmiter: HTMLElement | Element,
    emiterName: string,
    elemListener: HTMLElement | Element,
    listenerName: string
): void {
    //console.log('5', elemEmiter, emiterName, elemListener, listenerName);
    const emitter = new EventEmitter();

    elemEmiter.addEventListener('mouseover', (e) => {
        const elem = e.target as HTMLElement;
        if (elem.classList.contains('butterfly')) {
            emitter.emit(`event:mouse-over-${elem.classList[2]}`, { class: 'active' });
            elem.classList.add('active');
            if (elem.parentElement) {
                elem.parentElement.classList.remove('active');
                elem.parentElement.children[elemEmiter.children.length - 1].classList.add('hidden');
                emitter.emit(`event:mouse-out-${elem.parentElement.classList[2]}`, { class: 'active' });
            }
        } else {
            emitter.emit(`event:mouse-over-${emiterName}`, { class: 'active' });
            elemEmiter.classList.add('active');
            elemEmiter.children[elemEmiter.children.length - 1].classList.remove('hidden');
        }
    });
    elemEmiter.addEventListener('mouseout', () => {
        emitter.emit(`event:mouse-out-${emiterName}`, { class: 'active' });
        elemEmiter.classList.remove('active');
        elemEmiter.children[elemEmiter.children.length - 1].classList.add('hidden');
    });
    elemListener.addEventListener('mouseover', () => {
        emitter.emit(`event:mouse-over-${listenerName}`, { class: 'active' });
        elemListener.classList.add('active');
        elemEmiter.children[elemEmiter.children.length - 1].classList.remove('hidden');
    });
    elemListener.addEventListener('mouseout', () => {
        emitter.emit(`event:mouse-out-${listenerName}`, { class: 'active' });
        elemListener.classList.remove('active');
        elemEmiter.children[elemEmiter.children.length - 1].classList.add('hidden');
    });

    emitter.subscribe(`event:mouse-over-${emiterName}`, (data) => {
        elemListener.classList.add(`${data.class}`);
        elemEmiter.children[elemEmiter.children.length - 1].classList.remove('hidden');
    });
    emitter.subscribe(`event:mouse-out-${emiterName}`, (data) => {
        elemListener.classList.remove(`${data.class}`);
        elemEmiter.children[elemEmiter.children.length - 1].classList.add('hidden');
    });

    emitter.subscribe(`event:mouse-over-${listenerName}`, (data) => {
        elemEmiter.classList.add(`${data.class}`);
        elemEmiter.children[elemEmiter.children.length - 1].classList.remove('hidden');
    });
    emitter.subscribe(`event:mouse-out-${listenerName}`, (data) => {
        elemEmiter.classList.remove(`${data.class}`);
        elemEmiter.children[elemEmiter.children.length - 1].classList.add('hidden');
    });
}
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

export function addEmitter(): void {
    const visualItems = document.querySelectorAll('.rose, .butterfly');
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
    const arr: Element[] = Array.from(pseudoCodeItems);

    const classes: string[] = [];
    arr.forEach((item) => {
        classes.push(item.classList[2]);
    });
    for (let i = 1; i < classes.length - 1; i += 1) {
        if (classes.lastIndexOf(classes[i]) !== i) {
            const listenerInd: number = classes.lastIndexOf(classes[i]);
            getEmitterMouseMove(
                pseudoCodeItems[i],
                pseudoCodeItems[i].classList[2],
                pseudoCodeItems[listenerInd],
                pseudoCodeItems[listenerInd].classList[2]
            );
        }
    }
}
