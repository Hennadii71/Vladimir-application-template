const bodyColor = document.querySelector("body");
const btnBodyColor = document.querySelector(".js-btn");

export function fn() {
  bodyColor.classList.add("new-color");
}

btnBodyColor.addEventListener("click", fn);
