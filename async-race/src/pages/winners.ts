import { Page } from '../helpers/templates/page';
import { IHTMLElement, IColName, IWin, ICar } from '../helpers/interfaces';
import { createElement } from '../helpers/build-html-element';
import { Server } from '../helpers/server-requests';
import { car } from '../components/images';
import { addSortTableListener } from '../helpers/listenersActions/garage/winnersListeners';
import { getElementFromDOM } from '../helpers/get-DOMEelements';

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
        class: 'car',
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
        const winnersTable: HTMLElement = createElement(winnersTableTempl);
        mainWrapper.append(winnersTable);
        //this.sortWinners('id');
        createWinners(winnersTable);
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

    public render(): HTMLElement {
        this.container.classList.add('winners');
        const title = this.createTitle(WinnersPage.TextObject.title, WinnersPage.TextObject.servPath, this.titleTempl);
        const pageNum = this.createPageNum(this.pageNumTempl);
        const mainWrapper = this.createMainWrapper(winnersSectionTempl);
        const paginatorBtns = this.createPaginatorsBtns(this.buttonsPaginatorRowTempl);
        this.container.append(title, pageNum, mainWrapper, paginatorBtns);

        addSortTableListener();

        //addpaginatorBtnsListeners();
        return this.container;
    }
}

export function createWinners(winnersTable: HTMLElement, page: number = 1): void {
    const serv: Server = new Server();

    serv.getWinners(page).then((data: IWin[]) => {
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
                winCar.classList.add('car-image_small');
                winCar.style.fill = carProp.color;
                const winModel: HTMLElement = createElement(winnersTableItemTempl);
                winModel.classList.add(`${colNames[2].class}`);
                winModel.innerHTML = `${carProp.name}`;
                const winWins: HTMLElement = createElement(winnersTableItemTempl);
                winWins.classList.add(`${colNames[3].class}`);
                winWins.innerHTML = `${winner.wins}`;
                const winTime: HTMLElement = createElement(winnersTableItemTempl);
                winTime.classList.add(`${colNames[4].class}`);
                winTime.innerHTML = `${winner.time}`;
                tableRow.append(winId, winCar, winModel, winWins, winTime);
            });
        });
    });
}

export function sortWinners(param: string): void {
    const serv = new Server();
    const sortParam: string | null = localStorage.getItem('sort');
    if (sortParam === null) {
        const newSort: string[] = ['id', 'ASC'];
        localStorage.setItem('sort', JSON.stringify(newSort));
    } else {
        const lastSort = JSON.parse(sortParam);
        if (lastSort[0] === param) {
            const lastSortOption = lastSort[1];
            if (lastSortOption === 'ASC') {
                const newSortOption = 'DESC';
                const newSort = [param, newSortOption];
                localStorage.sort = JSON.stringify(newSort);
            }
            if (lastSortOption === 'DESC') {
                const newSortOption = 'ASC';
                const newSort = [param, newSortOption];
                localStorage.sort = JSON.stringify(newSort);
            }
        } else {
            const newSort = [param, 'ASC'];
            localStorage.sort = JSON.stringify(newSort);
        }
    }
    const currSort = JSON.parse(localStorage.sort);
    serv.sortWinners(currSort).then(() => {
        const winnersTable: HTMLElement | undefined = getElementFromDOM('.winners-table');
        if (winnersTable) {
            while (winnersTable.children[0]) {
                winnersTable.children[0].remove();
            }
            createWinners(winnersTable);
        }
    });
}
