import createBirdStart from "../components/bird/bird";
import createGameQuestion from "../components/game/game";
import initPlayer from "./player";
import initPlayer2 from "./player2";
import createNav from "../components/nav/nav";
import birdsData from "../data/birdsData";
import createPlayer from "../components/player/player";
import createResultsBlock from "../components/result/result";
import Svg from "./svg";
export default function init() {
    let nextQuestionButton;
    let globalScore;
    let questionAudio;
    let globalScoreHtmlBlock;
    let stepScore;
    let failCount;
    let stepEnd;
    let currentStep;
    let correctlyAnswer;
    let descriptionPlayerBlock;
    let thereIsDescriptionPlayerBlock;
    let thereIsDescriptionPlayer;
    let currentDescriptionBlockName;

    function startGame() {
        globalScoreHtmlBlock = document.getElementById('score');
        globalScore = 0;
        globalScoreHtmlBlock.innerHTML = `${globalScore}`;
        stepScore = 5;
        failCount = 0;
        stepEnd = false;
        currentStep = 0;
        correctlyAnswer = setCorrectAnswer(currentStep);
        thereIsDescriptionPlayer = false;
        thereIsDescriptionPlayerBlock = false;
        currentDescriptionBlockName = null
        showQuestionBlock(currentStep);
        listenerForAnswerItem();
        findNextQuestionButton();
        showNav();
        changeStepNavList();
    }

    function findNextQuestionButton() {
        nextQuestionButton = document.querySelector('.next__question');
    }

    function setCorrectAnswer(step) {
        let currentStepBirdsArr = birdsData[step];
        let randomNumber = Math.floor(Math.random()*currentStepBirdsArr.length);
        let randomBird = currentStepBirdsArr[randomNumber].name;
        questionAudio = currentStepBirdsArr[randomNumber].audio;
        return randomBird;
    }
    
    function listenerForAnswerItem() {
        let answerItemList = document.querySelectorAll('.answer__item__text');
        answerItemList.forEach((item) => {
            item.addEventListener('click', (event)=> {
                if (event.target == event.currentTarget) {
                    clickOnAnswerButton(event)
                }
                
            })
        })
    }

    function isCorrectAnswer(clicked, answer) {
        let result = clicked.localeCompare(answer);
        return (result == 0)?true:false;
    }

    function clickOnAnswerButton(event) {
        let clickedBirdName = event.target.innerHTML;
        let clickedBirdButton = event.target;
        let descriptionLeftBlock = document.querySelector('.description__left');
        let descriptionCard = document.querySelector('.description');
        let isCorrect = isCorrectAnswer(clickedBirdName, correctlyAnswer);

        if (isCorrect) {
            if(!stepEnd) {
                globalScore+=stepScore;
                clickedBirdButton.parentNode.classList.add('answer__item-correct');
                globalScoreHtmlBlock.innerHTML = `${globalScore}`;
                showCorrectlyBird(correctlyAnswer, currentStep);
                if (currentStep != 5) {
                    nextQuestionButton.addEventListener('click', ()=> {
                        currentStep++;
                        failCount = 0;
                        stepEnd = false;
                        changeStepGame();
                        thereIsDescriptionPlayer = false;
                    });
                    nextQuestionButton.classList.add('next__question-active');
                } else {
                    setTimeout(showResults, 700)
                }
                
                descriptionLeftBlock.className = "description__left"
                descriptionLeftBlock.classList.add(`error-card${failCount}`);
                descriptionCard.classList.add('correct-color');
                setTimeout(function(){
                    descriptionCard.classList.remove('correct-color');
                }, 500 )
                stepEnd = true;
                clickedBirdButton.parentNode.prepend(createIndicator(isCorrect))
            }
        } else {
            if (!stepEnd && !isCorrectAnswer(clickedBirdName, currentDescriptionBlockName)) {
                failCount++
                descriptionLeftBlock.classList.remove('correct-card');
                descriptionLeftBlock.classList.remove(`error-card${failCount-1}`);
                descriptionLeftBlock.classList.add(`error-card${failCount}`);
                descriptionCard.classList.add('error-shake');
                descriptionCard.classList.add(`error-color`);
            setTimeout(function(){
                descriptionCard.classList.remove('error-shake');
                descriptionCard.classList.remove(`error-color`);
            }, 500 )
            clickedBirdButton.parentNode.classList.add('answer__item-incorrect');
            stepScore--;
            clickedBirdButton.parentNode.prepend(createIndicator(isCorrect))
            }
        }
        
       if (!isCorrectAnswer(clickedBirdName, currentDescriptionBlockName)) {
            changeDescriptionBird(currentStep, clickedBirdName);
        }
        currentDescriptionBlockName = clickedBirdName;
        
    }

    function changeDescriptionBird(step, bird) {
        
        let currentBird;
        for (let i = 0; i < birdsData[step].length; i++) {
            if (birdsData[step][i].name == bird){
                currentBird = birdsData[step][i]
            }
        }
        
        let descriptionRight = document.querySelector('.description__right')
        let birdName = document.querySelector('.description__right__title');
        let birdCountry = document.querySelector('.description__right__country');
        let birdText = document.querySelector('.description__right__text');
        let descriptionLeft = document.querySelector('.description__left');
        descriptionLeft.style.transform = 'translateX(-600px)';
        let descriptionImg = document.querySelector('.description__left__img');
        let cardLevel = document.getElementById("card-level");
        let cardScore = document.getElementById("card-score");
        setTimeout(function() {
            descriptionLeft.style.transform = 'translateX(0)';
        }, 150)
        
        
        
        thereIsDescriptionPlayerBlock = true;
        birdName.innerHTML = currentBird.name;
        birdCountry.innerHTML = currentBird.species;
        birdText.innerHTML = currentBird.description;

        if(!thereIsDescriptionPlayer) {
            descriptionPlayerBlock = createPlayer('2');
            descriptionRight.append(descriptionPlayerBlock);
            initPlayer2(currentBird.name, step);
            thereIsDescriptionPlayer = true;
        }
        cardLevel.innerHTML = currentStep+1;
        cardScore.innerHTML = stepScore;
        descriptionImg.style.backgroundImage = `url('${currentBird.image}')`
    }

    function showQuestionBlock(step) {
        const mainInner = document.getElementById('main__inner');
        mainInner.append(createBirdStart(questionAudio), createGameQuestion(step));
        initPlayer(questionAudio, correctlyAnswer);
        console.log('Правильный ответ: '+correctlyAnswer);
    }

    function showNav() {
        const mainInner = document.getElementById('main__inner');
        mainInner.prepend(createNav());
    }

    function removeBirdBlock() {
        const bird = document.querySelector('.birds');
        bird.remove();
    }

    function removeQuestionBlock() {
        const mainInner = document.getElementById('main__inner');
        mainInner.lastElementChild.remove()
    }

    function removeResultsBlock() {
        const resultsBlock = document.getElementById('results-block');
        resultsBlock.remove()
    }
    
    function changeStepGame() {
            correctlyAnswer = setCorrectAnswer(currentStep);
            changeStepNavList();
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
        let correctBird;

        for (let i = 0; i < birdsData[step].length; i++) {
            if(isCorrectAnswer(birdsData[step][i].name, answer)) {
                correctBird = birdsData[step][i];
            }
        }

        birdsPicture.style.backgroundImage = `url(${correctBird.image})`;
        birdsInfoName.innerHTML = correctBird.name;
    }

    function changeStepNavList() {
        const stepItemList = document.querySelectorAll('.nav__item');
        stepItemList.forEach((navItem)=> {
            navItem.classList.remove("nav__item-active");
        })
        stepItemList[currentStep].classList.add("nav__item-active");
    }

    function createIndicator(result) {
        const indicator = document.createElement('img');
        indicator.className = 'answer__item-indicator';
        indicator.src = Svg[1][result];
        return indicator
    }

    function showResults() {
        const mainInner = document.getElementById('main__inner');

        while(mainInner.firstChild) {
            mainInner.firstChild.remove()
        }
        mainInner.append(createResultsBlock(globalScore));
        playAgain()
    }

    function playAgain() {
        const playAgainButton = document.querySelector('.play__again__button');

        playAgainButton.addEventListener('click', function() {
            removeResultsBlock()
            startGame();
        });
    }

    startGame()

    document.querySelector('.player-icon-1').style.background = `url("${Svg[2].play}") center center / cover no-repeat`;
}

