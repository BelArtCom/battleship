document.getElementById("startButton").addEventListener("click", myFunction);

function calculateWorkingRange(max) {
  let rand = Math.random() * (max + 1) + 1;
  return Math.floor(rand);
}

function myFunction() {
  const SEA_CELLS_NUMBER = 10;
  const SHIP_CELLS_NUMBER = 5;
  const start = calculateWorkingRange(SEA_CELLS_NUMBER - SHIP_CELLS_NUMBER);
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
