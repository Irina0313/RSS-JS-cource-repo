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
  changeStepsCouner,
  setMinesCouner,

} from './modules/functions';

import { GetLevelOptions } from './modules/levels';

import { createMineField } from './modules/mineBuilder';
import { openCellsAround } from './modules/open-empty-cells';
import { showMessage } from './modules/pop-up';

function gameInit() {
  createHeaderHTML();
  createMainHeaderHTML();
  createGameFieldHTML();
  createGameFooterHTML();
}
gameInit();

const levels = document.querySelector('.levels');

document.addEventListener('click', (e) => {
  /* Changing the level */

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
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key !== 'custom-mines' && key !== 'custom-height' && key !== 'custom-width') {
        localStorage.removeItem(key);
      }
    }
    createMainHeaderHTML();
    createGameFieldHTML();
    createGameFooterHTML();
  }

  /* Update custom settings */

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
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key !== 'custom-mines' && key !== 'custom-height' && key !== 'custom-width') {
        localStorage.removeItem(key);
      }
    }

    createMainHeaderHTML();
    createGameFieldHTML();
    createGameFooterHTML();
  }

  /* Game field click */

  if (e.target.classList.contains('cell')) {
    // console.log(e.target);
    const localStor = new LocalStorageActions();
    const isFirstStep = localStor.getItem('first-step');

    if (isFirstStep === 'true') {
      changeStepsCouner('game');
      localStor.changeValue('first-step', 'false');
      createMineField(Number(e.target.classList[1]) - 1);
      setMinesCouner('init');
      const closedStyle = e.target.classList[2];
      if (closedStyle.includes('closed')) {
        e.target.classList.replace(closedStyle, closedStyle.replace('closed', 'opened'));
      }
      openCellsAround();
    } else {
      const closedStyle = e.target.classList[2];
      if (!closedStyle.includes('flaged-right') && !closedStyle.includes('flaged-wrong')) {
        changeStepsCouner('game');
        if (closedStyle.includes('closed')) {
          e.target.classList.replace(closedStyle, closedStyle.replace('closed', 'opened'));
          localStorage.setItem(`${e.target.classList[1]}`, e.target.classList[2]);
        }
        if (closedStyle === 'cell_closed') {
          localStorage.setItem(`${e.target.classList[1]}`, e.target.classList[2]);
          openCellsAround();
        }
        /* Game over! */
        if (closedStyle === 'cell-mined_closed' || closedStyle === 'cell-flaged-wrong_closed' || closedStyle === 'cell-flaged-right_closed') {
          e.target.classList.replace(e.target.classList[2], `${e.target.classList[2]}-loss`);
          const restMines = [];
          const closedMines = document.querySelectorAll('.cell-mined_closed');
          for (let i = 0; i < closedMines.length; i += 1) {
            restMines.push(closedMines[i]);
          }
          const flagedMines = document.querySelectorAll('.cell-flaged-right_closed');
          for (let i = 0; i < flagedMines.length; i += 1) {
            restMines.push(flagedMines[i]);
          }
          restMines.forEach((item) => {
            item.classList.replace(closedStyle, closedStyle.replace('closed', 'opened'));
          });
          const cells = document.querySelectorAll('.cell');
          for (let i = 0; i < cells.length; i += 1) {
            cells[i].style.pointerEvents = 'none';
          }
          setTimeout(showMessage('lose'), 5000);
        }
      }

      /* if (closedStyle.includes('flaged-right')) {
        const unFlagedClass = closedStyle.replace('flaged-right_', '');
        e.target.classList.replace(closedStyle, unFlagedClass);
      } else if (closedStyle.includes('flaged-wrong')) {
        const unFlagedClass = closedStyle.replace('flaged-wrong_', '');
        e.target.classList.replace(closedStyle, unFlagedClass);
      } */
      // closedStyle = e.target.classList[2];
    }
  }

  if (e.target.classList.contains('smile')) {
    const keys = Object.keys(localStorage);
    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      if (key !== 'custom-mines' && key !== 'custom-height' && key !== 'custom-width') localStorage.removeItem(key);
    }
    clearGame();

    createMainHeaderHTML();
    createGameFieldHTML();
    createGameFooterHTML();
  }
});

/* Mouse right button click */

document.addEventListener('contextmenu', (e) => {
  const cells = document.querySelectorAll('.cell');
  const cellsArr = Array.prototype.slice.call(cells);
  if (cellsArr.indexOf(e.target) !== -1) {
    e.preventDefault();
    const localStor = new LocalStorageActions();
    const isFirstStep = localStor.getItem('first-step');
    if (isFirstStep === 'true') {
      changeStepsCouner('game');
      localStor.changeValue('first-step', 'false');
      createMineField(Number(e.target.classList[1]) - 1);
      setMinesCouner('init');
      // setMinesCouner('minusMine');
    }

    const closedStyle = e.target.classList[2];
    if (closedStyle.includes('flaged-right')) {
      const unFlagedClass = closedStyle.replace('flaged-right_', '');
      e.target.classList.replace(closedStyle, unFlagedClass);
      setMinesCouner('plusMine');
    } else if (closedStyle.includes('flaged-wrong')) {
      const unFlagedClass = closedStyle.replace('flaged-wrong_', '');
      e.target.classList.replace(closedStyle, unFlagedClass);
      setMinesCouner('plusMine');
    } else {
      setMinesCouner('minusMine');
      if (closedStyle === 'cell-mined_closed') {
        const flagedClass = `flaged-right_${closedStyle}`;
        e.target.classList.replace(closedStyle, flagedClass);
      } else if (!closedStyle.includes('opened')) {
        const flagedClass = `flaged-right_${closedStyle}`;
        e.target.classList.replace(closedStyle, flagedClass);
      }
    }
    localStor.setItem(e.target.classList[1], e.target.classList[2]);
  }

  const rightFlagedMines = document.querySelectorAll('.flaged-right_cell-mined_closed');
  const activeLevel = document.querySelector('.level.level_active');
  const options = new GetLevelOptions(activeLevel.innerText);
  const minesAmount = options.getMines();
  if (rightFlagedMines.length === minesAmount) {
    const steps = localStorage.getItem('steps-counter');
    // const time =  localStorage.getItem('time');
    // saveGameResult(steps, time )
    showMessage('win');
  }
});
