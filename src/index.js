import { getRandomInt, isPositiveInt } from "./utils.js";

function getCellsNumber(theForm) {
  const seaCells = theForm.seaCellsNumber.value;
  const shipCells = theForm.shipCellsNumber.value;

  if (!isPositiveInt(seaCells) || seaCells < 2) {
    alert(
      "Введи верное значение размерности моря (только целое число больше 1)"
    );
  } else if (!isPositiveInt(shipCells) || shipCells < 1) {
    alert(
      "Введи верное значение размерности корабля (только целое число больше 0)"
    );
  } else if (Number.parseInt(seaCells) <= Number.parseInt(shipCells)) {
    alert("Размерность корабля должна быть меньше размерности моря");
  } else {
    console.log(`Размерность моря: ${Number(seaCells)}.`);
    console.log(`Размерность корабля: ${Number(shipCells)}.`);
  }
}

window.getCellsNumber = getCellsNumber;

function myFunction() {
  const SEA_CELLS_NUMBER = 10;
  const SHIP_CELLS_NUMBER = 5;
  const start = getRandomInt(SEA_CELLS_NUMBER - SHIP_CELLS_NUMBER);
  console.log("start = " + start);
  const locationList = Array.from(
    { length: SHIP_CELLS_NUMBER },
    (_, i) => i + start
  );
  let guessList = [];
  let hits = 0;
  let guesses = 0;
  let isSunk = false;

  while (!isSunk) {
    const guess = Number(
      prompt(
        `Готовься, целься, стреляй! (введите число 1-${SEA_CELLS_NUMBER}):`
      )
    );
    if (Number.isNaN(guess) || guess < 1 || guess > SEA_CELLS_NUMBER) {
      alert("Пожалуйста, введите корректный номер ячейки!");
    } else {
      guesses++;
      if (locationList.includes(guess)) {
        if (!guessList.includes(guess)) {
          hits++;
        }
        guessList.push(guess);
        alert("ПОПАДАНИЕ!");
        if (hits == SHIP_CELLS_NUMBER) {
          isSunk = true;
          alert("Корабль потоплен!");
          const accuracy = Math.round((SHIP_CELLS_NUMBER / guesses) * 100);
          alert(
            `Совершено выстрелов: ${guesses}. Точность стрельбы: ${accuracy} %`
          );
        }
      } else {
        alert("ПРОМАХ");
      }
    }
  }
}
