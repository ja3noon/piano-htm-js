window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function playSound(e) {
  var audio = document.querySelector("audio[data-key='" + e.keyCode + "']");
  if (!audio) return; // if no audio found do nothing
  document
    .querySelector("span[data-key='" + e.keyCode + "']")
    .classList.add("playing");

  audio.currentTime = 0; //initialize sound after event
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
