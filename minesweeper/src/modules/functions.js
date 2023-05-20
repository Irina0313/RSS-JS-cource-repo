/*  Local storage actions */
export class LocalStorageActions {
  constructor(name, value) {
    this.name = String(name);
    this.value = String(value);
  }

  setItem(name, value) {
    this.name = String(name);
    this.value = String(value);
    localStorage.setItem(this.name, this.value);
  }

  getItem(name) {
    this.name = String(name);
    return localStorage.getItem(this.name);
  }

  changeValue(name, value) {
    this.name = String(name);
    this.value = String(value);
    localStorage[this.name] = this.value;
  }
}

/* Stes counter */

export function changeStepsCouner(option) {
  const classArr = ['num0', 'num1', 'num2', 'num3', 'num4', 'num5', 'num5', 'num6', 'num7', 'num8', 'num9'];
  const stepsWindow = document.querySelector('.steps');
  const firstNum = stepsWindow.children[0];
  const secondNum = stepsWindow.children[1];
  const thirdNum = stepsWindow.children[2];
  if (option === 'init') {
    const stepPrev = Number(localStorage.getItem('steps-counter'));

    const stepCurrArr = String(stepPrev).split('');
    while (stepCurrArr.length < 3) {
      stepCurrArr.unshift('0');
    }
    stepCurrArr.forEach((item, i) => {
      if (i === 0 && ((stepPrev + 1) > 99)) {
        if (firstNum.classList[2]) {
          firstNum.classList.remove(firstNum.classList[2]);
        }
        firstNum.classList.add(classArr[Number(item)]);
      }
      if (i === 1 && ((stepPrev + 1) > 9)) {
        if (secondNum.classList[2]) {
          secondNum.classList.remove(secondNum.classList[2]);
        }
        secondNum.classList.add(classArr[Number(item)]);
      }
      if (i === 2) {
        if (thirdNum.classList[2]) {
          thirdNum.classList.remove(thirdNum.classList[2]);
        }
        thirdNum.classList.add(classArr[Number(item)]);
      }
    });
  } else if (!localStorage.getItem('steps-counter')) {
    localStorage.setItem('steps-counter', '1');
    thirdNum.classList.add('num1');
  } else {
    const stepPrev = Number(localStorage.getItem('steps-counter'));
    localStorage['steps-counter'] = String(stepPrev + 1);

    const stepCurrArr = String(stepPrev + 1).split('');
    while (stepCurrArr.length < 3) {
      stepCurrArr.unshift('0');
    }
    stepCurrArr.forEach((item, i) => {
      if (i === 0 && ((stepPrev + 1) > 99)) {
        if (firstNum.classList[2]) {
          firstNum.classList.remove(firstNum.classList[2]);
        }
        firstNum.classList.add(classArr[Number(item)]);
      }
      if (i === 1 && ((stepPrev + 1) > 9)) {
        if (secondNum.classList[2]) {
          secondNum.classList.remove(secondNum.classList[2]);
        }
        secondNum.classList.add(classArr[Number(item)]);
      }
      if (i === 2) {
        if (thirdNum.classList[2]) {
          thirdNum.classList.remove(thirdNum.classList[2]);
        }
        thirdNum.classList.add(classArr[Number(item)]);
      }
    });
  }
}

/* Mines counter */

export function setMinesCouner(option) {
  const classArr = ['num0', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9', 'num-minus'];
  const minesCounter = document.querySelector('.mines-amount');
  const firstNum = minesCounter.children[0];
  const secondNum = minesCounter.children[1];
  const thirdNum = minesCounter.children[2];
  const hiddenMines = document.querySelectorAll('.cell-mined_closed');
  const minesHidden = hiddenMines.length;

  function fillCounter(minesHiddenArr) {
    minesHiddenArr.forEach((item, i) => {
      if (i === 0) {
        if (firstNum.classList[2]) {
          firstNum.classList.remove(firstNum.classList[2]);
        }
        if (item !== '-' && item !== '0') {
          firstNum.classList.add(classArr[Number(item)]);
        } else if (item === '-') {
          firstNum.classList.add(classArr[10]);
        }
      }
      if (i === 1) {
        if (secondNum.classList[2]) {
          secondNum.classList.remove(secondNum.classList[2]);
        }
        if (item !== '-' && item !== '0') {
          secondNum.classList.add(classArr[Number(item)]);
        } else if (item === '-') {
          secondNum.classList.add(classArr[10]);
        }
      }
      if (i === 2) {
        if (thirdNum.classList[2]) {
          thirdNum.classList.remove(thirdNum.classList[2]);
        }

        thirdNum.classList.add(classArr[Number(item)]);
      }
    });
  }

  if (option === 'init') {
    const minesHiddenArr = String(minesHidden).split('');
    while (minesHiddenArr.length < 3) {
      minesHiddenArr.unshift('0');
    }
    localStorage.setItem('mines-counter', `${minesHidden}`);
    fillCounter(minesHiddenArr);
  } else if (option === 'minusMine') {
    const prevMinesAmount = Number(localStorage.getItem('mines-counter'));
    const currMinesAmount = prevMinesAmount - 1;
    localStorage.setItem('mines-counter', `${currMinesAmount}`);
    const minesHiddenArr = String(currMinesAmount).split('');
    while (minesHiddenArr.length < 3) {
      minesHiddenArr.unshift('0');
    }
    fillCounter(minesHiddenArr);
  } else if (option === 'plusMine') {
    const prevMinesAmount = Number(localStorage.getItem('mines-counter'));
    const currMinesAmount = prevMinesAmount + 1;
    localStorage.setItem('mines-counter', `${currMinesAmount}`);
    const minesHiddenArr = String(currMinesAmount).split('');
    while (minesHiddenArr.length < 3) {
      minesHiddenArr.unshift('0');
    }
    fillCounter(minesHiddenArr);
  } else if (option === 'restore') {
    const currMinesAmount = Number(localStorage.getItem('mines-counter'));
    const minesHiddenArr = String(currMinesAmount).split('');
    while (minesHiddenArr.length < 3) {
      minesHiddenArr.unshift('0');
    }
    fillCounter(minesHiddenArr);
  }
}
