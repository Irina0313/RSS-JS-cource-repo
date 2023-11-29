/**
 * @jest-environment jsdom
 */
import { EventEmitter } from './emiter';

describe('check if EventEmitter class has nesessary methods', () => {
    const _ = new EventEmitter();
    test('if constructor defined', () => {
        expect(_.constructor).toBeDefined();
    });
    test('if emit defined', () => {
        expect(_.emit).not.toBeUndefined();
    });
    test('if subscribe defined', () => {
        expect(_.subscribe).not.toBeUndefined();
    });
});
