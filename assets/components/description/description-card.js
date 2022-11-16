
    export default function createCardDescription(bird) {
    // const description = document.createElement('section');
    // description.className = 'description';


    // const descriptionInner = document.createElement('div');
    // descriptionInner.className = 'description__inner';
    
    // const descriptionHeader = document.createElement('div');
    // descriptionHeader.className = 'description__header'

    // const descriptionPicture = document.createElement('div');
    // descriptionPicture.className = 'description__picture';

    // const descriptionImg = document.createElement('img');
    // descriptionImg.className = 'description__img';

    // const descriptionBird = document.createElement('div');
    // descriptionBird.className = 'description__bird';

    // const descriptionBirdName = document.createElement('div');
    // descriptionBirdName.className = 'description__bird-name';
    
    // descriptionBirdName.innerHTML = 'Галка';

    // const descriptionBirdCountry = document.createElement('div');
    // descriptionBirdCountry.className = 'description__bird-country';
    // descriptionBirdCountry.innerHTML = 'Gomel';
    
    // const descriptionAudio = document.createElement('audio');
    // descriptionAudio.className = 'description__audio';
    // descriptionAudio.setAttribute('controls', '');
    // descriptionAudio.src = '#';

    // const descriptionText = document.createElement('p');
    // descriptionText.className = 'description__text';
    // descriptionText.innerHTML = "Послушайте плеер <br> Выберите птицу из списка"; 

    // descriptionPicture.append(descriptionImg);
    // descriptionBird.append(descriptionBirdName, descriptionBirdCountry, descriptionAudio);
    // descriptionHeader.append(descriptionPicture, descriptionBird);
    // descriptionInner.append(descriptionHeader, descriptionText);
    // description.append(descriptionInner);

    // descriptionHeader.style.display = "none"

    // return description;    
    const description = document.createElement('section');
    description.className = 'description';

    
    const descriptionLeft = document.createElement('div');
    descriptionLeft.className = 'description__left';
    
    const descriptionRight = document.createElement('div');
    descriptionRight.className = 'description__right'

    const descriptionLeftTopText = document.createElement('h4');
    descriptionLeftTopText.className = 'description__left__text';
    descriptionLeftTopText.id = 'description-level';
    descriptionLeftTopText.innerHTML = 'level <span id="card-level">123<span>'
    // to do add level

    const descriptionLeftBottomText = document.createElement('h4');
    descriptionLeftBottomText.className = 'description__left__text';
    descriptionLeftBottomText.id = 'description-score';
    descriptionLeftBottomText.innerHTML = 'score <span id="card-score">123<span>';
    // to do add score
    
    const descriptionLeftImg = document.createElement('div');
    descriptionLeftImg.className = 'description__left__img';


    const descriptionRightTitle = document.createElement('div');
    descriptionRightTitle.className = 'description__right__title';

    const descriptionRightText = document.createElement('p');
    descriptionRightText.className = 'description__right__text';
    descriptionRightText.innerHTML = 'listen the player and choose the bird'

    const descriptionRightCountry = document.createElement('p');
    descriptionRightCountry.className = 'description__right__country';
    
    const descriptionAudio = document.createElement('audio');
    descriptionAudio.className = 'description__audio';
    descriptionAudio.setAttribute('controls', '');
    descriptionAudio.src = '#';

    descriptionLeft.append(descriptionLeftTopText, descriptionLeftImg, descriptionLeftBottomText);
    descriptionRight.append(descriptionRightTitle, descriptionRightText, descriptionRightCountry, descriptionAudio);
    description.append(descriptionLeft, descriptionRight)


    descriptionLeft.style.display = "none"

    return description;    
}

{/* <div class="description">
        <div class="description__left">
            <h4 class="description__left__text">Level 1</h4>
            <div class="description__left__img"></div>
            <h4 class="description__left__text">5 points</h4>
        </div>  
        <div class="description__right">
            <div class="description__right__title">
                Soroka
            </div>
            <p class="description__right__text">
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Omnis iste doloremque 
                modi eos laboriosam
            </p>
            <div class="description__right__country">Sovola</div>
        </div>
    </div>
              */}
