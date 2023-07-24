import { getElementFromDOM } from '../../get-DOMEelements';
import { ICar } from '../../interfaces';
import { Server } from '../../server-requests';
import { createNewCar } from '../../../pages/garage';
import { checkIfButtonActive } from '../../templates/page';

const serv = new Server();

export function addpaginatorBtnsListeners(): void {
    document.addEventListener('click', (e: MouseEvent): void => {
        //console.log(e.target);
        if (e.target) {
            const targetEl = e.target as HTMLElement;
            /* next page */
            if (targetEl.innerHTML === 'next') {
                nextPageBtnAction();
            }
            /* rprev page */
            if (targetEl.innerHTML === 'prev') {
                prevPageBtnAction();
            }
        }
    });
}

/* NEXT button */
function nextPageBtnAction(): void {
    const raceBtn = getElementFromDOM('.buttons-row')?.children[0] as HTMLInputElement;
    raceBtn.disabled = false;
    const resetBtn = raceBtn.nextSibling as HTMLInputElement;
    resetBtn.disabled = false;
    const carsWrapper = getElementFromDOM('.cars-wrapper') as HTMLElement;
    if (carsWrapper.children) {
        while (carsWrapper.children[0]) {
            carsWrapper.children[0].remove();
        }
    }
    setTimeout(() => {
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
    }, 300);
}
/* PREV button */
function prevPageBtnAction(): void {
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
/* Change Page Number */
function changePageNumber(pageNum: number): void {
    const pageNumberElem = getElementFromDOM('.subtitle_pageNumber') as HTMLElement;
    pageNumberElem.innerHTML = `Page #${pageNum}`;
}
