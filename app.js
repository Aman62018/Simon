let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purpel", "green"];

let h2 = document.querySelector("h2");
let started = false;
let level = 0;
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelup();
  }
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
function levelup() {
  userseq = [];
  level++;

  h2.innerText = `level ${level}`;
  let randomidx = Math.floor(Math.random() * 3);
  let randomcolor = btns[randomidx];
  let randombtn = document.querySelector(`.${randomcolor}`);

  gameseq.push(randomcolor);
  console.log(gameseq);
  gameflash(randombtn);
}

function checkans(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
    console.log("same value");
  } else {
    h2.innerHTML = `Game over! Your score was <b> ${level} <b> <br/> press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";

    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    reset();
  }
}

function btnpress() {
  let btn = this;
  userflash(btn);

  usercolor = btn.getAttribute("id");
  console.log(userseq);
  userseq.push(usercolor);

  checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  gameseq = [];
  userseq = [];
  level = 0;
  started = false;
}
