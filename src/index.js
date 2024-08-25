import './styles.css';
import { clearPage } from './pageHandler.js';
import loadHome from './loadHome.js';
import loadMenu from './loadMenu.js';
import loadAbout from './loadAbout.js';

(() => {
    let activeTab = 'home';

    const homeBtn = document.querySelector('.home-button');
    const menuBtn = document.querySelector('.menu-button');
    const aboutBtn = document.querySelector('.about-button');

    for (const btn of [homeBtn, menuBtn, aboutBtn]) {
        btn.addEventListener('click', btnHandler);
    };

    function btnHandler (event) {
        const btnClass = event.target.className;
        if (btnClass.includes(activeTab)) {
            return
        }
        else {
            clearPage();

            switch (btnClass) {
                case 'home-button':
                    loadHome();
                    activeTab = 'home';
                    break;
                case 'menu-button':
                    loadMenu();
                    activeTab = 'menu';
                    break;
                case 'about-button':
                    loadAbout();
                    activeTab = 'about';
                    break;
            };
        }
    };

    loadHome();

})()