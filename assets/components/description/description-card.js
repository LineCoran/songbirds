
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
    
    

    descriptionBirdName.innerHTML = 'Галка'; // todo: replace by name from json file

    const descriptionBirdCountry = document.createElement('div');
    descriptionBirdCountry.className = 'description__bird-country';
    descriptionBirdCountry.innerHTML = 'Gomel' // todo: replace by city from json file
    
    const descriptionAudio = document.createElement('audio');
    descriptionAudio.className = 'description__audio';
    descriptionAudio.setAttribute('controls', '');
    descriptionAudio.src = '#';

    const descriptionText = document.createElement('p');
    descriptionText.className = 'description__text';
    descriptionText.innerHTML = "Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам"; 
    // todo replace this text fromjson file;

    descriptionPicture.append(descriptionImg);
    descriptionBird.append(descriptionBirdName, descriptionBirdCountry, descriptionAudio);
    descriptionHeader.append(descriptionPicture, descriptionBird);
    descriptionInner.append(descriptionHeader, descriptionText);
    description.append(descriptionInner);

    return description;    
}
                         