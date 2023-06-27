import { ILevel } from '../../interfaces/level';
export const levels: Record<number, ILevel> = {
    1: {
        number: 1,
        title: 'Select the butterflies',
        desriptionTitle: 'Type Selector',
        descriptionValue: 'Select elements by their type',
        examples: 'div selects all div elements.',
        selector: 'fly',
        htmlViver: `<body>/n <rose>/n </fly>/n</rose>/n</body>`,
        setNumber: 2,
        rose: 2,
        butterfly: 2,
    },
    2: {
        number: 2,
        title: 'Select the flowers by ID',
        desriptionTitle: 'Type Selector',
        descriptionValue: 'Select elements by their ID',
        examples: '',
        selector: 'fly',
        htmlViver: '',
        setNumber: 2,
        rose: 2,
        butterfly: 2,
    },
};
