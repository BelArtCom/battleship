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

  while (!isSunk) {
    const guess = Number(
      prompt(`Готовься, целься, стреляй! (введите число 1-${seaCellsNumber}):`)
    );
    if (Number.isNaN(guess) || guess < 1 || guess > seaCellsNumber) {
      alert("Пожалуйста, введите корректный номер ячейки!");
    } else {
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
    }
  }
}
