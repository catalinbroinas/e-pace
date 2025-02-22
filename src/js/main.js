import '../scss/main.scss';

import { Ripple, Dropdown, Collapse, Input, Tooltip, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

function MainDomManager() {
    const initApp = () => {
        initMDB({ Ripple, Dropdown, Collapse, Input, Tooltip });
    }

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
