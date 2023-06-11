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
export type DrawNewsData = {
    articles: NewsData[];
    status: string;
    totalResults: number;
};

export type DrawSourcesData = {
    sources: SourcesData[];
    status: string;
};

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
interface TypesGetRespObj {
    endpoint: string | undefined;
    options: object;
    num: number;
}

export type GetRespObj = Pick<TypesGetRespObj, 'endpoint' | 'options'>;
