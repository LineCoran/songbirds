import createBirdStart from "../components/bird/bird";
import createGameQuestion from "../components/game/game";
import createCardDescription from "../components/description/description-card";
import createNav from "../components/nav/nav";
import birdsData from "../data/birdsData";
export default function init() {
    let nextQuestionButton;
    let globalScore = 0;
    let questionAudio;
    let globalScoreHtmlBlock = document.getElementById('score');
    let stepScore = 5;
    let failCount = 0;
    let stepEnd = false;
    //let stepItemList = document.querySelectorAll('.nav__item');
    let currentStep = 0;
    let correctlyAnswer = setCorrectAnswer(currentStep);

    showQuestionBlock(currentStep);
    listenerForAnswerItem();
    findNextQuestionButton();
    showNav();
    changeStepNavList();



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
        let descriptionLeftBlock = document.querySelector('.description__left');
        let descriptionCard = document.querySelector('.description');

        if (isCorrectAnswer(clickedBirdName, correctlyAnswer)) {
            if(!stepEnd) {
                globalScore+=stepScore;
                clickedBirdButton.classList.add('answer__item-correct');
                globalScoreHtmlBlock.innerHTML = `${globalScore}`;
                showCorrectlyBird(correctlyAnswer, currentStep);
                nextQuestionButton.addEventListener('click', ()=> {
                    currentStep++;
                    failCount = 0;
                    stepEnd = false;
                    changeStepGame();
                });
                descriptionLeftBlock.className = "description__left"
                descriptionLeftBlock.classList.add(`error-card${failCount}`);
                descriptionCard.classList.add('correct-color');
                setTimeout(function(){
                    descriptionCard.classList.remove('correct-color');
                }, 500 )
                stepEnd = true;
            }
        } else {
            if (!stepEnd) {
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
            clickedBirdButton.classList.add('answer__item-incorrect');
            stepScore--;
            }
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
        let birdName = document.querySelector('.description__right__title');
        let birdCountry = document.querySelector('.description__right__country');
        let birdSound = document.querySelector('.description__audio');
        let birdText = document.querySelector('.description__right__text');
        let descriptionLeft = document.querySelector('.description__left');
        descriptionLeft.style.transform = 'translateX(-600px)';
        let descriptionImg = document.querySelector('.description__left__img');
        let cardLevel = document.getElementById("card-level");
        let cardScore = document.getElementById("card-score");
        setTimeout(function() {
            descriptionLeft.style.transform = 'translateX(0)';
            birdSound.style.transform = 'translateX(0)'
        }, 150)

        birdName.innerHTML = currentBird.name;
        birdCountry.innerHTML = currentBird.species;
        birdText.innerHTML = currentBird.description;
        birdSound.src = currentBird.audio;
        cardLevel.innerHTML = currentStep;
        cardScore.innerHTML = stepScore;
        descriptionImg.style.backgroundImage = `url('${currentBird.image}')`
    }

    function showQuestionBlock(step) {
        const mainInner = document.getElementById('main__inner');
        mainInner.append(createBirdStart(questionAudio), createGameQuestion(step))
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

    function changeStepNavList() {
        const stepItemList = document.querySelectorAll('.nav__item');
        stepItemList.forEach((navItem)=> {
            navItem.classList.remove("nav__item-active");
        })
        stepItemList[currentStep].classList.add("nav__item-active");
    }
}

