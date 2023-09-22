const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
let isPlay = false;
const playNum = 0;

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

songsArray = [
  {name: "Ed Sheeran", song: "Barcelona"},
  {name: "Imagine Dragons", song: "Symphony"},
  {name: "Sia", song: "Candy Cane Lane"},
  {name: "Sia & David Guetta", song: "Floating Through Space"}
]

