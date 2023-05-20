/* Get area of field to check */

export class CheckCells {
  constructor(width, height) {
    // this.sell = cellNum;
    this.width = width;
    this.height = height;
    this.cells = document.querySelectorAll('.cell');
    this.mimeAmountClosedClasses = ['cell_closed', 'cell-one_closed', 'cell-two_closed', 'cell-three_closed', 'cell-four_closed', 'cell-five_closed', 'cell-six_closed', 'cell-seven_closed', 'cell-eight_closed'];
    this.mimeAmountOpenedClasses = ['cell_opened', 'cell-one_opened', 'cell-two_opened', 'cell-three_opened', 'cell-four_opened', 'cell-five_opened', 'cell-six_opened', 'cell-seven_opened', 'cell-eight_opened'];
  }

  /* get cells for check */
  getLeftTopCornerCell() {
    return this.cells[0];
  }

  getRightTopCornerCell() {
    return this.cells[this.width - 1];
  }

  getLeftBottomCornerCell() {
    return this.cells[(this.cells.length - this.width)];
  }

  getRightBottomCornerCell() {
    return this.cells[this.cells.length - 1];
  }

  getTopRow() {
    const arr = [];
    for (let i = 1; i < this.width - 1; i += 1) {
      arr.push(this.cells[i]);
    }
    return arr;
  }

  getBottomRow() {
    const arr = [];
    for (let i = this.cells.length - this.width + 1; i < this.cells.length - 1; i += 1) {
      arr.push(this.cells[i]);
    }
    return arr;
  }

  getLeftCol() {
    const arr = [];
    for (let i = this.width; i < this.width * (this.height - 1); i += this.width) {
      arr.push(this.cells[i]);
    }
    return arr;
  }

  getRightCol() {
    const arr = [];
    for (let i = this.width * 2 - 1; i < this.width * (this.height - 1); i += this.width) {
      arr.push(this.cells[i]);
    }
    return arr;
  }

  getInsideCells() {
    const arr = [];
    let startRowInd = this.width + 1;
    for (let i = this.width + 1; i < this.cells.length - this.width - 1; i += 1) {
      arr.push(this.cells[i]);
      if (i === startRowInd + this.width - 3) {
        i += 2;
        startRowInd += this.width;
      }
    }
    // console.log(arr)
    return arr;
  }

  /* check sells around */

  /* Fill mines amount around cell (first step) */

  fillMinesAmount(cell, stringSell) {
    /* First cell top row */

    if (stringSell === 'leftTopCornerCell' && cell.classList[2] !== 'cell-mined_closed') {
      let minesAmount = 0;
      const nextCell = this.cells[1];
      if (nextCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }
      const bottomCell = this.cells[this.width];
      if (bottomCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }
      const bottomRightCell = this.cells[this.width + 1];
      if (bottomRightCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }
      cell.classList.remove(cell.classList[2]);
      const targetClass = this.mimeAmountClosedClasses[minesAmount];
      cell.classList.add(targetClass);
    }

    /* Last cell top row */

    if (stringSell === 'rightTopCornerCell' && cell.classList[2] !== 'cell-mined_closed') {
      let minesAmount = 0;
      const prevCell = this.cells[this.width - 2];
      if (prevCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }

      const bottomLeftCell = this.cells[(this.width * 2) - 2];
      if (bottomLeftCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }
      const bottomCell = this.cells[(this.width * 2) - 1];
      if (bottomCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }
      cell.classList.remove(cell.classList[2]);
      const targetClass = this.mimeAmountClosedClasses[minesAmount];
      cell.classList.add(targetClass);
    }

    /* First sell bottom row */

    if (stringSell === 'leftBottomCornerCell' && cell.classList[2] !== 'cell-mined_closed') {
      let minesAmount = 0;
      const currIndex = Number(cell.classList[1] - 1);

      // const nextCell = this.cells[this.cells.length - this.width];
      const nextCell = this.cells[currIndex + 1];
      if (nextCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }
      // const topCell = this.cells[Number(cell.classList[1]) - this.width];
      const topCell = this.cells[currIndex - this.width];
      if (topCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }
      // const topRightCell = this.cells[Number(topCell.classList[1]) + 1]
      const topRightCell = this.cells[currIndex - this.width + 1];
      if (topRightCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }
      cell.classList.remove(cell.classList[2]);
      const targetClass = this.mimeAmountClosedClasses[minesAmount];
      cell.classList.add(targetClass);
    }
    /* Last sell bottom row */

    if (stringSell === 'rightBottomCornerCell' && cell.classList[2] !== 'cell-mined_closed') {
      let minesAmount = 0;
      const prevCell = this.cells[Number(cell.classList[1]) - 2];
      if (prevCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }
      const topCell = this.cells[Number(cell.classList[1]) - this.width - 1];
      if (topCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }
      const topLeftCell = this.cells[Number(topCell.classList[1]) - 2];
      if (topLeftCell.classList[2] === 'cell-mined_closed') {
        minesAmount += 1;
      }
      cell.classList.remove(cell.classList[2]);
      const targetClass = this.mimeAmountClosedClasses[minesAmount];
      cell.classList.add(targetClass);
    }

    /* Top row except corner cells */

    if (stringSell === 'topRow') {
      cell.forEach((item) => {
        if (item.classList[2] !== 'cell-mined_closed') {
          let minesAmount = 0;

          const currIndex = Number(item.classList[1]) - 1;

          const prevCell = this.cells[currIndex - 1];

          if (prevCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }
          const bottomLeftCell = this.cells[currIndex + this.width - 1];
          if (bottomLeftCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const bottomCell = this.cells[currIndex + this.width];
          if (bottomCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const bottomRightCell = this.cells[currIndex + this.width + 1];
          if (bottomRightCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const nextCell = this.cells[currIndex + 1];
          if (nextCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          item.classList.remove(item.classList[2]);
          const targetClass = this.mimeAmountClosedClasses[minesAmount];
          item.classList.add(targetClass);
        }
      });
    }

    /* Bottom row except corner cells */

    if (stringSell === 'bottomRow') {
      cell.forEach((item) => {
        if (item.classList[2] !== 'cell-mined_closed') {
          let minesAmount = 0;
          const currIndex = Number(item.classList[1]) - 1;
          const prevCell = this.cells[currIndex - 1];
          if (prevCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const topLeftCell = this.cells[currIndex - this.width - 1];
          if (topLeftCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const topCell = this.cells[currIndex - this.width];
          if (topCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const topRightCell = this.cells[currIndex - this.width + 1];
          if (topRightCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const nextCell = this.cells[currIndex + 1];
          if (nextCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          item.classList.remove(item.classList[2]);
          const targetClass = this.mimeAmountClosedClasses[minesAmount];
          item.classList.add(targetClass);
        }
      });
    }

    /* Left column except corner cells */

    if (stringSell === 'leftCol') {
      cell.forEach((item) => {
        if (item.classList[2] !== 'cell-mined_closed') {
          let minesAmount = 0;
          const currIndex = Number(item.classList[1]) - 1;

          const topCell = this.cells[currIndex - this.width];
          if (topCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const topRightCell = this.cells[currIndex - this.width + 1];
          if (topRightCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const nextCell = this.cells[currIndex + 1];
          if (nextCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const bottomRightCell = this.cells[currIndex + this.width + 1];
          if (bottomRightCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          item.classList.remove(item.classList[2]);
          const targetClass = this.mimeAmountClosedClasses[minesAmount];
          item.classList.add(targetClass);
        }
      });
    }

    /* Right column except corner cells */

    if (stringSell === 'rightCol') {
      cell.forEach((item) => {
        if (item.classList[2] !== 'cell-mined_closed') {
          let minesAmount = 0;
          const currIndex = Number(item.classList[1]) - 1;

          const topCell = this.cells[currIndex - this.width];
          if (topCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const topLeftCell = this.cells[currIndex - this.width - 1];
          if (topLeftCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const prevCell = this.cells[currIndex - 1];
          if (prevCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const bottomLeftCell = this.cells[currIndex + this.width - 1];
          if (bottomLeftCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          item.classList.remove(item.classList[2]);
          const targetClass = this.mimeAmountClosedClasses[minesAmount];
          item.classList.add(targetClass);
        }
      });
    }

    /* Inside cells */

    if (stringSell === 'insideCells') {
      cell.forEach((item) => {
        if (item.classList[2] !== 'cell-mined_closed') {
          let minesAmount = 0;
          const currIndex = Number(item.classList[1]) - 1;

          const topLeftCell = this.cells[currIndex - this.width - 1];
          if (topLeftCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const topCell = this.cells[currIndex - this.width];
          if (topCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }
          const topRightCell = this.cells[currIndex - this.width + 1];
          if (topRightCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const nextCell = this.cells[currIndex + 1];
          if (nextCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }
          // console.log(this.width, currIndex)
          const bottomRightCell = this.cells[currIndex + this.width + 1];

          if (bottomRightCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const bottomCell = this.cells[currIndex + this.width];
          if (bottomCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }
          const bottomLeftCell = this.cells[currIndex + this.width - 1];
          if (bottomLeftCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          const prevCell = this.cells[currIndex - 1];
          if (prevCell.classList[2] === 'cell-mined_closed') {
            minesAmount += 1;
          }

          item.classList.remove(item.classList[2]);
          const targetClass = this.mimeAmountClosedClasses[minesAmount];
          item.classList.add(targetClass);
        }
      });
    }
    for (let i = 0; i < this.cells.length; i += 1) {
      localStorage.setItem(this.cells[i].classList[1], this.cells[i].classList[2]);
    }
    // console.log(this.cells)
  }
}
