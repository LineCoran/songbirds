export default function initPlayer(audioSource, correctBird) {
    const audioPlayButton = document.getElementById('play-1');
    const audioDurationTime = document.getElementById('duration-time-1');
    const audioExactTime = document.getElementById('exact-time-1');
    const audioProgress = document.getElementById('progress__audio-1');
    const audioVolume = document.getElementById('volume-1');
    const nextButton = document.querySelector('.next__question');
    const answers = document.querySelectorAll('.answer__item__text');
    let answerBird = correctBird;
    let currentTimeGlobal = 0;
    let audio = new Audio();
    let isPlay = false;
    let audioTime = 0;

    audio.src = audioSource;
    
    audio.currentTime = 0;
    setDurationTime(audio.duration);

    setTimeout( function(){
        setDurationTime(audio.duration);
    },
    500
    )


    audioPlayButton.addEventListener('click', playAudio )

    function playAudio() {
        if (!isPlay) {
            audio.currentTime = audioTime;
            audio.play()
            isPlay = true;
            setExactTime()
        } else {
            audioTime = audio.currentTime;
            audio.pause()
            isPlay = false;
        }
    }

    function convertTime(duration) {
        let minutes, seconds, minutesString, secondsString;
        minutes = Math.floor(duration/60);
        seconds = Math.floor(duration%60);
        minutesString = (minutes<10)?"0"+String(minutes):String(minutes);
        secondsString = (seconds<10)?"0"+String(seconds):String(seconds);
        return `${minutesString}:${secondsString}`;
    }
    
    function setDurationTime(duration) {
        audioDurationTime.innerHTML = convertTime(duration);
    }

    function setExactTime() {
        audioExactTime.innerHTML = convertTime(currentTimeGlobal);
        setTimeout(setExactTime, 100);
    }

    function updateProgress(e) {
        const {currentTime, duration} = e.srcElement;
        const currentValue = currentTime / duration *100;
        if (!isNaN(currentValue))  {
            currentTimeGlobal = currentTime; 
            audioProgress.value = currentValue;
        }
    }
    
    function setProgress() {
        const audioDuration = audio.duration;
        audio.currentTime = audioProgress.value / 100 * audioDuration;
        audio.addEventListener('timeupdate', updateProgress);
    }

    function setValue() {
        audio.volume = audioVolume.value/100;
    }

    function stopAudio() {
        console.log(!!nextButton.classList.contains("next__question-active"))
        if(nextButton.classList.contains("next__question-active"))
         {
            audio.pause()
         }
    }

    function isSameBird(clicked, current) {
        let result = clicked.localeCompare(current);
        return (result == 0)?true:false;
    }

    answers.forEach((answer) => {
        answer.addEventListener('click', (event)=> {
            let birdName = event.target.innerHTML;
            if(isSameBird(birdName, answerBird)){
                currentTimeGlobal = audio.currentTime;
                audio.pause();
                isPlay = false;
            } else {
                return
            }

        });
    });

    audio.addEventListener('timeupdate', updateProgress);
    audioProgress.addEventListener('change', setProgress);
    audioVolume.addEventListener('input', setValue);
    nextButton.addEventListener('click', stopAudio);
    setValue();

}
