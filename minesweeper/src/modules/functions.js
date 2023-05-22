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
  const level = localStorage.getItem('active-level').toLowerCase();
  const firstNum = minesCounter.children[0];
  const secondNum = minesCounter.children[1];
  const thirdNum = minesCounter.children[2];
  // const hiddenMines = document.querySelectorAll('.cell-mined_closed');
  const minesHidden = localStorage.getItem(`${level}-mines`);

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
        } else if (item === '0' && minesHiddenArr.length > 2 && minesHiddenArr[0] !== '0') {
          secondNum.classList.add(classArr[0]);
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
    const minesHiddenArr = minesHidden.split('');
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

/* Timer */

export function setTimer() {
  const classArr = ['num0', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9'];
  const timerWindow = document.querySelector('.timer');
  const firstNum = timerWindow.children[0];
  const secondNum = timerWindow.children[1];
  const thirdNum = timerWindow.children[2];

  function fillCounter(array) {
    array.forEach((item, i) => {
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
        } else if (item === '0' && array.length > 2 && array[0] !== '0') {
          secondNum.classList.add(classArr[0]);
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

  const firstStep = localStorage.getItem('first-step');
  let prevTimer = 0;
  if (firstStep === 'false') {
    prevTimer = Number(localStorage.getItem('timer'));
  }

  const currTimer = String(prevTimer + 1);
  // console.log(currTimer)
  localStorage.setItem('timer', `${currTimer}`);

  const currTimerArr = currTimer.split('');
  while (currTimerArr.length < 3) {
    currTimerArr.unshift('0');
  }
  fillCounter(currTimerArr);
}

export function getTime() {
  const timer = Number(localStorage.getItem('timer')) + 1;

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer - (hours * 60)) / 60);
  const seconds = timer - (hours * 60) - (minutes * 60);

  const timeMessageArr = [];
  if (hours > 1) {
    timeMessageArr.push(`${hours} hours `);
  }
  if (hours === 1) {
    timeMessageArr.push(`${hours} hour `);
  }

  if (minutes > 1) {
    timeMessageArr.push(`${minutes} minutes `);
  }

  if (minutes === 1) {
    timeMessageArr.push(`${minutes} minute `);
  }
  if (seconds > 1) {
    timeMessageArr.push(`${seconds} seconds`);
  }
  if (seconds === 1) {
    timeMessageArr.push(`${seconds} second`);
  }
  const timeMessage = timeMessageArr.join('');
  return timeMessage;
}

/* Best results */

export function saveGameResult(steps, time) {
  const activeLevel = document.querySelector('.level_active');
  const level = activeLevel.innerText.toLowerCase();
  if (localStorage.getItem('results')) {
    const resultsObject = JSON.parse(localStorage.results);
    const targetLevelObj = resultsObject[level];
    if (targetLevelObj) {
      const resultsLength = Object.keys(targetLevelObj).length;
      // console.log(resultsObj)
      if (resultsLength < 10) {
        const resultNumber = resultsLength + 1;
        targetLevelObj[resultNumber] = {
          steps,
          time,
        };
        localStorage.results = JSON.stringify(resultsObject);
      } else {
        for (let i = 1; i < 11; i += 1) {
          if (i < 10) {
            const nextResult = i + 1;
            const value = targetLevelObj[nextResult];
            targetLevelObj[i] = value;
          } else if (i === 10) {
            const resultNumber = 10;
            targetLevelObj[resultNumber] = {
              steps,
              time,
            };
          }
        }
        localStorage.results = JSON.stringify(resultsObject);
      }
    } else {
      const resultsObj = JSON.parse(localStorage.results);
      resultsObj[level] = {
        1: {
          steps,
          time,
        },
      };
      localStorage.results = JSON.stringify(resultsObj);
    }
  } else {
    const resultsObj = JSON.parse(localStorage.results);
    resultsObj[level] = {
      1: {
        steps,
        time,
      },
    };
    localStorage.results = JSON.stringify(resultsObj);
  }
}
