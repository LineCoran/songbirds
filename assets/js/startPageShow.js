import createHeaderBlock from "../components/header/header";
import createWelcomeBlock from "../components/welcome/welcome";
import init from "./game";

let gameIsStart = false;


export default function startPageShow() {
    const wrapper = document.getElementById('wrapper');
    const mainPage = document.getElementById('main');
    const headerBlock = createHeaderBlock()
    const welcomePage =  createWelcomeBlock()
    wrapper.prepend(headerBlock);
    mainPage.append(welcomePage);
    const playGameButton = document.querySelector('.welcome__button');
    const playGameButtonNav = document.getElementById('game-button');
    const mainPageButton = document.getElementById('main-button');
    playGameButton.addEventListener('click', startGame);
    playGameButtonNav.addEventListener('click', function() {
        if(!gameIsStart) {
            startGame();
        }
    });

    mainPageButton.addEventListener('click', function() {
        if(gameIsStart) {
            showStartPageAgain();
        }
        
    })


}

function showStartPageAgain() {
    const header = document.querySelector('.header');
    const mainInner= document.getElementById('main__inner');

    header.remove();
    while(mainInner.firstChild) {
        mainInner.firstChild.remove()
    }

    startPageShow();

    gameIsStart = false
}

function startGame() {
    deleteWelcomePage();
    init();

    gameIsStart = true;
}

function deleteWelcomePage() {
    const welcomePage = document.getElementById('welcome-page');
    welcomePage.remove();
}