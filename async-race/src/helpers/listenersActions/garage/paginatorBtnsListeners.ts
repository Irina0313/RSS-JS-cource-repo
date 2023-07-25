import { getElementFromDOM, getElementsListFromDOM } from '../../get-DOMEelements';
import { ICar } from '../../interfaces';
import { Server } from '../../server-requests';
import { createNewCar } from '../../../pages/garage';
import { checkIfButtonActive } from '../../templates/page';
import { createWinners } from '../../../pages/winners';

export function addpaginatorBtnsListeners(): void {
    document.addEventListener('click', (e: MouseEvent): void => {
        //console.log(e.target);
        if (e.target) {
            const currPage = localStorage.page;
            const targetEl = e.target as HTMLElement;
            /* next page */
            if (targetEl.innerHTML === 'next' && currPage === 'garage') {
                nextGaragePageBtnAction();
            }

            /* rprev page */
            if (targetEl.innerHTML === 'prev' && currPage === 'garage') {
                prevGaragePageBtnAction();
            }
        }
    });
}
export function addpaginatorWinnersBtnsListeners(): void {
    document.addEventListener('click', (e: MouseEvent): void => {
        if (e.target) {
            const currPage = localStorage.page;
            const targetEl = e.target as HTMLElement;
            /* next page */

            if (targetEl.innerHTML === 'next' && currPage === 'winners') {
                nextWinnersPageBtnAction();
            }
            /* rprev page */

            if (targetEl.innerHTML === 'prev' && currPage === 'winners') {
                prevWinnersPageBtnAction();
            }
        }
    });
}
const serv = new Server();
/* NEXT button */
function nextGaragePageBtnAction(): void {
    const raceBtn = getElementFromDOM('.buttons-row')?.children[0] as HTMLInputElement;
    raceBtn.disabled = false;
    const resetBtn = raceBtn.nextSibling as HTMLInputElement;
    resetBtn.disabled = false;
    const carWrappers: NodeListOf<Element> | undefined = getElementsListFromDOM('.car-wrapper');
    if (carWrappers) {
        carWrappers.forEach((item): void => {
            item.remove();
        });
        const nextPageNumber = Number(localStorage.getItem('page-number')) + 1;
        const resp: Promise<ICar[]> = serv.getCars(nextPageNumber);
        resp.then((value: ICar[]) => {
            value.forEach((item: ICar) => {
                createNewCar(item);
            });
            localStorage['page-number'] = `${nextPageNumber}`;
            changePageNumber(nextPageNumber);
            checkIfButtonActive('garage');
        });
    }
}

function nextWinnersPageBtnAction(): void {
    const winnersTable: HTMLElement | undefined = getElementFromDOM('.winners-table');
    if (winnersTable) {
        while (winnersTable.children[0]) {
            winnersTable.children[0].remove();
        }
        setTimeout(() => {
            const nextPageNumber = Number(localStorage.getItem('winners-page-number')) + 1;
            createWinners(winnersTable, nextPageNumber);
            localStorage['winners-page-number'] = `${nextPageNumber}`;
            changePageNumber(nextPageNumber);
            checkIfButtonActive('winners');
        }, 300);
    }
}
/* PREV button */
function prevGaragePageBtnAction(): void {
    const serv = new Server();
    const carsWrapper = getElementFromDOM('.cars-wrapper') as HTMLElement;
    if (carsWrapper.children) {
        while (carsWrapper.children[0]) {
            carsWrapper.children[0].remove();
        }
    }
    setTimeout(() => {
        const prevPageNumber = Number(localStorage.getItem('page-number')) - 1;
        const resp: Promise<ICar[]> = serv.getCars(prevPageNumber);
        resp.then((value: ICar[]) => {
            value.forEach((item: ICar) => {
                createNewCar(item);
            });
            localStorage['page-number'] = `${prevPageNumber}`;
            changePageNumber(prevPageNumber);
            checkIfButtonActive('garage');
        });
    }, 300);
}
function prevWinnersPageBtnAction(): void {
    const winnersTable: HTMLElement | undefined = getElementFromDOM('.winners-table');
    if (winnersTable) {
        while (winnersTable.children[0]) {
            winnersTable.children[0].remove();
        }
        setTimeout(() => {
            const prevPageNumber = Number(localStorage.getItem('winners-page-number')) - 1;
            createWinners(winnersTable, prevPageNumber);
            localStorage['winners-page-number'] = `${prevPageNumber}`;
            changePageNumber(prevPageNumber);
            checkIfButtonActive('winners');
        }, 300);
    }
}
/* Change Page Number */
function changePageNumber(pageNum: number): void {
    const pageNumberElem = getElementFromDOM('.subtitle_pageNumber') as HTMLElement;
    pageNumberElem.innerHTML = `Page #${pageNum}`;
}
