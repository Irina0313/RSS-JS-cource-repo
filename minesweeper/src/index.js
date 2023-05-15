import '@babel/polyfill/lib';
import './index.html';
import './style.scss';

import { createHeaderHTML } from './modules/header';
import {
  createMainHeaderHTML,
  createGameFieldHTML,
  clearGame,
} from './modules/main';

function gameInit() {
  createHeaderHTML();
  createMainHeaderHTML();
  createGameFieldHTML();
}
gameInit();

let levels = document.querySelector('.levels');
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('level') && !e.target.classList.contains('level_active')) {
    for (let i = 0; i < levels.children.length; i++)
      if (levels.children[i].classList.contains('level_active')) {
        levels.children[i].classList.remove('level_active')
      }
    e.target.classList.add('level_active');
    clearGame();
    createMainHeaderHTML();
    createGameFieldHTML();
  }
})


