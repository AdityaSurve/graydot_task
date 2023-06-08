[...document.querySelectorAll(".column")].map((column) => {
  column.style.setProperty("--animation", "slide");
  column.style.setProperty("height", "200%");
  column.innerHTML = column.innerHTML + column.innerHTML;
});

function portfolio() {
  window.open("https://surveaditya15.netlify.app");
}
