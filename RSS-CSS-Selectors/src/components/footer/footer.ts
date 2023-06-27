import { IHTMLElement } from '../../interfaces/html-elem';
import { createElement } from '../../modules/create-HTML-elem';

const body = document.querySelector('body') as HTMLElement;
const footerTempl: IHTMLElement = {
    tag: 'footer',
    class: ['footer'],
};
const footerWrapperTempl: IHTMLElement = {
    tag: 'div',
    class: ['footer-wrapper'],
};
const footerListTempl: IHTMLElement = {
    tag: 'ul',
    class: ['footer-list'],
};
const footerGitTempl: IHTMLElement = {
    tag: 'li',
    class: ['footer-list__item', 'git'],
};
const gitLink: IHTMLElement = {
    tag: 'a',
    class: ['git-link'],
    attribute: { href: 'https://github.com/Irina0313', target: '_blank' },
};
const footerYear: IHTMLElement = {
    tag: 'li',
    class: ['footer-list__item', 'year'],
    innerHTML: '2023',
};
const footerRSSTempl: IHTMLElement = {
    tag: 'li',
    class: ['footer-list__item', 'RSS'],
};
const rssLink: IHTMLElement = {
    tag: 'a',
    class: ['rss-link'],
    attribute: { href: 'https://rs.school/js/', target: '_blank' },
};

export function buildFooter(): void {
    const footer = createElement(footerTempl, body);
    const footerWrapper = createElement(footerWrapperTempl, footer);
    const footerList = createElement(footerListTempl, footerWrapper);
    const footerGit = createElement(footerGitTempl, footerList);
    createElement(gitLink, footerGit);
    createElement(footerYear, footerList);
    const footerRSS = createElement(footerRSSTempl, footerList);
    createElement(rssLink, footerRSS);
}
