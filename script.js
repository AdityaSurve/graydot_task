[...document.querySelectorAll(".column")].map((column) => {
  column.style.setProperty("--animation", "slide");
  column.style.setProperty("height", "200%");
  column.innerHTML = column.innerHTML + column.innerHTML;
});

function openMain() {
  window.open(
    "file:///C:/Users/ADITYA/Documents/Aditya/WebDev/graydot_task/main.html",
    "_self"
  );
}
