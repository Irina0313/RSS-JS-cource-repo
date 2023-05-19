import { GetLevelOptions } from './levels';
import { CheckCells } from './check-cell';
import { LocalStorageActions } from './functions';

export function openCellsAround() {
  const localStorr = new LocalStorageActions();
  const activeLevel = document.querySelector('.level.level_active');
  const options = new GetLevelOptions(activeLevel.innerText);
  const { width } = options;

  const { height } = options;

  const cells = document.querySelectorAll('.cell');

  /* Check every empty cell around it */

  function checkCellAround() {
    for (let i = 0; i < cells.length; i += 1) {
      const checkedCells = localStorr.getItem('checked-cells');
      if (!checkedCells) {
        localStorr.setItem('checked-cells', '');
      }
      if (cells[i].classList[2] === 'cell_opened' && !checkedCells.includes(cells[i].classList[1])) {
        // eslint-disable-next-line no-use-before-define
        checkCell(cells[i]);
      }
    }
  }

  checkCellAround();

  function checkCell(cell) {
    const checkCells = new CheckCells(width, height);

    const leftTopCorner = checkCells.getLeftTopCornerCell();
    const rightTopCorner = checkCells.getRightTopCornerCell();
    const leftBottomCorner = checkCells.getLeftBottomCornerCell();
    const rightBottomCorner = checkCells.getRightBottomCornerCell();
    const topRow = checkCells.getTopRow();
    const bottomRow = checkCells.getBottomRow();
    const leftCol = checkCells.getLeftCol();
    const rightCol = checkCells.getRightCol();
    const insideCells = checkCells.getInsideCells();

    const startIndex = Number(cell.classList[1] - 1);
    const topLeftCell = cells[startIndex - width - 1];
    const topCell = cells[startIndex - width];
    const topRightCell = cells[startIndex - width + 1];
    const nextCell = cells[startIndex + 1];
    const bottomRightCell = cells[startIndex + width + 1];
    const bottomCell = cells[startIndex + width];
    const bottomLeftCell = cells[startIndex + width - 1];
    const prevCell = cells[startIndex - 1];

    function changeStyleToOpened(item) {
      const currStyle = item.classList[2];
      const newStyle = currStyle.replace('closed', 'opened');
      item.classList.replace(currStyle, newStyle);
    }
    /* First cell top row */

    if (cell === leftTopCorner) {
      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
      /*  bottom right  */
      if (bottomRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomRightCell);
      }
    }
    /* Last cell top row */

    if (cell === rightTopCorner) {
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }
      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
      /*  bottom left  */
      if (bottomLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomLeftCell);
      }
    }

    /* First sell bottom row */

    if (cell === leftBottomCorner) {
      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }
      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
      /*  top right  */
      if (topRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topRightCell);
      }
    }

    /* Last sell bottom row */

    if (cell === rightBottomCorner) {
      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }
      /*  top left  */
      if (topLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topLeftCell);
      }
    }

    /* Top row */

    if (topRow.includes(cell)) {
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }

      /*  bottom left  */
      if (bottomLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomLeftCell);
      }

      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
      /*  bottom right  */
      if (bottomRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomRightCell);
      }

      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
    }

    /* Bottom row */

    if (bottomRow.includes(cell)) {
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }

      /*  top left  */
      if (topLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topLeftCell);
      }

      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }
      /*  top right  */
      if (topRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topRightCell);
      }

      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
    }

    /* Left col */

    if (leftCol.includes(cell)) {
      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }

      /*  top right  */
      if (topRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topRightCell);
      }

      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
      /*  bottom right  */
      if (bottomRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomRightCell);
      }

      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
    }

    /* Right col */

    if (rightCol.includes(cell)) {
      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }

      /*  top left  */
      if (topLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topLeftCell);
      }
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }
      /*  bottom left  */
      if (bottomLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomLeftCell);
      }

      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
    }

    /* Inside cells */

    if (insideCells.includes(cell)) {
      /*  top left  */
      if (topLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topLeftCell);
      }

      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }
      /*  top right  */
      if (topRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topRightCell);
      }

      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
      /*  bottom right  */
      if (bottomRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomRightCell);
      }

      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
      /*  bottom left  */
      if (bottomLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomLeftCell);
      }
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }
    }

    let checkedCells = localStorr.getItem('checked-cells');
    checkedCells = checkedCells.split(',');
    checkedCells.push(cell.classList[1]);
    localStorr.changeValue('checked-cells', checkedCells);

    checkCellAround();
  }
}
