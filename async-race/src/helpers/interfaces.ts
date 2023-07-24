export interface IHTMLElement {
    tag: string;
    class?: string[];
    attribute?: object;
    innerHTML?: string;
    imageLink?: string;
}

export interface ICar {
    name: string;
    color: string;
    id?: number;
}

export interface CarModels {
    brand: string;
    models: string[];
}

export interface IEngineResponse {
    velocity?: number;
    distance?: number;
    success?: boolean;
}

export interface IRaceResult {
    id: number;
    time: number;
    result: string;
}
export interface IColName {
    name: string;
    class: string;
}

export interface IWin {
    id: number;
    wins: number;
    time: number;
}
