const accordion_item= document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
item.addEventListener("click", () => {
item.classList.toggle("active");
  })
})
