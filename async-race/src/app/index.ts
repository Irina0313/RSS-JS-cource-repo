import { Page, checkIfButtonActive } from '../helpers/templates/page';
import { Header } from '../components/header/header';
import { PageId } from '../helpers/emuns';
import { GaragePage } from '../pages/garage';
import { WinnersPage } from '../pages/winners';

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
        }
    }

    private enableRouteChange(): void {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
            checkIfButtonActive(hash);
        });
    }

    constructor() {
        this.header = new Header();
    }

    public run(): void {
        App.container.append(this.header.render());
        App.renderNewPage('garage');
        checkIfButtonActive('garage');
        this.enableRouteChange();
    }
}
