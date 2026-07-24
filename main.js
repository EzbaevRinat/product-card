// Покраска всех карточек
const allCard = document.querySelectorAll(".card");
const changeColorAllCardButton = document.querySelector(
  ".change-color-all-card",
);
const greenColorHash = "#00ff00";
const blueColorHash = "#0000ff";
const yellow = "#FFFF00";
const orange = "#FFA500";

changeColorAllCardButton.addEventListener("click", () => {
  allCard.forEach((card) => (card.style.backgroundColor = greenColorHash));
});

// Покраска первой карточки
const firstCard = document.querySelector(".card");
const changeColorFirstCardButton = document.querySelector(
  ".change-color-first-card",
);

changeColorFirstCardButton.addEventListener("click", () => {
  firstCard.style.backgroundColor = blueColorHash;
});

//открыть Google
const openGoogleButton = document.querySelector(".open-google");
openGoogleButton.addEventListener("click", openGoogle);
const googleURL = "https://google.com";

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");
  if (answer === true) {
    window.open("https://google.com");
  } else {
    return;
  }
}

//Вывод консоль лог
const outputLogButton = document.querySelector(".output-consol-log");

outputLogButton.addEventListener("click", () => outputConsoleLog("Д/З №4"));

function outputConsoleLog(massage) {
  alert(massage);
  console.log(massage);
}
//outputConsoleLog('Д/З №4')

//Вывод в консоль заголовка
const contentTitle = document.querySelector(".title");
contentTitle.addEventListener("mouseover", () => {
  outputConsoleLog(contentTitle.textContent);
});
function outputConsoleLog(massage) {
  console.log(massage);
}

// Изменение цвета кнопки
const changeColorButton = document.querySelector(".change-color-button");
changeColorButton.addEventListener("click", () => {
  //changeColorButton.style.backgroundColor = 'yellow';
  changeColorButton.classList.toggle("orange");
});
