import { levels } from '../components/levels/levels';
import { deleteHTML, deleteChildren, showErrorMessage } from './create-HTML-elem';
import { buildRightSide } from '../components/right-side/right-side';
import { changeLevelTitle, addVisualItems, buildEditor } from '../components/left-side/left-side';
import { buildPseudoCode } from '../components/left-side/visualCode';
import { addEmitter } from '../classes/emiter';

export function getLevel(level: number): object {
    return levels[level];
}

export function getCurrLevelValue(): object {
    let level: object;
    if (localStorage.getItem('lastLevel')) {
        level = getLevel(Number(localStorage.getItem('lastLevel')));
    } else {
        localStorage.setItem('lastLevel', `1`);
        level = getLevel(1);
    }
    return level;
}

export function getLevelsAmount(): number {
    return Object.keys(levels).length;
}

export function loadLevel(levelNumber: number): void {
    console.log('loading next level ', levelNumber);
    const levelsAmount: number = getLevelsAmount();
    if (levelNumber < 1 || levelNumber > levelsAmount) {
        showErrorMessage('Wrong level number');
        return;
    }
    localStorage.setItem('lastLevel', String(levelNumber));
    const rightSide = document.querySelector('.right-side') as HTMLElement;
    deleteHTML(rightSide);
    buildRightSide();
    changeLevelTitle();
    const visualItems = document.querySelector('.visual-items') as HTMLElement;
    deleteChildren(visualItems);
    addVisualItems();
    const editor = document.querySelector('.editor') as HTMLElement;
    deleteHTML(editor);
    buildEditor();
    buildPseudoCode();
    addEmitter();
}
