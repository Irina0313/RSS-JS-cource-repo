import './index.html';
import './style.scss';
import { buildMain } from './components/base-structure/base-structure';
import { buildLeftSideHeader, buildVisualisation, buildEditor, addVisualItems } from './components/left-side/left-side';
import { buildRightSide } from './components/right-side/right-side';
import { buildFooter } from './components/footer/footer';

window.addEventListener('load', function () {
    /* initialization */

    buildMain();
    buildLeftSideHeader();
    buildVisualisation();
    buildEditor();
    buildRightSide();
    buildFooter();
    /* add roses and butterflies */
    addVisualItems();
    /* add HTMLviver */
    const cont = document.querySelector('.visual-items') as HTMLElement;
    cont.addEventListener('mouseover', (e) => {
        const targetElem = e.target as HTMLElement;
        if (targetElem.classList.contains('rose') || targetElem.classList.contains('butterfly')) {
            targetElem.classList.add('_active');
        }
    });
    cont.addEventListener('mouseout', (e) => {
        const targetElem = e.target as HTMLElement;
        if (targetElem.classList.contains('rose') || targetElem.classList.contains('butterfly')) {
            targetElem.classList.remove('_active');
        }
    });
});
