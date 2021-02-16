window.onload = function() {
    var contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity= '0';
    
    var contenerUno = document.getElementById('contenedor-1');
    contenerUno.style.display = 'block';
}

var audio = new Audio('cancion.mp3');

function continuar() {
    var contenerUno = document.getElementById('contenedor-1');

    contenerUno.style.display = 'none';

    
    var contenerDos = document.getElementById('contenedor-2');
    contenerDos.style.display = 'block';

    audio.play();


}

function playPause() {
    if (audio.paused)
        audio.play();
    else
        audio.pause();
        audio.currentTime = 0;
}
function pauseMusic() {
    audio.pause();
    audio.currentTime = 0;
}

/* preload video */

var videoo = document.getElementById('video');
videoo.onloadeddata = function(){
    videoo.onseeked = function(){
      if(videoo.seekable.end(0) >= videoo.duration-0.1){
        alert("Video is all loaded!");
      } else {
        videoo.currentTime=videoo.buffered.end(0); // Seek ahead to force more buffering
      }
    };
    videoo.currentTime=0; // first seek to trigger the event
  };