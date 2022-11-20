export default function createWelcomeBlock() {
    const countLayer = 20;
    const language = 'en';
    const text = {
        en: "Play",
        ru: "Играть",
    }

    const welcome = document.createElement('section');
    welcome.className = 'welcome';
    welcome.id = 'welcome-page';

    const stage = document.createElement('div');
    stage.className = 'stage';

    for (let i = 0; i < countLayer; i++) {
        const layer = document.createElement('div');
        layer.className = 'layer';
        stage.append(layer)
    }

    const welcomeButton = document.createElement('button');
    welcomeButton.className = 'welcome__button next__question next__question-active';
    welcomeButton.innerHTML = text[language];

    welcome.append(stage, welcomeButton);

    return welcome
}
/* <section class="welcome">
            <div class="stage">
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>                        
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
        </div>
    <button class="welcome__button next__question next__question-active">Play</button>
</section>  */