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

//Валидация формы
const form = document.querySelector("form");
const input = form.querySelector("input[type=email]");
const button = form.querySelector("button");
const spanError = form.querySelector(".subscribe__span-error");
const checkbox = form.querySelector("input[type=checkbox]");
const inputContainer = form.querySelector(".subscribe__input-container");
const successForm = document.querySelector(".subscribe__success-form");

form.addEventListener("submit", (e) => {
  successForm.classList.remove("subscribe__success-form_view");
  e.preventDefault();
  if (input.classList.contains("subscribe__input_correct")) {
    form.remove();
    successForm.classList.add("subscribe__success-form_view");
  } else {
    input.classList.add("subscribe__input_error");
    spanError.classList.add("subscribe__span-error_view");
    inputContainer.classList.add("subscribe__input-container_view");
  }
});

input.addEventListener("input", (e) => {
  validateEmail(e.target.value);
});

function validateEmail(val) {
  input.classList.remove("subscribe__input_error");
  input.classList.remove("subscribe__input_correct");
  spanError.classList.remove("subscribe__span-error_view");
  inputContainer.classList.remove("subscribe__input-container_view");
  inputContainer.classList.remove("subscribe__input-container_correct");
  if (!val.includes("@") || !val.includes(".")) {
    input.classList.add("subscribe__input_error");
    spanError.classList.add("subscribe__span-error_view");
    inputContainer.classList.add("subscribe__input-container_view");
  } else {
    input.classList.add("subscribe__input_correct");
    inputContainer.classList.add("subscribe__input-container_correct");
  }
}
