import { createElement } from '../build-html-element';
import { IHTMLElement } from '../interfaces';
import { Server, carsForPageLimit } from '../server-requests';
import { getElementFromDOM } from '../get-DOMEelements';
import { btnType1Templ } from './buttons';

/* Elements templates */
/* Page container template */
const pageContainerTempl: IHTMLElement = {
    tag: 'div',
};
/* Title */
const titleTempl: IHTMLElement = {
    tag: 'h1',
    class: ['title'],
};
/* Page Number */
const pageNumTempl: IHTMLElement = {
    tag: 'h2',
    class: ['subtitle', 'subtitle_pageNumber'],
};
/* paginator buttons */
const buttonsPaginatorRowTempl: IHTMLElement = {
    tag: 'div',
    class: ['paginator-row'],
};

export abstract class Page {
    protected container: HTMLElement;
    protected static TextObject = {};
    protected serv: Server;
    protected titleTempl: IHTMLElement;
    protected pageNumTempl: IHTMLElement;
    protected buttonsPaginatorRowTempl: IHTMLElement;
    protected pageContainerTempl: IHTMLElement;

    constructor(id: string) {
        this.pageContainerTempl = pageContainerTempl;
        this.container = createElement(this.pageContainerTempl);
        this.container.id = id;
        this.serv = new Server();
        this.titleTempl = titleTempl;
        this.pageNumTempl = pageNumTempl;
        this.buttonsPaginatorRowTempl = buttonsPaginatorRowTempl;
    }

    /* Create title */
    protected createTitle(titleText: string, servPath: string, templ: IHTMLElement): HTMLElement {
        const title: HTMLElement = createElement(templ);
        const data: Promise<number> = this.serv.getItemsAmount(servPath);
        data.then((value: number) => {
            const carsAmount: number = value;
            const titleValue = `${titleText} (${carsAmount})`;
            title.innerHTML = titleValue;
        });
        return title;
    }

    /* Create Page Number */
    protected createPageNum(templ: IHTMLElement): HTMLElement {
        let pageNumber: string | null = localStorage.getItem('page-number');
        if (!pageNumber) {
            localStorage.setItem('page-number', '1');
            pageNumber = '1';
        }
        const pageNumberText = `Page #${pageNumber}`;
        templ.innerHTML = pageNumberText;
        const pageNum: HTMLElement = createElement(templ);
        return pageNum;
    }

    protected createMainWrapper(templ: IHTMLElement): HTMLElement {
        const mainWrapper: HTMLElement = createElement(templ);
        return mainWrapper;
    }

    /* Create paginator buttons */
    protected createPaginatorsBtns(templ: IHTMLElement): HTMLElement {
        const paginatorsBtns: HTMLElement = createElement(templ);
        const btnPrev = createElement(btnType1Templ) as HTMLButtonElement;
        paginatorsBtns.append(btnPrev);
        btnPrev.innerHTML = 'prev';
        btnPrev.setAttribute('id', 'prevBtn');
        const btnNext = createElement(btnType1Templ) as HTMLButtonElement;
        paginatorsBtns.append(btnNext);
        btnNext.innerHTML = 'next';
        btnNext.setAttribute('id', 'nextBtn');
        return paginatorsBtns;
    }

    public render(): HTMLElement {
        const title = this.createTitle('', '', this.titleTempl);
        const pageNum = this.createPageNum(this.pageNumTempl);
        const paginatorBtns = this.createPaginatorsBtns(this.buttonsPaginatorRowTempl);
        this.container.append(title, pageNum, paginatorBtns);
        return this.container;
    }
}

export function checkIfButtonActive(servPath: string): void {
    const btnPrev = getElementFromDOM('#prevBtn') as HTMLInputElement;
    const btnNext = getElementFromDOM('#nextBtn') as HTMLInputElement;
    const carLimit = carsForPageLimit;
    const currPageNum: number = Number(localStorage.getItem('page-number'));
    if (currPageNum > 1 && btnPrev.disabled === true) {
        btnPrev.disabled = false;
    }
    if (currPageNum === 1 && btnPrev.disabled === false) {
        btnPrev.disabled = true;
    }
    const serv = new Server();
    const totalCarsAmount: Promise<number> = serv.getItemsAmount(servPath);
    totalCarsAmount.then((carsAmount: number) => {
        if (currPageNum < Math.ceil(carsAmount / carLimit) && btnNext.disabled === true) {
            btnNext.disabled = false;
        } else if (currPageNum >= Math.ceil(carsAmount / carLimit) && btnNext.disabled === false) {
            btnNext.disabled = true;
        }
    });
}
