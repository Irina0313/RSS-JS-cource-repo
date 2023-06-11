export interface NewsData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface SourcesData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface DrawNewsData {
    articles: NewsData[];
    status: string;
    totalResults: number;
}

export interface DrawSourcesData {
    sources: SourcesData[];
    status: string;
}
