import { Page } from '../helpers/templates/page';
import { IHTMLElement, IColName, IWin, ICar } from '../helpers/interfaces';
import { createElement } from '../helpers/build-html-element';
import { Server } from '../helpers/server-requests';
import { car } from '../components/images';

/* Winners  */
const winnersSectionTempl: IHTMLElement = {
    tag: 'section',
    class: ['winners'],
};
/* Header column names */
const colNames: IColName[] = [
    {
        name: 'Number',
        class: 'number',
    },
    {
        name: 'Car',
        class: 'car-image_small',
    },
    {
        name: 'Model',
        class: 'model',
    },
    {
        name: 'Wins',
        class: 'wins',
    },
    {
        name: 'Best time (sec)',
        class: 'best-time',
    },
];
/* Winners table header */
const winnersTableHeaderTempl: IHTMLElement = {
    tag: 'ul',
    class: ['winners-table-header'],
};
const winnersTableColumnTempl: IHTMLElement = {
    tag: 'li',
    class: ['winners-table-col'],
};
const winnersTableTempl: IHTMLElement = {
    tag: 'div',
    class: ['winners-table'],
};
const winnersTableRowTempl: IHTMLElement = {
    tag: 'ul',
    class: ['winners-row'],
};
const winnersTableItemTempl: IHTMLElement = {
    tag: 'li',
    class: ['winners-item'],
};

export class WinnersPage extends Page {
    protected static TextObject = {
        title: 'Winners',
        servPath: 'winners',
    };
    constructor(id: string) {
        super(id);
    }

    protected createMainWrapper(templ: IHTMLElement): HTMLElement {
        const mainWrapper: HTMLElement = createElement(templ);
        this.createHeaderWinners(mainWrapper);
        this.createWinners(mainWrapper);
        return mainWrapper;
    }
    protected createHeaderWinners(mainWrapper: HTMLElement): void {
        const headerRow = createElement(winnersTableHeaderTempl);
        mainWrapper.append(headerRow);
        colNames.forEach((col: IColName) => {
            const colNameEl = createElement(winnersTableColumnTempl);
            colNameEl.classList.add(`${col.class}`);
            colNameEl.innerHTML = col.name;
            headerRow.append(colNameEl);
        });
    }
    protected createWinners(mainWrapper: HTMLElement): void {
        const winnersTable: HTMLElement = createElement(winnersTableTempl);
        mainWrapper.append(winnersTable);
        const serv: Server = new Server();

        serv.getWinners().then((data: IWin[]) => {
            data.forEach((winner: IWin) => {
                serv.getCar(winner.id).then((carProp: ICar) => {
                    const tableRow: HTMLElement = createElement(winnersTableRowTempl);
                    winnersTable.append(tableRow);
                    const winId: HTMLElement = createElement(winnersTableItemTempl);
                    winId.classList.add(`${colNames[0].class}`);
                    winId.innerHTML = `${winner.id}`;
                    const winCar: HTMLElement = createElement(winnersTableItemTempl);
                    winCar.classList.add(`${colNames[1].class}`);
                    winCar.innerHTML = `${car}`;
                    winCar.style.fill = carProp.color;
                    tableRow.append(winId, winCar);
                });
            });
        });
    }

    public render(): HTMLElement {
        this.container.classList.add('winners');
        const title = this.createTitle(WinnersPage.TextObject.title, WinnersPage.TextObject.servPath, this.titleTempl);
        const pageNum = this.createPageNum(this.pageNumTempl);
        const mainWrapper = this.createMainWrapper(winnersSectionTempl);

        const paginatorBtns = this.createPaginatorsBtns(this.buttonsPaginatorRowTempl);
        this.container.append(title, pageNum, mainWrapper, paginatorBtns);
        //addGarageActionsListeners();
        //addCarRaceListeners();
        //addpaginatorBtnsListeners();
        return this.container;
    }
}
