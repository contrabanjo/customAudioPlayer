const audio = document.getElementById("audio");
const seek = document.getElementById("seek");
const play = document.getElementById("play");
const rew = document.getElementById("rewind");
const ff = document.getElementById("fast-forward");
const currentTime = document.getElementById("current");
const duration = document.getElementById("duration");

var date = new Date(audio.duration * 1000);
var timeStr = date.toTimeString().split(' ')[0];
duration.innerHTML = timeStr;

function seekTo(){
 console.log(audio.currentTime);
 console.log(seek.value);
 audio.currentTime = audio.duration * (seek.value/100)
}

function updateSeekValue(){
  seek.value = Math.round((audio.currentTime/audio.duration) * 100);
  currentTime.innerHTML = audio.currentTime
  var date = new Date(audio.currentTime * 1000); // multiply by 1000 because Date() requires miliseconds
  var timeStr = date.toTimeString().split(' ')[0];
  currentTime.innerHTML = timeStr
}

seek.addEventListener('change', seekTo);
audio.addEventListener('timeupdate', updateSeekValue);

seek.addEventListener('mousedown', ()=>{audio.pause()})
seek.addEventListener('mouseup', ()=>{audio.play()})

play.addEventListener('click', ()=>{audio.paused ? audio.play() : audio.pause()});

rew.addEventListener('click', ()=>{audio.currentTime-=10})
ff.addEventListener('click', ()=>{audio.currentTime+=10})
