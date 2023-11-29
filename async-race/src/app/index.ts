import { Page, checkIfButtonActive } from '../helpers/templates/page';
import { Header } from '../components/header/header';
import { PageId } from '../helpers/emuns';
import { GaragePage } from '../pages/garage';
import { WinnersPage } from '../pages/winners';
import { getElementFromDOM } from '../helpers/get-DOMEelements';
import { ISavedValue } from '../helpers/interfaces';
import { addGarageActionsListeners } from '../helpers/listenersActions/garage/garageActionsListeners';
import { addCarRaceListeners } from '../helpers/listenersActions/garage/carRaseListeners';
import {
    addpaginatorBtnsListeners,
    addpaginatorWinnersBtnsListeners,
} from '../helpers/listenersActions/garage/paginatorBtnsListeners';
import { addSortTableListener } from '../helpers/listenersActions/garage/winnersListeners';

export class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    private header: Header;

    protected static renderNewPage(idPage: string): void {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;
        if (idPage === PageId.Garage) {
            page = new GaragePage(idPage);
        } else if (idPage === PageId.Winners) {
            page = new WinnersPage(idPage);
        }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
            checkIfButtonActive(idPage);
        }
    }
    private saveState(targetPage: string): void {
        if (targetPage === 'winners') {
            const inputTextCreate = getElementFromDOM('.input-row_create .input-text') as HTMLInputElement;
            const inputColorCreate = getElementFromDOM('.input-row_create .input-color') as HTMLInputElement;
            const inputTextUpdate = getElementFromDOM('.input-row_update .input-text') as HTMLInputElement;
            const inputColorUpdate = getElementFromDOM('.input-row_update .input-color') as HTMLInputElement;
            const valueForSave: ISavedValue = {
                inputTextCr: inputTextCreate.value,
                inputColorCr: inputColorCreate.value,
                inputTextUpd: inputTextUpdate.value,
                inputColorUpd: inputColorUpdate.value,
            };
            localStorage.savedGarageState = JSON.stringify(valueForSave);
        }
    }

    private enableRouteChange(): void {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            this.saveState(hash);
            App.renderNewPage(hash);
            // checkIfButtonActive(hash);
            localStorage.page = hash;
        });
    }

    constructor() {
        this.header = new Header();
    }

    public run(): void {
        App.container.append(this.header.render());
        let page = 'garage';
        if (!localStorage.page) {
            localStorage.setItem('page', 'garage');
        }
        page = localStorage.page;
        App.renderNewPage(page);

        this.enableRouteChange();
        addGarageActionsListeners();
        addCarRaceListeners();
        addpaginatorBtnsListeners();
        addpaginatorWinnersBtnsListeners();
        addSortTableListener();
    }
}
