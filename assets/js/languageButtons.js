import startPageShow, { showStartPageAgain } from "./startPageShow";
import { startGame } from "./startPageShow";
import { deleteWelcomePage } from "./startPageShow";
import { removeGamePage } from "./startPageShow";
    
    export default function setActiveEnglish() {
        const languagesButtons = document.querySelectorAll('.language__button');
            for (let i = 0; i<languagesButtons.length; i++){
                if (languagesButtons[i].id == localStorage.getItem('lang')) {
                    languagesButtons[i].classList.add('language__button-active');
                }
            }
        }

    function removeActiveButton() {
        const languagesButtons = document.querySelectorAll('.language__button');
        languagesButtons.forEach((button) => {
            button.classList.remove('language__button-active');
        })
    }

    function changeLanguage(event) {
        let currentLanguage = localStorage.getItem('lang');
        let clickedLanguage = event.target.id;

        if(currentLanguage != clickedLanguage) {
            const isStartPage = Boolean(document.getElementById('welcome-page'));

            localStorage.setItem('lang', clickedLanguage);
            removeActiveButton();
            event.target.classList.add('language__button-active');

            if (isStartPage) {
                console.log('start page')
                deleteWelcomePage("header");
                startPageShow();
            } else {

                removeGamePage()
                startGame(false);

            }
        }

    }


   export function addListenerForLanguageButtons() {
    const languagesButtons = document.querySelectorAll('.language__button');
    languagesButtons.forEach((button) => {
        button.addEventListener('click', (event)=> changeLanguage(event) )
    })
}

//setActiveEnglish();
//addListenerForLanguageButtons()

   
