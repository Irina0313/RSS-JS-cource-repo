import { IHTMLElement } from './html-elem';
export interface ISetObj {
    [key: string]: IHTMLElement;
}
export interface ILevel {
    readonly number: number;
    readonly title: string;
    readonly desriptionTitle: string;
    readonly descriptionValue: string;
    readonly examples: string;
    readonly answer: string[];
    readonly sets: { [key: string]: IHTMLElement }[];
    readonly setsTempl: { [key: string]: IHTMLElement }[];
    readonly htmlViver: {
        [key: string]: string[];
    };
    readonly setsIdenticClasses: string[];
    readonly pseudoCodeIdenticClasses: string[];
}
