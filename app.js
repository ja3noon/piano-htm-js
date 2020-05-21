document.addEventListener("keydown", function(e) {
  console.log(e.keyCode);
  document
    .querySelector("span[data-key='" + e.keyCode + "']")
    .classList.add("playing");
  var audio = document.querySelector("audio[data-key='" + e.keyCode + "']");
  audio.play();
});
