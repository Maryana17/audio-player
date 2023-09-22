const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
let isPlay = false;

/*function playAudio() {
  if(!isPlay){
    audio.play();
  }else{
    audio.pause();
  }
}
function pauseAudio() {
  audio.pause();
}
playBtn.addEventListener('click', playAudio)
pauseBtn.addEventListener('click', pauseAudio)
*/

playBtn.addEventListener('click', () => {
    if(!isPlay){
        audio.play();
        isPlay = true;
        
      } else {
        audio.pause();
        isPlay = false;
     }
})
function toggleBtn() {
    playBtn.classList.toggle('pause');
  }
  playBtn.addEventListener('click', toggleBtn);