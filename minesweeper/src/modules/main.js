import { ElementBuilder } from './elem-builder';
import { getLevelOptions } from './variables';



export function createMainHeaderHTML() {
  let activeLevel = document.querySelector('.level.level_active');
  let options = new getLevelOptions(activeLevel.innerText);

  let body = document.querySelector('body');

  let main = new ElementBuilder('main', body, 'main');
  main = main.createElement();

  let wrapper = new ElementBuilder('div', main, 'wrapper');
  wrapper = wrapper.createElement();

  let game = new ElementBuilder('div', wrapper, 'game');
  game = game.createElement();
  game.style.maxWidth = `${options.getGameMaxWidth()}px`;

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
  let leftBorder = new ElementBuilder('div', gameHeader, 'left-border', 'left-border_header');
  leftBorder = leftBorder.createElement();

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

  /*  Smile */

  let smile = new ElementBuilder('div', gameHeaderContainer, 'smile', 'smile_unpressed');
  smile = smile.createElement();


  /* Timer */

  let timer = new ElementBuilder('div', gameHeaderContainer, 'timer');
  timer = timer.createElement();

  num = new ElementBuilder('div', timer, 'num', 'first-num');
  num = num.createElement();

  num = new ElementBuilder('div', timer, 'num', 'second-num');
  num = num.createElement();

  num = new ElementBuilder('div', timer, 'num', 'third-num');
  num = num.createElement();

  /* Right border */
  let rightBorder = new ElementBuilder('div', gameHeader, 'right-border', 'right-border_header');
  rightBorder = rightBorder.createElement();

  /*  Middle border */

  let middleBorder = new ElementBuilder('div', gameHeader, 'middle-border');
  middleBorder = middleBorder.createElement();

  cornerLeft = new ElementBuilder('div', middleBorder, 'corner', 'left-middle-corner');
  cornerLeft = cornerLeft.createElement();

  borderLine = new ElementBuilder('div', middleBorder, 'border-line');
  borderLine = borderLine.createElement();
  borderLine.style.width = `${options.getWidthPixels()}px`;

  cornerRight = new ElementBuilder('div', middleBorder, 'corner', 'right-middle-corner');
  cornerRight = cornerRight.createElement();
}

export function createGameFieldHTML() {
  let activeLevel = document.querySelector('.level.level_active');
  let options = new getLevelOptions(activeLevel.innerText);

  let game = document.querySelector('.game');

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
  gameField.style.maxWidth = `${options.getWidthPixels()}px`;

  /* Cells */

  let width = options.getWidth();
  let height = options.getHeight();
  createCells(gameField, width, height);



  /* Right border */
  let rightBorderField = new ElementBuilder('div', gameFieldContainer, 'right-border', 'right-border_field');
  rightBorderField = rightBorderField.createElement();
  rightBorderField.style.height = options.getHeightPixels();

  /* Bottom border */

  let bottomBorder = new ElementBuilder('div', gameFieldContainer, 'bottom-border');
  bottomBorder = bottomBorder.createElement();

  let cornerLeft = new ElementBuilder('div', bottomBorder, 'corner', 'left-bottom-corner');
  cornerLeft = cornerLeft.createElement();

  let borderLine = new ElementBuilder('div', bottomBorder, 'border-line');
  borderLine = borderLine.createElement();
  borderLine.style.width = `${options.getWidthPixels()}px`;

  let cornerRight = new ElementBuilder('div', bottomBorder, 'corner', 'right-bottom-corner');
  cornerRight = cornerRight.createElement();
}


function createCells(field, width, height) {
  let cellsNumber = width * height;
  for (let i = 0; i < cellsNumber; i++) {
    let cell = new ElementBuilder('div', field, 'cell');
    cell = cell.createElement();
  }
}

export function clearGame() {
  let main = document.querySelector('.main');
  main.remove();

}