
    export default function createCardDescription(bird) {
    const description = document.createElement('section');
    description.className = 'description';

    const descriptionInner = document.createElement('div');
    descriptionInner.className = 'description__inner';
    
    const descriptionHeader = document.createElement('div');
    descriptionHeader.className = 'description__header'

    const descriptionPicture = document.createElement('div');
    descriptionPicture.className = 'description__picture';

    const descriptionImg = document.createElement('img');
    descriptionImg.className = 'description__img';

    const descriptionBird = document.createElement('div');
    descriptionBird.className = 'description__bird';

    const descriptionBirdName = document.createElement('div');
    descriptionBirdName.className = 'description__bird-name';
    
    

    descriptionBirdName.innerHTML = 'Галка';

    const descriptionBirdCountry = document.createElement('div');
    descriptionBirdCountry.className = 'description__bird-country';
    descriptionBirdCountry.innerHTML = 'Gomel';
    
    const descriptionAudio = document.createElement('audio');
    descriptionAudio.className = 'description__audio';
    descriptionAudio.setAttribute('controls', '');
    descriptionAudio.src = '#';

    const descriptionText = document.createElement('p');
    descriptionText.className = 'description__text';
    descriptionText.innerHTML = "Послушайте плеер <br> Выберите птицу из списка"; 

    descriptionPicture.append(descriptionImg);
    descriptionBird.append(descriptionBirdName, descriptionBirdCountry, descriptionAudio);
    descriptionHeader.append(descriptionPicture, descriptionBird);
    descriptionInner.append(descriptionHeader, descriptionText);
    description.append(descriptionInner);

    descriptionHeader.style.display = "none"

    return description;    
}
             
