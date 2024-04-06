const url = new URL(location.href);
const params = new URLSearchParams(url.search);
const game = params.get('game');


function toggleFullscreen() {
  const iframe = document.getElementById('iframe');
  if (iframe.requestFullscreen) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
       iframe.requestFullscreen();
    }
  } else if (iframe.mozRequestFullScreen) { // Firefox
    if (document.mozFullScreenElement) {
      document.mozCancelFullScreen();
    } else {
      iframe.mozRequestFullScreen();
    }
  } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
    if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen();
    } else {
      iframe.webkitRequestFullscreen();
    }
  } else if (iframe.msRequestFullscreen) { // IE/Edge
    if (document.msFullscreenElement) {
      document.msExitFullscreen();
    } else {
      iframe.msRequestFullscreen();
    }
  }
}

var iframeUrl = localStorage.getItem('storedURL');
var iframeElement = document.getElementById('iframe');

if (game) {
  iframeElement.src = setGameInfo(game);
}

if (iframeUrl) {
    iframeElement.src = iframeUrl;
} else {
    console.error("No URL found in localStorage for the iframe");
}

function reload() {
  localStorage.setItem('current-url', iframe.src);
  iframe.src = localStorage.getItem('current-url');
}


function openNew() {
  window.open(iframeElement.src, '_blank');
}