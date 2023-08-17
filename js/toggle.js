const toggleItems = document.querySelectorAll(".nine .toggle .toggle-item");

toggleItems.forEach((el) => {
  el.addEventListener("click", function () {
    console.log(el.querySelector("i"));
    el.parentElement.classList.toggle("toggle-show");
  });
});
