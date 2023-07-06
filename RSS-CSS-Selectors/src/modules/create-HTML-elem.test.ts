/**
 * @jest-environment jsdom
 */
import { IHTMLElement } from '../interfaces/html-elem';
import { createElement, deleteHTML } from './create-HTML-elem';

test('function createElement creates HTMLElement with right tag', () => {
    const parentElement = document.querySelector('body') as HTMLElement;
    const testElem: IHTMLElement = {
        tag: 'test',
    };
    expect(createElement(testElem, parentElement)).toBe(document.querySelector('test'));
});

test('function createElement puts created HTMLElement inside target parent HTMLElement', () => {
    const parentElement = document.querySelector('body') as HTMLElement;
    const testElem: IHTMLElement = {
        tag: 'test',
    };
    expect(createElement(testElem, parentElement).parentElement).toBe(parentElement);
});

test('function createElement creates HTMLElement with right class', () => {
    const parentElement = document.querySelector('body') as HTMLElement;
    const testElem: IHTMLElement = {
        tag: 'test',
        class: ['class1'],
    };
    expect(createElement(testElem, parentElement).classList).toContain('class1');
});

test('function createElement creates HTMLElement with more than one class', () => {
    const parentElement = document.querySelector('body') as HTMLElement;
    const testElem: IHTMLElement = {
        tag: 'test',
        class: ['class1', 'class2', 'class3'],
    };
    expect(createElement(testElem, parentElement).classList.length).toBe(3);
});

test('function createElement adds innerHTML', () => {
    const parentElement = document.querySelector('body') as HTMLElement;
    const testElem: IHTMLElement = {
        tag: 'test',
        innerHTML: 'Test string',
    };
    expect(createElement(testElem, parentElement).innerHTML).toMatch('Test string');
});

test('function createElement adds attribute', () => {
    const parentElement = document.querySelector('body') as HTMLElement;
    const testElem: IHTMLElement = {
        tag: 'test',
        attribute: { testAttr: 'test' },
    };
    expect(createElement(testElem, parentElement).hasAttribute('testAttr')).toBeTruthy();
});

test('function createElement adds attribute with target value', () => {
    const parentElement = document.querySelector('body') as HTMLElement;
    const testElem: IHTMLElement = {
        tag: 'test',
        attribute: { testAttr: 'test' },
    };
    expect(createElement(testElem, parentElement).getAttribute('testAttr')).toBe('test');
});

test('function deleteHTML deletes element from HTML', () => {
    const element = document.querySelector('body') as HTMLElement;
    deleteHTML(element);
    expect(document.querySelector('body')).toBeNull();
});
