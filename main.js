const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
let isPlay = false;

function playAudio() {
    if(!isPlay){
        audio.play();
        isPlay = true;
        playBtn.classList.toggle('pause');
      } else {
        audio.pause();
        isPlay = false;
        playBtn.classList.toggle('pause');
     }
}

playBtn.addEventListener('click', playAudio)

