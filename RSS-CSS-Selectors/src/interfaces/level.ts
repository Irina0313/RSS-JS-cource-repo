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
    readonly selector: string;
    readonly htmlViver: string;
    readonly sets: ISetObj[];
}
