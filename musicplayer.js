// extracting all the controls
const audio=document.getElementById("audio");
const playpauseimage=document.getElementById("playpauseimage");
const playpausebtn=document.getElementById("playpause");
const progress=document.getElementById("progress");
const next=document.getElementById("next");
const prev=document.getElementById("prev");

const songs=["./songs/song1.mp3","./songs/song2.mp3","./songs/song3.mp3","./songs/song4.mp3","./songs/song5.mp3"];
let songIndex=0;

// Load initial song
// function for play/pause
function playPause(){
   if(audio.paused){
       audio.play();
       console.log("playing the song......");
      
       playpauseimage.src="./images/pause.png";
       playpauseimage.alt="pause";

   }
   else{
    console.log("Pausing the song.....");
    audio.pause();
   
    playpauseimage.src="./images/play-button.png";
       playpauseimage.alt="play";
   }
}

// function for next song
function nextSong(){
    songIndex=(songIndex+1)%songs.length;  // (0+1)%5=1
    audio.src=songs[songIndex];
    audio.play();
   
    playpauseimage.src="./images/pause.png";
    playpauseimage.alt="pause";
    console.log("playing the song index: ",songIndex);

}

// function for prev song
function prevSong(){
 songIndex=(songIndex-1+ songs.length)% songs.length;
 audio.src=songs[songIndex];
 audio.play();
 
 playpauseimage.src="./images/pause.png";
 playpauseimage.alt="pause";
 console.log("playing the song index: ",songIndex);
}

// function for seek bar
function seek(){
   if(audio.duration){
    progress.value=(audio.currentTime/audio.duration)*100;
   }
}


playpausebtn.addEventListener("click",playPause);
prev.addEventListener("click",prevSong);
next.addEventListener("click",nextSong);
audio.addEventListener("timeupdate",seek);
progress.addEventListener("input",()=>{
    audio.currentTime=(progress.value/100)*audio.duration;
})


