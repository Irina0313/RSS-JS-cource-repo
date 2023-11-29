import './index.html';
import './style.scss';
import { buildMain } from './components/base-structure/base-structure';
import { buildLeftSideHeader, buildVisualisation, buildEditor, addVisualItems } from './components/left-side/left-side';
import { buildRightSide } from './components/right-side/right-side';
import { buildFooter } from './components/footer/footer';
import { buildPseudoCode } from './components/left-side/visualCode';
import { addEmitter } from './classes/emiter';
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
    buildPseudoCode();
    addEmitter();
});
