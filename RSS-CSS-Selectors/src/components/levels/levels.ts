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
        selector: 'butterfly',
        htmlViver: `<body>/n <rose>/n </fly>/n</rose>/n</body>`,
        sets: [
            { rose: visualTemplate.redRose, butterfly: visualTemplate.blueFly },
            { rose: visualTemplate.redRose },
            { butterfly: visualTemplate.blueFly },
            { rose: visualTemplate.redRose },
        ],
    },
    2: {
        number: 2,
        title: 'Select the flowers by ID',
        desriptionTitle: 'Type Selector',
        descriptionValue: 'Select elements by their ID',
        examples: '',
        selector: 'butterfly',
        htmlViver: '',
        sets: [
            { rose: visualTemplate.redRose, butterfly: visualTemplate.blueFly },
            { rose: visualTemplate.redRose, rose1: visualTemplate.redRose, rose2: visualTemplate.redRose },
        ],
    },
};
