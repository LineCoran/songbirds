import createBirdStart from "../components/bird/bird";
import createGameQuestion from "../components/game/game";
import birdsData from "../data/birdsData";
export default function init() {
    let nextQuestionButton;
    let globalScore = 0;
    let questionAudio;
    let globalScoreHtmlBlock = document.getElementById('score');
    let stepScore = 5;
    let stepItemList = document.querySelectorAll('.nav__item');
    let currentStep = 0;
    let correctlyAnswer = setCorrectAnswer(currentStep);

    showQuestionBlock(currentStep);
    listenerForAnswerItem();
    findNextQuestionButton();

    function findNextQuestionButton() {
        nextQuestionButton = document.querySelector('.next__question');
    }

    function setCorrectAnswer(step) {
        console.log(step);
        let currentStepBirdsArr = birdsData[step];
        let randomNumber = Math.floor(Math.random()*currentStepBirdsArr.length);
        let randomBird = currentStepBirdsArr[randomNumber].name;
        questionAudio = currentStepBirdsArr[randomNumber].audio;
        return randomBird;
    }
    
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
            nextQuestionButton.addEventListener('click', ()=> {
                currentStep++;
                changeStepGame();
            })
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
    
    function changeStepGame() {
            stepItemList.forEach((navItem)=> {
                navItem.classList.remove("nav__item-active");
            })
            stepItemList[currentStep].classList.add("nav__item-active");
            correctlyAnswer = setCorrectAnswer(currentStep);
            removeBirdBlock()
            removeQuestionBlock();
            showQuestionBlock(currentStep);
            findNextQuestionButton();
            listenerForAnswerItem();
            stepScore = 5;
    }

    function showCorrectlyBird(answer, step) {

        let birdsPicture = document.querySelector('.birds__picture');
        let birdsInfoName = document.querySelector('.birds__info__name');
        let birdsInfoAudio = document.querySelector('.birds__info__audio');
        let correctBird;

        for (let i = 0; i < birdsData[step].length; i++) {
            if(isCorrectAnswer(birdsData[step][i].name, answer)) {
                correctBird = birdsData[step][i];
            }
        }

        birdsPicture.style.backgroundImage = `url(${correctBird.image})`;
        birdsInfoName.innerHTML = correctBird.name;
        birdsInfoAudio.src = correctBird.audio;


    }
}

