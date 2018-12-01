let adVideo = document.querySelector(".ad-video");
let intervalId = null;

document.addEventListener("scroll", handleScroll);
adVideo.addEventListener("playing", handlePlaying);

function handleScroll(scrollData) {
  // Getting sizes of video elements;
  let videoSizes = adVideo.getBoundingClientRect();
  let videoPositionY = videoSizes.top;
  let videoHeight = videoSizes.height;
  let shouldPlay =
    videoHeight * 0.5 + videoPositionY <= window.innerHeight &&
    videoPositionY + videoHeight * 0.5 > 0;
  // Only play the video when it is within the specified range and it is not playing, otherwise pause it;
  if (shouldPlay) {
    if (adVideo.paused) {
      adVideo.play();
      // Registering timeout for tracking the current time of the video;
      intervalId = setInterval(handlePlaying, 1000);
      console.log("video is playing");
    }
  } else {
    if (!adVideo.paused) {
      adVideo.pause();
      clearInterval(intervalId);
      console.log("video is paused");
    }
  }
}

function handlePlaying() {
  let currentTime = Math.round(adVideo.currentTime); // current time in seconds;
  let fullDuration = Math.round(adVideo.duration); // duration is seconds;
  let percent25 = Math.round(fullDuration * 0.25);
  let percent50 = Math.round(fullDuration * 0.5);
  let percent75 = Math.round(fullDuration * 0.75);
  if (currentTime === percent25) {
    console.log("25% has passed");
  }
  if (currentTime === percent50) {
    console.log("50% has passed");
  }
  if (currentTime === percent75) {
    console.log("75% has passed");
  }
  if (currentTime === fullDuration) {
    console.log("100% has passed");
  }
}
