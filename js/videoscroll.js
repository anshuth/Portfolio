var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 300,
    frameNumber = 0,
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 
    // var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  if (window.pageYOffset <= (7100)) {
      frameNumber = 0;
  } else if (window.pageYOffset > (8500)) {
      frameNumber  = playbackConst;
  } else {
      frameNumber  = (window.pageYOffset-7100)/playbackConst;
  }
  vid.currentTime  = frameNumber;
  console.log(window.pageYOffset, frameNumber);
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);