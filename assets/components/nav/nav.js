import birdsSvg from "../../js/svg";

export default function createNav() {
    const mainNavWrapper = document.createElement('div');
    mainNavWrapper.className = "main__nav-wrapper";

    const nav = document.createElement('nav')
    nav.className = 'nav';

    const navList = document.createElement('ul')
    navList.className = 'nav__list';

    for (let key in birdsSvg) {
        const navItem = document.createElement('li');
        navItem.className = 'nav__item';
        
        const navItemSvg = document.createElement('img');
        navItemSvg.src = birdsSvg[key];
        navItemSvg.className = 'nav__item-svg';

        const birdName = key;
        
        navItem.append(navItemSvg, birdName);
        navList.append(navItem);
    }

    const navName = document.createElement('p');
    navName.className = 'nav__name';
    navName.innerHTML = 'Levels'

    nav.append(navList, navName);

    mainNavWrapper.append(nav)

    return mainNavWrapper;
}