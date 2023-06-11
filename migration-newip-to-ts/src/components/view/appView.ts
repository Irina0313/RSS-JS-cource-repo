import News from './news/news';
import Sources from './sources/sources';
import { NewsData, SourcesData, DrawNewsData, DrawSourcesData } from '../../types';
export class AppView {
    private sources: Sources;
    private news: News;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    protected drawNews(data: DrawNewsData): void {
        const values: NewsData[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    protected drawSources(data: DrawSourcesData): void {
        const values: SourcesData[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
