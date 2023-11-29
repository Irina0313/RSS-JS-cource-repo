import '@babel/polyfill/lib';
import './index.html';
import './style.scss';

import { createHeaderHTML } from './modules/header';
import {
  createMainHeaderHTML,
  createGameFieldHTML,
  createGameFooterHTML,
  clearGame,
  clearHeader,
} from './modules/main';

import {
  LocalStorageActions,
  changeStepsCouner,
  setMinesCouner,
  setTimer,
  getTime,
  saveGameResult,

} from './modules/functions';

import { GetLevelOptions } from './modules/levels';

import { createMineField } from './modules/mineBuilder';
import { openCellsAround } from './modules/open-empty-cells';
import { showMessage } from './modules/pop-up';
import { themeToggler } from './modules/theme-toggler';

import { playSound } from './modules/sounds';

function gameInit() {
  createHeaderHTML();
  createMainHeaderHTML();
  createGameFieldHTML();
  createGameFooterHTML();
}
gameInit();

const levels = document.querySelector('.levels');
const savingSettings = ['custom-mines', 'custom-height', 'custom-width', 'results', 'sound', 'theme', 'active-level', 'beginner-mines', 'intermediate-mines', 'expert-mines']

function getMinesValue() {
  const localStor = new LocalStorageActions();
  const level = localStor.getItem('active-level');
  const mines = document.getElementById('custom-mines');
  if (level === 'Beginner') {
    return Number(mines.value);
  }
  if (level === 'Intermediate') {
    return Number(mines.value);
  }
  if (level === 'Expert') {
    return Number(mines.value);
  }
  if (level === 'Custon') {
    return Number(mines.value);
  }
}



document.addEventListener('click', (e) => {
  // console.log(e.target);

  /* Changing of the level */

  if (e.target.classList.contains('level') && !e.target.classList.contains('level_active')) {
    for (let i = 0; i < levels.children.length; i += 1) {
      if (levels.children[i].classList.contains('level_active')) {
        levels.children[i].classList.remove('level_active');
      }
    }
    localStorage.setItem('active-level', e.target.innerText)
    localStorage.setItem('first-step', 'true');
    clearHeader();
    clearGame();
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!savingSettings.includes(key)) {
        localStorage.removeItem(key);
      }
    }
    createHeaderHTML();
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
    const minesValue = getMinesValue();


    if (width) {
      const widthValue = Number(width.value);
      if (!width.value) {
        // eslint-disable-next-line no-alert
        alert('Width is empty!');
      }
      if (widthValue > 100) {
        width.value = 100;
      }
      if (widthValue < 10) {
        width.value = 10;
      }
      localStor.changeValue('custom-width', `${width.value}`);
    }

    if (height) {
      const heightValue = Number(height.value);
      if (!height.value) {
        // eslint-disable-next-line no-alert
        alert('Height is empty!');
      }
      if (heightValue > 100) {
        height.value = 100;
      }

      if (heightValue < 10) {
        height.value = 10;
      }
      localStor.changeValue('custom-height', `${height.value}`);
    }

    if (!mines.value) {
      // eslint-disable-next-line no-alert
      alert('Mines is empty!');
    }
    if (minesValue < 10) {
      mines.value = 10;
    }
    if (minesValue > 99) {
      mines.value = 99;
    }


    clearGame();
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!savingSettings.includes(key)) {
        localStorage.removeItem(key);
      }
    }
    const level = localStor.getItem('active-level');
    localStor.setItem(`${level.toLowerCase()}-mines`, `${mines.value}`);
    localStor.setItem('first-step', 'true');
    createMainHeaderHTML();
    createGameFieldHTML();
    createGameFooterHTML();
  }

  /* Game field click */

  if (e.target.classList.contains('cell')) {
    const localStor = new LocalStorageActions();
    const isFirstStep = localStor.getItem('first-step');

    if (isFirstStep === 'true') {
      changeStepsCouner('game');
      localStor.changeValue('first-step', 'false');
      createMineField(Number(e.target.classList[1]) - 1);
      setMinesCouner('init');
      const timer = setInterval(() => {
        setTimer();
        if (localStor.getItem('game-over') === 'true') {
          clearInterval(timer);
        }
      }, 1000);

      const closedStyle = e.target.classList[2];
      if (closedStyle.includes('closed')) {
        e.target.classList.replace(closedStyle, closedStyle.replace('closed', 'opened'));
      }

      playSound('click');
      openCellsAround();
    } else {
      const closedStyle = e.target.classList[2];
      if (!closedStyle.includes('flaged-right') && !closedStyle.includes('flaged-wrong')) {
        changeStepsCouner('game');
        if (closedStyle.includes('closed')) {
          e.target.classList.replace(closedStyle, closedStyle.replace('closed', 'opened'));
          playSound('click');
          localStorage.setItem(`${e.target.classList[1]}`, e.target.classList[2]);
        }
        if (closedStyle === 'cell_closed') {
          localStorage.setItem(`${e.target.classList[1]}`, e.target.classList[2]);
          playSound('click');
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
          cells.forEach((cell) => {
            if (cell.classList[2].includes('flaged-wrong')) {
              cell.classList.replace(cell.classList[2], 'flaged-wrong-red');
            }
          });
          localStor.setItem('game-over', 'true');
          const smile = document.querySelector('.smile');
          smile.classList.replace(smile.classList[1], 'smile_lose')
          playSound('loser');
          setTimeout(showMessage('lose'), 5000);
        }
      }
    }
  }

  if (e.target.classList.contains('smile')) {
    const keys = Object.keys(localStorage);
    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      if (!savingSettings.includes(key)) {
        localStorage.removeItem(key);
      }
    }
    clearGame();

    createMainHeaderHTML();
    createGameFieldHTML();
    createGameFooterHTML();
  }

  /* Best results */
  if (e.target.classList.contains('results')) {
    showMessage('results');
  }

  /* Theme toggler */

  if (e.target.classList.contains('theme')) {
    if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark');
    } else if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
    }
    themeToggler();
  }

  /* Sound toggler */

  if (e.target.classList.contains('sound')) {
    if (localStorage.getItem('sound') === 'off') {
      localStorage.setItem('sound', 'on');
    } else if (localStorage.getItem('sound') === 'on') {
      localStorage.setItem('sound', 'off');
    }
  }
});

/* Mouse right button click */

document.addEventListener('contextmenu', (e) => {
  const cells = document.querySelectorAll('.cell');
  const cellsArr = Array.prototype.slice.call(cells);
  if (cellsArr.indexOf(e.target) !== -1) {
    e.preventDefault();
    playSound('flag');
    const localStor = new LocalStorageActions();
    const isFirstStep = localStor.getItem('first-step');
    if (isFirstStep === 'true') {
      // changeStepsCouner('game');
      localStor.changeValue('first-step', 'false');
      createMineField(Number(e.target.classList[1]) - 1);
      setMinesCouner('init');
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
    } else if (closedStyle === 'cell-mined_closed') {
      const flagedClass = `flaged-right_${closedStyle}`;
      e.target.classList.replace(closedStyle, flagedClass);
      setMinesCouner('minusMine');
    } else if (!closedStyle.includes('opened') && closedStyle !== 'cell-mined_closed') {
      const flagedClass = `flaged-wrong_${closedStyle}`;
      e.target.classList.replace(closedStyle, flagedClass);
      setMinesCouner('minusMine');
    }
    localStor.setItem(e.target.classList[1], e.target.classList[2]);
  }

  const rightFlagedMines = document.querySelectorAll('.flaged-right_cell-mined_closed');
  const activeLevel = document.querySelector('.level.level_active');
  const options = new GetLevelOptions(activeLevel.innerText);
  const minesAmount = options.getMines();
  if (rightFlagedMines.length === minesAmount) {
    const steps = localStorage.getItem('steps-counter');
    const time = getTime();
    saveGameResult(steps, time);
    localStorage.setItem('game-over', 'true');
    playSound('winner');
    showMessage('win');
  }
});
