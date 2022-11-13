import createBirdStart from "../components/bird/bird";
import createGameQuestion from "../components/game/game";
import birdsData from "../data/birdsData";
export default function init() {
    let globalScore = 0;
    let questionAudio;
    let globalScoreHtmlBlock = document.getElementById('score');
    let stepScore = 5;
    let stepItemList = document.querySelectorAll('.nav__item');
    let currentStep = setCurrentStepOfGame();
    let correctlyAnswer = setCorrectAnswer(currentStep);
    showQuestionBlock(currentStep);
    listenerForAnswerItem();
    listenerForStepsItem();

    function setCorrectAnswer(step) {
        let currentStepBirdsArr = birdsData[currentStep];
        let randomNumber = Math.floor(Math.random()*currentStepBirdsArr.length);
        let randomBird = currentStepBirdsArr[randomNumber].name;
        questionAudio = currentStepBirdsArr[randomNumber].audio;
        return randomBird;
    }

    console.log(questionAudio)
    
    function listenerForAnswerItem() {
        let answerItemList = document.querySelectorAll('.answer__item');
        answerItemList.forEach((item) => {
            item.addEventListener('click', (event)=> clickOnAnswerButton(event))
        })
    }

    function isCorrectAnswer(clicked, answer) {
        let result = clicked.localeCompare(answer);
        return (result == 0)?true:false;
    }



    function clickOnAnswerButton(event) {
        let clickedBirdName = event.target.innerHTML;
        let clickedBirdButton = event.target;

        if (isCorrectAnswer(clickedBirdName, correctlyAnswer)) {
            clickedBirdButton.classList.add('answer__item-correct');
            globalScore+=stepScore;
            globalScoreHtmlBlock.innerHTML = `${globalScore}`;
            showCorrectlyBird(correctlyAnswer, currentStep);

        } else {
            clickedBirdButton.classList.add('answer__item-incorrect');
            stepScore--;
        }
        
        changeDescriptionBird(currentStep, event.target.innerHTML);
    }

    function changeDescriptionBird(step, bird) {
        let currentBird;
        for (let i = 0; i < birdsData[step].length; i++) {
            if (birdsData[step][i].name == bird){
                currentBird = birdsData[step][i]
            }
        }
        let birdName = document.querySelector('.description__bird-name');
        let birdCountry = document.querySelector('.description__bird-country');
        let birdSound = document.querySelector('.description__audio');
        let birdText = document.querySelector('.description__text');
        let descriptionHeader = document.querySelector('.description__header');
        let descriptionImg = document.querySelector('.description__img');
        descriptionHeader.style.display = 'flex';

        birdName.innerHTML = currentBird.name;
        birdCountry.innerHTML = currentBird.species;
        birdText.innerHTML = currentBird.description;
        birdSound.src = currentBird.audio;

        descriptionImg.setAttribute('src', currentBird.image)
    }

    function showQuestionBlock(step) {
        const mainInner = document.getElementById('main__inner');
        mainInner.append(createBirdStart(questionAudio), createGameQuestion(step))
    }

    function removeBirdBlock() {
        const bird = document.querySelector('.birds');
        bird.remove();
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

    function changeStepGame(event) {
            stepItemList.forEach((navItem)=> {
                navItem.classList.remove("nav__item-active");
            })
            event.target.classList.add("nav__item-active");
            currentStep = setCurrentStepOfGame();
            removeBirdBlock()
            removeQuestionBlock();
            showQuestionBlock(currentStep);
            listenerForAnswerItem();
            correctlyAnswer = setCorrectAnswer();
            stepScore = 5;
    }

    function showCorrectlyBird(answer, step) {

        let birdsPicture = document.querySelector('.birds__picture');
        let birdsInfoName = document.querySelector('.birds__info__name');
        let birdsInfoAudio = document.querySelector('.birds__info__audio');
        let correctBird;

        for (let i = 0; i < birdsData[step].length; i++) {
            if(isCorrectAnswer(birdsData[step][i].name, correctlyAnswer)) {
                correctBird = birdsData[step][i];
            }
        }

        birdsPicture.style.backgroundImage = `url(${correctBird.image})`;
        birdsInfoName.innerHTML = correctBird.name;
        birdsInfoAudio.src = correctBird.audio;


    }

    function listenerForStepsItem() {
        stepItemList.forEach((item) => {
            item.addEventListener('click', (event)=> changeStepGame(event) )
        })
    }
}

