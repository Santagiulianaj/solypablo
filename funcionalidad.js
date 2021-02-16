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

var r = new XMLHttpRequest();
r.onload = function() {
    myVid.src = URL.createObjectURL(r.response);
    myVid.play();
};
if (myVid.canPlayType('video/mp4;codecs="avc1.42E01E, mp4a.40.2"')) {
    r.open("GET", "video/video.mp4");
}
else {
    r.open("GET", "slide.webm");
}

r.responseType = "blob";
r.send();