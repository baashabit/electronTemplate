window.addEventListener('DOMContentLoaded', () => {
  console.log("Ingresando");
  setTimeout(() => {
    var header = document.querySelectorAll(".glass-pane")[0].style.visibility = "hidden";
    var header = document.querySelectorAll(".glass-pane")[1].style.visibility = "hidden";
    console.log(header.length);
  }, 2000);
})
