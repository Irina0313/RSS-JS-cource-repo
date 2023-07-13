export function getElementFromDOM(el: string): HTMLElement| undefined{
  const targetEl = document.querySelector(el) as HTMLElement;
  if(targetEl){
    return targetEl;
  }
}

export function getElementsListFromDOM(el: string): NodeListOf<Element>| undefined{
  const targetElList = document.querySelectorAll(el) as NodeListOf<Element>;
  if(targetElList){
    return targetElList;
  }
}