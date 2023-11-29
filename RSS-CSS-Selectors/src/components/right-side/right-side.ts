import { IHTMLElement } from '../../interfaces/html-elem';
import { createElement, deleteHTML } from '../../modules/create-HTML-elem';
import { getCurrLevelValue, getLevelsAmount, loadLevel } from '../../modules/levelsActions';
import { PassedLevels, PassedLevelsWithHelp } from '../../classes/passedLevels';
import { levels } from '../levels/levels';

/* Right side */

const rightSideTempl: IHTMLElement = {
    tag: 'div',
    class: ['right-side'],
};
const levelsHeaderTempl: IHTMLElement = {
    tag: 'div',
    class: ['levels-header'],
};

/* Level done */
const levelDoneTempl: IHTMLElement = {
    tag: 'span',
    class: ['level-done'],
    innerHTML: '&#10003',
};

/* Arrow */
const arrowLeftTempl: IHTMLElement = {
    tag: 'span',
    class: ['arrow', 'arrow-left'],
    innerHTML: '&#8249;',
};
const arrowRightTempl: IHTMLElement = {
    tag: 'span',
    class: ['arrow', 'arrow-right'],
    innerHTML: '&#8250',
};
const burgerTempl: IHTMLElement = {
    tag: 'div',
    class: ['burger'],
};

/* levels list templates */
const levelsRowTempl: IHTMLElement = {
    tag: 'div',
    class: ['levels-row'],
};
const isDoneTempl: IHTMLElement = {
    tag: 'span',
    class: ['is-done'],
    innerHTML: '&#10003',
    attribute: { title: `RED: done with help,\nGREEN: done without any help,\nBLACK: isn't done yet` },
};
/* Levels list */
// eslint-disable-next-line max-lines-per-function
export function fillLevelsList(): void {
    const levelsList = document.querySelector('.levels-list') as HTMLElement;
    const passed = new PassedLevels();
    const passedLevelsArr = passed.getPassed();
    const passedHelp = new PassedLevelsWithHelp();
    const passedLevelsWithHelpArr = passedHelp.getPassed();
    const currLevel = Number(localStorage.lastLevel);
    const keys = Object.keys(levels);
    for (let i = 1; i < keys.length + 1; i += 1) {
        const levelsRow = createElement(levelsRowTempl, levelsList);
        if (currLevel === i) {
            levelsRow.classList.add('levels-row_active');
        }
        const isDone = createElement(isDoneTempl, levelsRow);
        if (passedLevelsArr.includes(levels[i]['number'])) {
            isDone.classList.add('_passed');
        }
        if (passedLevelsWithHelpArr.includes(levels[i]['number'])) {
            isDone.classList.add('_passed-help');
        }
        const levelNumberTempl: IHTMLElement = {
            tag: 'span',
            class: ['level-number'],
            innerHTML: `${levels[i]['number']}`,
        };
        createElement(levelNumberTempl, levelsRow);
        const levelTitleTempl: IHTMLElement = {
            tag: 'span',
            class: ['level-row-title'],
            innerHTML: `${levels[i]['desriptionTitle']}`,
        };
        createElement(levelTitleTempl, levelsRow);
        levelsRow.addEventListener('click', (e) => {
            const target = <HTMLElement>e.target;
            const parent = target.parentElement;
            if (parent && parent.classList.contains('levels-row')) {
                const levNum = parent.children[1] as HTMLElement;
                loadLevel(Number(levNum.innerText));
            } else {
                loadLevel(Number(target.children[1].innerHTML));
            }
        });
    }
}
/* Reset game button */

function buildResetGameButton(): void {
    const levelsList = document.querySelector('.levels-list') as HTMLElement;
    const resetBtnTempl: IHTMLElement = {
        tag: 'button',
        class: ['button', 'button__reset-level'],
        innerHTML: 'Reset game progress',
    };
    const resetGameBtn = createElement(resetBtnTempl, levelsList);
    resetGameBtn.addEventListener('click', () => {
        const passed = new PassedLevels();
        passed.resetPassed();
        const passedsWithHelp = new PassedLevelsWithHelp();
        passedsWithHelp.resetPassed();
        const rows = document.querySelectorAll('.levels-row');
        for (let i = 0; i < rows.length; i += 1) {
            const el = rows[i] as HTMLElement;
            deleteHTML(el);
        }
        deleteHTML(resetGameBtn);
        buildLevelsList();
    });
}

export function buildLevelsList(): void {
    const rightSide = document.querySelector('.right-side') as HTMLElement;
    const levelsListTempl: IHTMLElement = {
        tag: 'div',
        class: ['levels-list', 'levels-list_hidden'],
    };
    const levelsList: HTMLElement = createElement(levelsListTempl, rightSide);
    const levelsHeaderTempl: IHTMLElement = {
        tag: 'div',
        class: ['levels-header'],
    };
    const levelsHeader: HTMLElement = createElement(levelsHeaderTempl, levelsList);
    const levelsTitleTempl: IHTMLElement = {
        tag: 'h3',
        class: ['levels-title'],
        innerHTML: 'Levels list',
    };
    createElement(levelsTitleTempl, levelsHeader);

    const burgerTempl: IHTMLElement = {
        tag: 'div',
        class: ['burger', 'burger_opened'],
    };
    const bugrerOpened: HTMLElement = createElement(burgerTempl, levelsHeader);
    bugrerOpened.addEventListener('click', () => {
        const levelsList = document.querySelector('.levels-list') as HTMLElement;
        levelsList.classList.toggle('levels-list_hidden');
    });
    fillLevelsList();
    buildResetGameButton();
}

function buildLevelsDone(levelsHeader: HTMLElement, currLevel: object): void {
    const levelsPassed = new PassedLevels();
    const passedLevelsArr: number[] = levelsPassed.getPassed();
    const levelsPassedWithHelp = new PassedLevelsWithHelp();
    const passedLevelsWithHelpArr: number[] = levelsPassedWithHelp.getPassed();
    const levelDone: HTMLElement = createElement(levelDoneTempl, levelsHeader);
    if (passedLevelsArr.includes(currLevel['number' as keyof typeof currLevel])) {
        levelDone.classList.add('_passed');
    }
    if (passedLevelsWithHelpArr.includes(currLevel['number' as keyof typeof currLevel])) {
        levelDone.classList.add('_passed-help');
    }
}

/* Current Level */
function buildLevel(): void {
    const wrapperMain = document.querySelector('.wrapper-main') as HTMLElement;
    const rightSide: HTMLElement = createElement(rightSideTempl, wrapperMain);
    console.log('create right side');
    const decriptionWrapperTempl: IHTMLElement = {
        tag: 'div',
        class: ['description-wrapper'],
    };
    const descriptionWrapper: HTMLElement = createElement(decriptionWrapperTempl, rightSide);
    const levelsHeader: HTMLElement = createElement(levelsHeaderTempl, descriptionWrapper);

    /* Level */
    const currLevel: object = getCurrLevelValue();
    const currLevelNumber: number = getCurrLevelValue()['number' as keyof typeof currLevel];
    const levelsAmount: number = getLevelsAmount();
    const levels: IHTMLElement = {
        tag: 'div',
        class: ['levels'],
        innerHTML: `Level ${currLevelNumber} of ${levelsAmount}`,
    };
    createElement(levels, levelsHeader);

    buildLevelsDone(levelsHeader, currLevel);
    const arrowLeft = createElement(arrowLeftTempl, levelsHeader);
    arrowLeft.addEventListener('click', () => {
        if (currLevelNumber === 1) {
            return;
        }
        loadLevel(currLevelNumber - 1);
    });
    const arrowRight = createElement(arrowRightTempl, levelsHeader);
    arrowRight.addEventListener('click', () => {
        if (currLevelNumber === levelsAmount) {
            return;
        }
        loadLevel(currLevelNumber + 1);
    });
    buidBurger(levelsHeader);
}

/* Burger  */

function buidBurger(levelsHeader: HTMLElement): void {
    const burger = createElement(burgerTempl, levelsHeader);
    burger.addEventListener('click', () => {
        const levelsList = document.querySelector('.levels-list') as HTMLElement;
        levelsList.classList.toggle('levels-list_hidden');
    });
}
/* Level Description */

function buildLevelDescription(): void {
    const currLevel: object = getCurrLevelValue() as HTMLElement;
    const title: string = currLevel['desriptionTitle' as keyof typeof currLevel];
    const descriptionValue: string = currLevel['descriptionValue' as keyof typeof currLevel];
    const descriptionExamples: string = currLevel['examples' as keyof typeof currLevel];

    const descriptionTitleTempl: IHTMLElement = {
        tag: 'div',
        class: ['description-title'],
        innerHTML: `${title}`,
    };
    const descriptionValueTempl: IHTMLElement = {
        tag: 'div',
        class: ['description-value'],
        innerHTML: `${descriptionValue}`,
    };
    const descriptionExamplesTempl: IHTMLElement = {
        tag: 'div',
        class: ['description-example'],
        innerHTML: `${descriptionExamples}`,
    };
    const descriptionWrapper = document.querySelector('.description-wrapper') as HTMLElement;
    createElement(descriptionTitleTempl, descriptionWrapper);
    createElement(descriptionValueTempl, descriptionWrapper);
    createElement(descriptionExamplesTempl, descriptionWrapper);
}

/* Reset level button */
function buildResetLevelBtn(): void {
    const rightSide = document.querySelector('.right-side') as HTMLElement;
    const resetBtnTempl: IHTMLElement = {
        tag: 'button',
        class: ['button', 'button__reset-level'],
        innerHTML: 'Reset level progress',
    };
    const resetLevelBtn = createElement(resetBtnTempl, rightSide);
    resetLevelBtn.addEventListener('click', () => {
        const currLevel = getCurrLevelValue();
        const currLevelNumber = currLevel['number' as keyof typeof currLevel];
        const passed = new PassedLevels();
        const passedLevels = passed.getPassed();
        const passedsWithHelp = new PassedLevelsWithHelp();
        const passedLevelsWithHelp = passedsWithHelp.getPassed();
        const levelDone = document.querySelector('.level-done') as HTMLElement;
        if (passedLevels.includes(currLevelNumber)) {
            passedLevels.splice(passedLevels.indexOf(currLevelNumber), 1);
            localStorage.passedLevels = JSON.stringify(passedLevels);
            levelDone.classList.remove('_passed');
        }
        if (passedLevelsWithHelp.includes(currLevelNumber)) {
            passedLevelsWithHelp.splice(passedLevelsWithHelp.indexOf(currLevelNumber), 1);
            localStorage.passedLevelsWithHelp = JSON.stringify(passedLevelsWithHelp);
            levelDone.classList.remove('_passed-help');
        }
        const rows = document.querySelectorAll('.levels-row');
        for (let i = 0; i < rows.length; i += 1) {
            const el = rows[i] as HTMLElement;
            deleteHTML(el);
        }

        buildLevelsList();
    });
}

/* Right side */
export function buildRightSide(): void {
    buildLevel();
    buildLevelDescription();
    buildResetLevelBtn();
    buildLevelsList();
}
