function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var droppedImage = document.getElementById(data);
  ev.target.appendChild(droppedImage);
  var tickOverlay = document.querySelector(".tick-overlay");
  tickOverlay.style.display = "block";
  tickOverlay.style.animation = "none";
  tickOverlay.offsetHeight;
  tickOverlay.style.animation = "tickFadeOut 2s linear forwards";
}

function resetPage() {
  location.reload();
}
function homePage() {
  window.location.href = "index.html";
}
