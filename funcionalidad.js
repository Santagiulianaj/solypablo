var audio = new Audio('cancion.mp3');
function play() {   
    audio.play();
}

function continuar() {
    var contenerUno = document.getElementById('contenedor-1');

    contenerUno.style.display = 'none';

    
    var contenerDos = document.getElementById('contenedor-2');
    contenerDos.style.display = 'block';

}

var myVideo = document.getElementById("video");

function playPause() { 
    if (myVideo.paused) 
      myVideo.play();
    else 
      myVideo.pause(); 
      audio.pause();
      audio.currentTime = 0;
} 
function fullscreenvideo() { 
    myVideo.requestFullscreen();
    audio.pause();
    audio.currentTime = 0;
} 
