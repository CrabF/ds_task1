//Раскраска логотипа
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

//Анимация header
const header = document.querySelector(".header");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  lastScrollTop = currentScroll;
});
