import { ElementBuilder } from './elem-builder';
import { GetLevelOptions } from './levels';
import {
  LocalStorageActions,
  changeStepsCouner,
  setMinesCouner,
} from './functions';

const localStor = new LocalStorageActions();

function createCells(field, width, height) {

  if (!localStor.getItem('first-step')) {
    localStor.setItem('first-step', 'true');
    localStor.setItem('checked-cells', '');
  }

  const cellsNumber = width * height;
  if (localStor.getItem('first-step') === 'true') {
    for (let i = 0; i < cellsNumber; i += 1) {
      localStor.setItem(`${i + 1}`, 'cell_closed');
      const cell = new ElementBuilder('div', field, 'cell', `${i + 1}`, 'cell_closed');
      cell.createElement();
    }
  } else if (localStor.getItem('first-step') === 'false') {
    for (let i = 0; i < cellsNumber; i += 1) {
      const styleItem = localStor.getItem(`${i + 1}`);
      let cell = new ElementBuilder('div', field, 'cell', `${i + 1}`, styleItem);
      cell = cell.createElement();
      console.log(cell)
    }
  }
}

export function createMainHeaderHTML() {
  const activeLevel = document.querySelector('.level.level_active');
  const options = new GetLevelOptions(activeLevel.innerText);
  const body = document.querySelector('body');

  let main = new ElementBuilder('main', body, 'main');
  main = main.createElement();

  let wrapper = new ElementBuilder('div', main, 'wrapper');
  wrapper = wrapper.createElement();

  let game = new ElementBuilder('div', wrapper, 'game');
  game = game.createElement();

  game.style.width = `${options.getGameMaxWidth()}px`;

  /* Game header  */

  let gameHeader = new ElementBuilder('div', game, 'game__header');
  gameHeader = gameHeader.createElement();

  /* Top border */

  let topBorder = new ElementBuilder('div', gameHeader, 'top-border');
  topBorder = topBorder.createElement();

  let cornerLeft = new ElementBuilder('div', topBorder, 'corner', 'left-top-corner');
  cornerLeft = cornerLeft.createElement();

  let borderLine = new ElementBuilder('div', topBorder, 'border-line');
  borderLine = borderLine.createElement();
  borderLine.style.width = `${options.getWidthPixels()}px`;

  let cornerRight = new ElementBuilder('div', topBorder, 'corner', 'right-top-corner');
  cornerRight = cornerRight.createElement();

  /* Left border */
  const leftBorder = new ElementBuilder('div', gameHeader, 'left-border', 'left-border_header');
  leftBorder.createElement();

  /* Header container */

  let gameHeaderContainer = new ElementBuilder('div', gameHeader, 'game__header-container');
  gameHeaderContainer = gameHeaderContainer.createElement();
  gameHeaderContainer.style.width = `${options.getWidthPixels()}px`;

  /*  Mines counter */
  let minesAmount = new ElementBuilder('div', gameHeaderContainer, 'mines-amount');
  minesAmount = minesAmount.createElement();

  let num = new ElementBuilder('div', minesAmount, 'num', 'first-num');
  num = num.createElement();

  num = new ElementBuilder('div', minesAmount, 'num', 'second-num');
  num = num.createElement();

  num = new ElementBuilder('div', minesAmount, 'num', 'third-num');
  num = num.createElement();

  setMinesCouner('restore');

  /*  Smile */

  const smile = new ElementBuilder('div', gameHeaderContainer, 'smile', 'smile_unpressed');
  smile.createElement();

  /* Steps */

  let steps = new ElementBuilder('div', gameHeaderContainer, 'steps');
  steps = steps.createElement();

  num = new ElementBuilder('div', steps, 'num', 'first-num');
  num = num.createElement();

  num = new ElementBuilder('div', steps, 'num', 'second-num');
  num = num.createElement();

  num = new ElementBuilder('div', steps, 'num', 'third-num');
  num.createElement();
  changeStepsCouner('init');

  /* Right border */
  const rightBorder = new ElementBuilder('div', gameHeader, 'right-border', 'right-border_header');
  rightBorder.createElement();

  /*  Middle border */

  let middleBorder = new ElementBuilder('div', gameHeader, 'middle-border');
  middleBorder = middleBorder.createElement();

  cornerLeft = new ElementBuilder('div', middleBorder, 'corner', 'left-middle-corner');
  cornerLeft.createElement();

  borderLine = new ElementBuilder('div', middleBorder, 'border-line');
  borderLine = borderLine.createElement();
  borderLine.style.width = `${options.getWidthPixels()}px`;

  cornerRight = new ElementBuilder('div', middleBorder, 'corner', 'right-middle-corner');
  cornerRight.createElement();
}

export function createGameFieldHTML() {
  const activeLevel = document.querySelector('.level.level_active');

  const options = new GetLevelOptions(activeLevel.innerText);

  const game = document.querySelector('.game');

  /* Container */
  let gameFieldContainer = new ElementBuilder('div', game, 'game__field-container');
  gameFieldContainer = gameFieldContainer.createElement();

  /* Left border */
  let leftBorderField = new ElementBuilder('div', gameFieldContainer, 'left-border', 'left-border_field');
  leftBorderField = leftBorderField.createElement();
  leftBorderField.style.height = options.getHeightPixels();

  /* Game field */

  let gameField = new ElementBuilder('div', gameFieldContainer, 'game__field');
  gameField = gameField.createElement();
  gameField.style.width = `${options.getWidthPixels()}px`;

  /* Cells */

  const width = options.getWidth();
  const height = options.getHeight();

  createCells(gameField, width, height);

  /* Right border */
  let rightBorderField = new ElementBuilder('div', gameFieldContainer, 'right-border', 'right-border_field');
  rightBorderField = rightBorderField.createElement();
  rightBorderField.style.height = options.getHeightPixels();
}

export function createGameFooterHTML() {
  const game = document.querySelector('.game');
  const activeLevel = document.querySelector('.level.level_active');
  const options = new GetLevelOptions(activeLevel.innerText);

  /* Game footer  */

  let gameFooter = new ElementBuilder('div', game, 'game__footer');
  gameFooter = gameFooter.createElement();

  /*  Middle border */

  let middleBorder = new ElementBuilder('div', gameFooter, 'middle-border');
  middleBorder = middleBorder.createElement();

  let cornerLeft = new ElementBuilder('div', middleBorder, 'corner', 'left-middle-corner');
  cornerLeft.createElement();

  let borderLine = new ElementBuilder('div', middleBorder, 'border-line');
  borderLine = borderLine.createElement();
  borderLine.style.width = `${options.getWidthPixels()}px`;

  let cornerRight = new ElementBuilder('div', middleBorder, 'corner', 'right-middle-corner');
  cornerRight.createElement();

  /* Left footer border */
  const leftBorder = new ElementBuilder('div', gameFooter, 'left-border', 'left-border_footer');
  leftBorder.createElement();

  /* Footer container */

  let gameFooterContainer = new ElementBuilder('div', gameFooter, 'game__footer-container');
  gameFooterContainer = gameFooterContainer.createElement();
  gameFooterContainer.style.width = `${options.getWidthPixels()}px`;

  /* Timer */

  let timer = new ElementBuilder('div', gameFooterContainer, 'timer');
  timer = timer.createElement();

  let num = new ElementBuilder('div', timer, 'num', 'first-num');
  num = num.createElement();

  num = new ElementBuilder('div', timer, 'num', 'second-num');
  num = num.createElement();

  num = new ElementBuilder('div', timer, 'num', 'third-num');
  num.createElement();

  /* Right footer border */
  const rightBorder = new ElementBuilder('div', gameFooter, 'right-border', 'right-border_footer');
  rightBorder.createElement();

  /* Bottom border */

  let bottomBorder = new ElementBuilder('div', gameFooter, 'bottom-border');
  bottomBorder = bottomBorder.createElement();

  cornerLeft = new ElementBuilder('div', bottomBorder, 'corner', 'left-bottom-corner');
  cornerLeft.createElement();

  borderLine = new ElementBuilder('div', bottomBorder, 'border-line');
  borderLine = borderLine.createElement();
  borderLine.style.width = `${options.getWidthPixels()}px`;

  cornerRight = new ElementBuilder('div', bottomBorder, 'corner', 'right-bottom-corner');
  cornerRight.createElement();
}

export function clearGame() {
  const main = document.querySelector('.main');
  main.remove();
}
