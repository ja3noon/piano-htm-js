document.addEventListener("keydown", function(e) {
  var audio = document.querySelector("audio[data-key='" + e.keyCode + "']");
  if (!audio) return;
  document
    .querySelector("span[data-key='" + e.keyCode + "']")
    .classList.add("playing");
  console.log(audio);
  audio.play();
});
