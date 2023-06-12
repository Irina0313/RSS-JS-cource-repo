import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources = document.querySelector('.sources') as HTMLElement;
        const categories = document.querySelector('.categories') as HTMLElement;
        if (categories !== null) {
            categories.addEventListener('click', (e: MouseEvent) => {
                const sources = document.querySelector('.sources') as HTMLElement;
                const target: Element = e.target as HTMLElement;
                if (target !== null && target.classList.contains('categories')) {
                    sources.classList.remove('sources_hidden');
                }
            });
        }

        if (sources !== null) {
            sources.addEventListener('click', (e: MouseEvent) => {
                sources.classList.add('sources_hidden');
                this.controller.getNews(e, (data) => {
                    if (data) {
                        this.view.drawNews(data);
                    }
                });
            });
            this.controller.getSources((data) => this.view.drawSources(data));
        }
    }
}

export default App;
