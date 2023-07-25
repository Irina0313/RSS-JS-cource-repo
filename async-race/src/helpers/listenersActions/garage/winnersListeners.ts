import { getElementFromDOM } from '../../get-DOMEelements';
import { sortWinners } from '../../../pages/winners';

export function addSortTableListener(): void {
    document.addEventListener('click', (e: MouseEvent): void => {
        //console.log(e.target);
        if (e.target) {
            const idColum: HTMLElement | undefined = getElementFromDOM('.winners-table-header .number');
            const winsColum: HTMLElement | undefined = getElementFromDOM('.winners-table-header .wins');
            const timeColum: HTMLElement | undefined = getElementFromDOM('.winners-table-header .best-time');
            const targetEl = e.target as HTMLElement;
            /* ID sort */
            if (targetEl === idColum) {
                sortWinners('id');
            }
            /* wins sort */
            if (targetEl === winsColum) {
                sortWinners('wins');
            }
            /* time sort */
            if (targetEl === timeColum) {
                sortWinners('time');
            }
        }
    });
}
