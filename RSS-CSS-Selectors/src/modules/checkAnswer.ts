import { PassedLevels, PassedLevelsWithHelp } from '../classes/passedLevels';
import { showErrorMessage } from './create-HTML-elem';
import { loadLevel, getLevelsAmount, getCurrLevelValue } from './levelsActions';

function showWinnerAnimation(level: object): void {
    const targetElemArr: string[] = level['setsIdenticClasses' as keyof typeof level];
    targetElemArr.forEach((item: string): void => {
        const elem = document.querySelector(`.${item}`) as HTMLElement;
        if (elem) {
            elem.setAttribute('id', 'winner-animation');
        }
    });
}

function showErrorAnimation(action: string): void {
    const elem = document.querySelector('.visualization') as HTMLElement;
    if (elem) {
        if (action === 'set') {
            elem.setAttribute('id', 'error-animation');
        }
        if (action === 'remove') {
            elem.removeAttribute('id');
        }
    }
}
// eslint-disable-next-line max-lines-per-function
export function checkUserUnswer(value: string): void {
    value = value.replaceAll(`'`, `"`).replaceAll(' ', '').replaceAll('`', `"`).replaceAll('body', '');
    const passedLevels = new PassedLevels();
    const passedLevelsWithHelp = new PassedLevelsWithHelp();
    const currLevel = getCurrLevelValue();
    const currLevelNumber: number = currLevel['number' as keyof typeof currLevel];
    const rightAnswers: string[] = currLevel['answer' as keyof typeof currLevel];
    if (rightAnswers.includes(value)) {
        showWinnerAnimation(currLevel);
        setTimeout(function (): void {
            passedLevels.addPassed(currLevelNumber);
            const levelsAmount = getLevelsAmount();
            let levelsPassed = 0;
            if (localStorage.passedLevelsWithHelp) {
                levelsPassed += passedLevelsWithHelp.getPassed().length;
            }
            if (localStorage.passedLevels) {
                levelsPassed += passedLevels.getPassed().length;
            }
            if (levelsPassed === levelsAmount) {
                loadLevel(currLevelNumber);
                return showErrorMessage('Congratulations!!! <br> You passed all the levels!');
            } else if (currLevelNumber >= levelsAmount && levelsPassed < levelsAmount) {
                loadLevel(currLevelNumber);
                return showErrorMessage(
                    'This was the last level. <br> There are still levels that have not been completed.<br> Try to pass them.'
                );
            } else if (currLevelNumber < levelsAmount) {
                loadLevel(currLevelNumber + 1);
            }
        }, 1500);
    } else {
        showErrorAnimation('set');
        setTimeout((): void => {
            showErrorAnimation('remove');
        }, 1300);
    }
}
