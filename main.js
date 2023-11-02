const btnBodyColor = document.querySelector(".js-btn");
const containerList = document.querySelector(".js-list");

import { fn } from "/colorChange.js";

btnBodyColor.addEventListener("click", fn);

const itemEl = document.createElement("li");
itemEl.classList.add("list-item");
itemEl.textContent = "13";
containerList.append(itemEl);

const listEl = document.querySelector(".js-list");
listEl.addEventListener("click", onClickItem);

function onClickItem(event) {
  if (event.target.classList.contains("list-item")) {
    console.log(event.target);
    console.log(event.currentTarget);
  }
}
