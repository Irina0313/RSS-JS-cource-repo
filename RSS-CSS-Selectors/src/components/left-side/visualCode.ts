import { IHTMLElement } from '../../interfaces/html-elem';
import { createElement } from '../../modules/create-HTML-elem';
import { getCurrLevelValue } from '../../modules/levelsActions';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', html);

export function buildPseudoCode(): void {
    const currLevel = getCurrLevelValue();
    const viverContainer = document.querySelector('.html-viver') as HTMLElement;
    const viverWrapperTempl: IHTMLElement = {
        tag: 'div',
        class: ['viver-wrapper'],
    };
    const viverWrapper: HTMLElement = createElement(viverWrapperTempl, viverContainer);

    const pseudoCodeArr: string[] = currLevel['htmlViver' as keyof typeof currLevel]['pseudoCode'];

    pseudoCodeArr.forEach((item: string, ind: number): void => {
        const codeTempl: IHTMLElement = {
            tag: 'code',
            class: ['code', 'language-html', `${currLevel['pseudoCodeIdenticClasses' as keyof typeof currLevel][ind]}`],
            innerHTML: item,
        };
        const codeStr = createElement(codeTempl, viverWrapper);
        hljs.highlightElement(codeStr);
    });
    /*
    
    const sp = hljs.highlightElement(code);
    console.log(sp);*/

    //const cofee = document.querySelector('.cofee') as HTMLElement;

    //getEmitterMouseMove(cofee, 'cofee', code, 'code');
}
