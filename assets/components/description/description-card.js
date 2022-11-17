
    export default function createCardDescription(bird) {
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
    descriptionRightText.innerHTML = 'Listen the player and choose the bird'

    const descriptionRightCountry = document.createElement('p');
    descriptionRightCountry.className = 'description__right__country';
    
    const descriptionAudio = document.createElement('audio');
    descriptionAudio.className = 'description__audio';
    descriptionAudio.setAttribute('controls', '');
    descriptionAudio.src = '#';

    descriptionLeft.append(descriptionLeftTopText, descriptionLeftImg, descriptionLeftBottomText);
    descriptionRight.append(descriptionRightTitle, descriptionRightText, descriptionRightCountry, descriptionAudio);
    description.append(descriptionLeft, descriptionRight)


    descriptionLeft.style.transform = "translateX(-200px)";
    descriptionAudio.style.transform = "translateX(400px)";
    descriptionAudio.style.transition = "0.4s linear"

    return description;    
}
