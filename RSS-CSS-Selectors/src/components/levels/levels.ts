import { ILevel } from '../../interfaces/level';
import { VisualItemsTemplates } from './html-components-templates';

const visualTemplate = new VisualItemsTemplates();
export const levels: Record<number, ILevel> = {
    1: {
        number: 1,
        title: 'Select the butterflies',
        desriptionTitle: 'Type Selector',
        descriptionValue: 'Select elements by their type',
        examples: 'div selects all div elements.',
        selector: 'rose',
        sets: [{ rose: visualTemplate.redRose }, { rose: visualTemplate.redRose }, { rose: visualTemplate.redRose }],
        htmlViver: {
            pseudoCode: [
                `&lt;body&gt;`,
                `  &nbsp;&nbsp;&lt;rose&gt;&lt;/rose&gt;`,
                ` &nbsp;&nbsp;&lt;rose&gt;&lt;/rose>`,
                `  &nbsp;&nbsp;&lt;rose>&lt;/rose&gt;`,
                `&lt;/body&gt;`,
            ],
        },
        setsIdenticClasses: ['rose1', 'rose2', 'rose3'],
        pseudoCodeIdenticClasses: ['body', 'rose1', 'rose2', 'rose3', 'body'],
    },
    2: {
        number: 2,
        title: 'Select the flowers by ID',
        desriptionTitle: 'Type Selector',
        descriptionValue: 'Select elements by their ID',
        examples: '',
        selector: 'butterfly',
        htmlViver: {
            pseudoCode: [`<body>`, `\t<rose></rose>`, `\t<rose></rose>`, `\t<rose></rose>`, `</body>`],
        },
        sets: [
            { rose: visualTemplate.redRose, butterfly: visualTemplate.blueFly },
            { rose: visualTemplate.redRose, rose1: visualTemplate.redRose, rose2: visualTemplate.redRose },
        ],
        setsIdenticClasses: ['rose1', 'rose2', 'rose3'],
        pseudoCodeIdenticClasses: ['body', 'rose1', 'rose2', 'rose3', 'body'],
    },
};
