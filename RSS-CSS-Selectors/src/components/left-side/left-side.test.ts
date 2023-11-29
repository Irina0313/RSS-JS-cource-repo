import { delay } from './left-side';

test('the data is peanut butter', () => {
    return delay(300).then((data) => {
        expect(data).toBeTruthy;
    });
});
