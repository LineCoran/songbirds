import createGameQuestion from "../components/game/game";
import birdsData from "../data/birdsData";
export default function init() {


    let stepItemList = document.querySelectorAll('.nav__item');

    let currentStep = setCurrentStepOfGame();
    showQuestionBlock(currentStep);


    let answerItemList = document.querySelectorAll('.answer__item')
    
    answerItemList.forEach((item) => {
        item.addEventListener('click', (event)=> {
            event.target.classList.add('answer__item-active')
            changeDescriptionBird(currentStep, event.target.innerHTML);
        })
    })
   
    function changeDescriptionBird(step, bird) {
        let currentBird;
        for (let i = 0; i < birdsData[step].length; i++) {
            if (birdsData[step][i].name == bird){
                currentBird = birdsData[step][i]
            }
        }
        let birdName = document.querySelector('.description__bird-name');
        let birdCountry = document.querySelector('.description__bird-country');
        let birdSound = document.querySelector('.description__audio')
        let birdText = document.querySelector('.description__text');

        birdName.innerHTML = currentBird.name;
        birdCountry.innerHTML = currentBird.species;
        birdText.innerHTML = currentBird.description;
        birdSound.src = currentBird.audio;
    }

    function showQuestionBlock(step) {
        const mainInner = document.getElementById('main__inner')
        mainInner.append(createGameQuestion(step))
    }

    function removeQuestionBlock() {
        const mainInner = document.getElementById('main__inner');
        mainInner.lastElementChild.remove()
    }
    
    function setCurrentStepOfGame() {
        let result;
        stepItemList.forEach((item, index)=> {
            if (item.classList.contains("nav__item-active")) {
                result = index;
            }
        })
        return result;
    }


    stepItemList.forEach((item) => {
        item.addEventListener('click', (event)=> {
            stepItemList.forEach((navItem)=> {
                navItem.classList.remove("nav__item-active");
            })
            event.target.classList.add("nav__item-active");
            currentStep = setCurrentStepOfGame();
            removeQuestionBlock()
            showQuestionBlock(currentStep)
        })
    })



}

