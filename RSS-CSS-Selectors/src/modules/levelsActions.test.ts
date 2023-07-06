import { getLevelsAmount, getLevel } from './levelsActions';

test('levels amount is 10', () => {
    expect(getLevelsAmount()).toBe(10);
});

test('return right level by it number', () => {
    const levelNumber = 1;
    const gotLevel: object = getLevel(levelNumber);
    const gotLevelNumber: number = gotLevel['number' as keyof typeof gotLevel];
    expect(gotLevelNumber).toBe(levelNumber);
});
