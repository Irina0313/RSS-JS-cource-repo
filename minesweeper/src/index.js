import '@babel/polyfill/lib';
import './index.html';
import './style.scss';

import { createHeaderHTML } from './modules/header';
import {
  createMainHeaderHTML,
  createGameFieldHTML,
  createGameFooterHTML,
  clearGame,
} from './modules/main';

import {
  LocalStorageActions,
  changeStesCouner,
} from './modules/functions';

function gameInit() {
  createHeaderHTML();
  createMainHeaderHTML();
  createGameFieldHTML();
  createGameFooterHTML();

}
gameInit();

const levels = document.querySelector('.levels');
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('level') && !e.target.classList.contains('level_active')) {
    for (let i = 0; i < levels.children.length; i += 1) {
      if (levels.children[i].classList.contains('level_active')) {
        levels.children[i].classList.remove('level_active');
      }
    }
    e.target.classList.add('level_active');
    const customSettings = document.querySelector('.custom-settings');
    if (e.target.innerText === 'Custom') {
      if (customSettings.classList.contains('hidden')) {
        customSettings.classList.remove('hidden');
      }
    } else if (e.target.classList.contains('level') && e.target.innerText !== 'Custom') {
      if (!customSettings.classList.contains('hidden')) {
        customSettings.classList.add('hidden');
      }
    }
    clearGame();
    createMainHeaderHTML();
    createGameFieldHTML();
  }

  if (e.target.classList.contains('update-btn')) {
    const localStor = new LocalStorageActions();
    const width = document.getElementById('custom-width');
    const height = document.getElementById('custom-height');
    const mines = document.getElementById('custom-mines');

    const widthValue = Number(width.value);
    const heightValue = Number(height.value);
    const minesValue = Number(mines.value);

    if (!width.value) {
      // eslint-disable-next-line no-alert
      alert('Width is empty!');
    }
    if (!height.value) {
      // eslint-disable-next-line no-alert
      alert('Height is empty!');
    }
    if (!mines.value) {
      // eslint-disable-next-line no-alert
      alert('Mines is empty!');
    }
    if (widthValue > 100) {
      width.value = 100;
    }
    if (heightValue > 100) {
      height.value = 100;
    }
    if (widthValue < 10) {
      width.value = 10;
    }
    if (heightValue < 10) {
      height.value = 10;
    }
    if (minesValue < 10) {
      mines.value = 10;
    }

    const maxMinesAmount = Math.floor(widthValue * heightValue * 0.32);
    if (minesValue > maxMinesAmount && Math.floor(widthValue * heightValue * 0.32) > 310) {
      mines.value = Math.floor(widthValue * heightValue * 0.32);
      // eslint-disable-next-line no-alert
      alert('Max mines amount is 32%');
    }
    localStor.changeValue('custom-width', `${width.value}`);
    localStor.changeValue('custom-height', `${height.value}`);
    localStor.changeValue('custom-mines', `${mines.value}`);

    clearGame();

    createMainHeaderHTML();
    createGameFieldHTML();
  }

  if (e.target.classList.contains('cell')) {
    let localStor = new LocalStorageActions();
    let cellsAmount = document.querySelectorAll('.cell');
    const isFirstStep = localStor.getItem('first-step');
    if (isFirstStep === 'true') {
      e.target.classList.remove('cell_closed');
      e.target.classList.add('cell_opened');
      localStor.changeValue(e.target.classList[1], 'cell_opened');
      localStor.setItem('steps-counter', '1');
      changeStesCouner();
      localStor.changeValue('first-step', 'false');

      //createMineField()
    }

    /*for (let i = 1; i < cellsAmount.length + 1; i+=1) {
        if (localStor.getItem(`${i}`) !== 'cell_closed') {
          console.log(localStor.getItem(`${i}`));
        } else {
          isFirstStep = true;
        }
        if (isFirstStep === true) {
          e.target.classList.remove('cell_closed');
          e.target.classList.add('cell_opened');
          localStor.changeValue(e.target.classList[1], 'cell_opened');
          createMineField()
        }
      }*/
  }
});


