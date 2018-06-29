const display = document.querySelector(".example"),
      answer  = document.querySelector(".answer"),
      score   = document.querySelector("#score"),
      start   = document.querySelector(".start");
let   timer   = 30;

function startCount() {
  let min = 11,
      max = 99,
      number1 = Math.round(Math.random() * (max - min) + min),
      number2 = Math.round(Math.random() * (max - min) + min);

  display.value = `${number1} + ${number2}`;
}

(() => {startCount()})(); //math example iife

function resultCheck(ke) {
  const key = ke.key;

  if ("0123456789".includes(key)) {
      answer === document.activeElement
        ? answer.value = answer.value
        : answer.value += key;
  }

  if (["Backspace", "Delete"].includes(key)) {
      answer === document.activeElement
        ? answer.value = answer.value
        : answer.value = answer.value.slice(this.length, -1);
  }

  if (["Enter"].includes(key)) {
      points = parseInt(score.textContent);

      eval(display.value) === parseInt(answer.value)
        ? score.textContent = points + 1
        : score.textContent = points - 2;
      answer.value = "";
      startCount();
  }
}
document.addEventListener("keydown", resultCheck);

start.onclick = function timerStart() {
  document.querySelector(".timer").textContent = timer;

  if (timer < 0) {
      alert("Time's UP!");
      timer = 30;
      score.textContent = "0";
  }
  else {
      setTimeout(timerStart, 1000);
      --timer;
  }
}
// document.addEventListener("click", (e) => {console.log(e)});
