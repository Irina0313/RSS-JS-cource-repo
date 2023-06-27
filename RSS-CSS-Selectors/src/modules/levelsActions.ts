import { levels } from '../components/levels/levels';

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
