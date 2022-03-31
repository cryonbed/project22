const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".tombol");
let nomer = 1;

let manualNav = function (manual) {
  slides.forEach(function (slide) {
    slide.classList.remove("aktif");
    btns.forEach(function (tombol) {
      tombol.classList.remove("aktif");
    });
  });
  slides[manual].classList.add("aktif");
  btns[manual].classList.add("aktif");
};

btns.forEach(function (tombol, i) {
  tombol.addEventListener("click", function () {
    manualNav(i);
    nomer = i;
  });
});
