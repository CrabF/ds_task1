const logoPaths = document.querySelectorAll(".header__logo g path");
const link = document.querySelector(".header__menu-link");

link.addEventListener("mouseover", (e) => {
  logoPaths.forEach((elem) => {
    elem.style.fill = "rgba(218, 51, 105, 1)";
  });
});

link.addEventListener("mouseout", (e) => {
  logoPaths.forEach((elem) => {
    elem.style.fill = "rgba(27, 31, 33, 1)";
  });
});