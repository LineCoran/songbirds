import blankBirdImage from '../../img/blankBird.png';

export default function createBirdStart(answerAudio) {
    const birds = document.createElement('section');
    birds.className = 'birds';

    const birdsInner = document.createElement('div');
    birdsInner.className = 'birds__inner';

    const birdsPicture = document.createElement('div');
    birdsPicture.className = 'birds__picture';
    birdsPicture.style.backgroundImage= `url(${blankBirdImage})`;

    const birdsImage = document.createElement('img');
    birdsImage.className = 'birds__image';

    const birdsInfo = document.createElement('div');
    birdsInfo.className = 'birds__info';

    const birdsInfoName = document.createElement('div');
    birdsInfoName.className = 'birds__info__name';
    birdsInfoName.innerHTML = '***';

    const birdsInfoAudio = document.createElement('audio');
    birdsInfoAudio.className = 'birds__info__audio';
    birdsInfoAudio.setAttribute('controls', '');
    birdsInfoAudio.setAttribute('src', answerAudio);
    console.log(answerAudio)

    birdsInfo.append(birdsInfoName, birdsInfoAudio);
    birdsPicture.append(birdsImage);
    birdsInner.append(birdsPicture, birdsInfo)
    birds.append(birdsInner);

    return birds;
}
