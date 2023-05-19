/* Mines field creator */

import { LocalStorageActions } from './functions';
import { GetLevelOptions } from './levels';
import { CheckCells } from './check-cell';

export function createMineField(number) {
  const activeLevel = document.querySelector('.level.level_active');
  const options = new GetLevelOptions(activeLevel.innerText);

  const cellsArr = document.querySelectorAll('.cell');
  const cellsAmount = cellsArr.length;
  const minesAmount = options.getMines();
  const openedCell = number;

  /* Get rundom number */
  function randomInteger(min, max) {
    const rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }
  const num = randomInteger(0, cellsAmount - 1);
  const minedCells = [];

  /* Create array cells' numbers with mines */

  function getMinedCellsArr(numb) {
    if (minedCells.indexOf(numb) === -1 && numb !== openedCell) {
      minedCells.push(numb);
    } else {
      const newNum = randomInteger(0, cellsAmount - 1);
      getMinedCellsArr(newNum);
    }
  }
  while (minedCells.length < minesAmount) {
    getMinedCellsArr(num);
  }

  /* Change styles and local storage value of mined cells */

  minedCells.forEach((item) => {
    cellsArr[item].classList.replace('cell_closed', 'cell-mined_closed');
    const localStor = new LocalStorageActions();
    localStor.changeValue(`${item}`, 'cell-mined_closed');
  });

  /* Create numbers around mines */
  const cellsCheck = new CheckCells(options.width, options.height);

  const leftTopCornerCell = cellsCheck.getLeftTopCornerCell();
  cellsCheck.fillMinesAmount(leftTopCornerCell, 'leftTopCornerCell');

  const rightTopCornerCell = cellsCheck.getRightTopCornerCell();
  cellsCheck.fillMinesAmount(rightTopCornerCell, 'rightTopCornerCell');

  const leftBottomCornerCell = cellsCheck.getLeftBottomCornerCell();
  cellsCheck.fillMinesAmount(leftBottomCornerCell, 'leftBottomCornerCell');

  const rightBottomCornerCell = cellsCheck.getRightBottomCornerCell();
  cellsCheck.fillMinesAmount(rightBottomCornerCell, 'rightBottomCornerCell');

  const topRow = cellsCheck.getTopRow();
  cellsCheck.fillMinesAmount(topRow, 'topRow');

  const bottomRow = cellsCheck.getBottomRow();
  cellsCheck.fillMinesAmount(bottomRow, 'bottomRow');

  const leftCol = cellsCheck.getLeftCol();
  cellsCheck.fillMinesAmount(leftCol, 'leftCol');

  const rightCol = cellsCheck.getRightCol();
  cellsCheck.fillMinesAmount(rightCol, 'rightCol');

  const insideCells = cellsCheck.getInsideCells();
  cellsCheck.fillMinesAmount(insideCells, 'insideCells');
}
