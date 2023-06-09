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
  var tickOverlay = document.createElement("div");
  tickOverlay.classList.add("tick-overlay");
  droppedImage.appendChild(tickOverlay);
  ev.target.appendChild(droppedImage);
}

function resetPage() {
  location.reload();
}
function homePage() {
  window.location.href = "index.html";
}
