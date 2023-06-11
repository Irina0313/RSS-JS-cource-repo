import AppLoader from './appLoader';
import { NewsData, SourcesData } from '../../types';
//type GetSourcesCallback<T> = (data: T) => void;
class AppController extends AppLoader {
    private getSources(callback: ((data?: SourcesData) => void) | undefined): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    private getNews(e: MouseEvent, callback: ((data?: NewsData) => void) | undefined): void {
        let target = e.target as HTMLElement;
        if (target !== null) {
            const newsContainer = e.currentTarget as HTMLElement;

            while (target !== newsContainer && target !== null && newsContainer !== null) {
                if (target.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id');
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId as string);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                target = target.parentNode as HTMLElement;
            }
        }
    }
}

export default AppController;
