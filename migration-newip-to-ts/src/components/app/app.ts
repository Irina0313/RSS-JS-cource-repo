import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    protected start(): void {
        const sources = document.querySelector('.sources') as HTMLElement;
        if (sources !== null) {
            sources.addEventListener('click', (e: MouseEvent) =>
                this.controller.getNews(e, (data) => {
                    if (data) {
                        this.view.drawNews(data);
                    }
                })
            );
            this.controller.getSources((data) => this.view.drawSources(data));
        }
    }
}

export default App;
