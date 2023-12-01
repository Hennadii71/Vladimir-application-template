const fiveClassK1 = [
  { task: "345 + 146", result: 491 },
  { task: "770 - 289", result: 481 },
  { task: "124 + 67 + 76", result: 267 },
  { task: "357 - 27 - 73", result: 257 },
  { task: "16 * 25", result: 400 },
  { task: "26 * 15", result: 390 },
  { task: "162 - 12 * 5", result: 102 },
  { task: "164 / 4", result: 41 },
  { task: "2005 / 5", result: 401 },
  { task: "75 * 23 + 75 * 77", result: 7500 },
  { task: "(162 - 12) * 5", result: 750 },
  { task: "135 - 35 * 2 + 10", result: 75 },
];

const listResult = document.querySelector(".js-result-list");
const btnFive = document.querySelector(".js-five");
btnFive.disabled = false;

const markup = fiveClassK1.map(({ result }) =>
  `<li><p>${result}</p></li>`
  ).join("");


function addList(evt) {
  btnFive.disabled = true;
  listResult.insertAdjacentHTML("afterbegin", markup);
}

btnFive.addEventListener("click", addList);




// const firstElem = document.querySelector(".js-elem");
// firstElem.addEventListener("click", marcupElem);

// function marcupElem() {
//   const div = document.createElement("div");
//   div.classList.add("elem", "elem-green");
//   div.textContent = "другий";

//   firstElem.parentNode.replaceChild(div, firstElem);
// }
