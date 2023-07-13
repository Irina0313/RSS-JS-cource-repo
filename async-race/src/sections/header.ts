import { getElementFromDOM } from "../helpers/get-elements";
import { IHTMLElement } from "../helpers/interfaces";
import { createElement } from "../helpers/build-html-element";

/* Create header section */

const body:HTMLElement|undefined = getElementFromDOM('body');

const headerTempl:IHTMLElement = {
  tag: 'header',
  class: ['header']
}

const garageBtnTempl:IHTMLElement = {
  tag: 'button',
  class: ['button', 'button_type1'],
  innerHTML: 'to garage'
}

const winnersBtnTempl:IHTMLElement = {
  tag: 'button',
  class: ['button', 'button_type1'],
  innerHTML: 'to winners'
}

export function createHeader():void{
  if(body){
    const header = createElement(headerTempl, body);
    createElement(garageBtnTempl, header);
    createElement(winnersBtnTempl, header);
  }
  
}

