import '../scss/main.scss';

import { Ripple, Dropdown, Collapse, Input, Tooltip, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

function MainDomManager() {
    const navbarScroll = () => {
        const navbar = document.querySelector('#navbar');

        window.addEventListener('scroll', () => {
            (window.pageYOffset > 100) ? navbar.classList.add('navbar-scroll')
                : navbar.classList.remove('navbar-scroll');
        });
    };

    const initApp = () => {
        initMDB({ Ripple, Dropdown, Collapse, Input, Tooltip });
        navbarScroll();
    }

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
