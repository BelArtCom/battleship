import { getRandomInt, isPositiveInt } from "./utils.js";

const MIN_SEA_SHIP_DIFF = 1;

function getCellsNumber(theForm) {
  const seaCells = theForm.seaCellsNumber.value;
  const shipCells = theForm.shipCellsNumber.value;

  if (!isPositiveInt(seaCells, 2)) {
    alert(
      "Введи верное значение размерности моря (только целое число больше 1)"
    );
    return;
  }
  if (!isPositiveInt(shipCells, 1)) {
    alert(
      "Введи верное значение размерности корабля (только целое число больше 0)"
    );
    return;
  }

  const seaCellsNumber = Number(seaCells);
  const shipCellsNumber = Number(shipCells);

  if (seaCellsNumber - shipCellsNumber < MIN_SEA_SHIP_DIFF) {
    alert("Размерность корабля должна быть меньше размерности моря");
  } else {
    playTheGame(seaCellsNumber, shipCellsNumber);
  }
}

window.getCellsNumber = getCellsNumber;

function playTheGame(seaCellsNumber, shipCellsNumber) {
  document.getElementById("setup").hidden = true;

  const start = getRandomInt(seaCellsNumber - shipCellsNumber);
  console.log("start = " + start);
  const locationList = Array.from(
    { length: shipCellsNumber },
    (_, i) => i + start
  );
  let guessList = [];
  let hits = 0;
  let guesses = 0;
  let isSunk = false;

  for (let i = 0; i < seaCellsNumber; ++i) {
    const button = document.createElement("button");
    button.textContent = `${i + 1}`;
    button.classList.add("controls_cell");
    button.type = "button";
    button.dataset.index = i + 1;
    button.addEventListener("click", () => {
      const guess = i + 1;
      guesses++;
      if (locationList.includes(guess)) {
        if (!guessList.includes(guess)) {
          hits++;
          guessList.push(guess);
        }
        alert("ПОПАДАНИЕ!");
        if (hits == shipCellsNumber) {
          isSunk = true;
          alert("Корабль потоплен!");
          const accuracy = Math.round((shipCellsNumber / guesses) * 100);
          alert(
            `Совершено выстрелов: ${guesses}. Точность стрельбы: ${accuracy}%`
          );
        }
      } else {
        alert("ПРОМАХ");
      }
    });

    const controls = document.getElementById("controls");
    controls.appendChild(button);
  }
}
