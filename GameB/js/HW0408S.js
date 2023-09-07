let whoplay;
let gameDiv = document.getElementById("gamerDiv");
let alerts = document.getElementById("winalert");
let tableX = document.getElementById("NumsWX");
let tableO = document.getElementById("NumsWO");
let hide = document.getElementById("hide");
let clearT = document.getElementById("clearT");
let cells = document.querySelectorAll("#gamerDiv> div");

if (gameDiv && alerts && tableX && tableO && hide && cells && clearT) {
  const balagan = () => {
    let whowon;
    for (let i = 0; i <= 3; i++) {
      if (
        cells[i].innerHTML == cells[i + 4].innerHTML &&
        cells[i + 4].innerHTML == cells[i + 8].innerHTML &&
        cells[i].innerHTML
      ) {
        winOp1(i);
        winGlobal(i, whowon);
      }
    }
    for (let i = 4; i <= 7; i++) {
      if (
        cells[i].innerHTML == cells[i + 4].innerHTML &&
        cells[i + 4].innerHTML == cells[i + 8].innerHTML &&
        cells[i].innerHTML
      ) {
        winOp1(i);
        winGlobal(i, whowon);
      }
    }
    for (let i = 0; i < 13; i += 4) {
      if (
        cells[i].innerHTML == cells[i + 1].innerHTML &&
        cells[i + 1].innerHTML == cells[i + 2].innerHTML &&
        cells[i].innerHTML
      ) {
        winOp2(i);
        winGlobal(i, whowon);
      }
    }
    for (let i = 1; i < 14; i += 4) {
      if (
        cells[i].innerHTML == cells[i + 1].innerHTML &&
        cells[i + 1].innerHTML == cells[i + 2].innerHTML &&
        cells[i].innerHTML
      ) {
        winOp2(i);
        winGlobal(i, whowon);
      }
    }
    let i = 0;
    if (
      cells[i].innerHTML == cells[i + 5].innerHTML &&
      cells[i + 5].innerHTML == cells[i + 10].innerHTML &&
      cells[i].innerHTML
    ) {
      winOp3(i);
      winGlobal(i, whowon);
    }
    i = 5;
    if (
      cells[i].innerHTML == cells[i + 5].innerHTML &&
      cells[i + 5].innerHTML == cells[i + 10].innerHTML &&
      cells[i].innerHTML
    ) {
      winOp3(i);
      winGlobal(i, whowon);
    }
    i = 3;
    if (
      cells[i].innerHTML == cells[i + 3].innerHTML &&
      cells[i + 3].innerHTML == cells[i + 6].innerHTML &&
      cells[i].innerHTML
    ) {
      winOp4(i);
      winGlobal(i, whowon);
    }
    i = 6;
    if (
      cells[i].innerHTML == cells[i + 3].innerHTML &&
      cells[i + 3].innerHTML == cells[i + 6].innerHTML &&
      cells[i].innerHTML
    ) {
      winOp4(i);
      winGlobal(i, whowon);
    }
    i = 2;
    if (
      cells[i].innerHTML == cells[i + 3].innerHTML &&
      cells[i + 3].innerHTML == cells[i + 6].innerHTML &&
      cells[i].innerHTML
    ) {
      winOp4(i);
      winGlobal(i, whowon);
    }
    i = 7;
    if (
      cells[i].innerHTML == cells[i + 3].innerHTML &&
      cells[i + 3].innerHTML == cells[i + 6].innerHTML &&
      cells[i].innerHTML
    ) {
      winOp4(i);
      winGlobal(i, whowon);
    }
    i = 1;
    if (
      cells[i].innerHTML == cells[i + 5].innerHTML &&
      cells[i + 5].innerHTML == cells[i + 10].innerHTML &&
      cells[i].innerHTML
    ) {
      winOp3(i);
      winGlobal(i, whowon);
    }
    i = 4;
    if (
      cells[i].innerHTML == cells[i + 5].innerHTML &&
      cells[i + 5].innerHTML == cells[i + 10].innerHTML &&
      cells[i].innerHTML
    ) {
      winOp3(i);
      winGlobal(i, whowon);
    }

    if (whowon != "X" && whowon != "O") {
      for (let cell of cells) {
        if (cell.innerHTML == "") {
          return;
        }
      }
      alert("No one Won the game");
      newGame();
    }
  };

  const xofun = (myE) => {
    if (myE.target.innerHTML) {
      return;
    }
    myE.target.innerHTML = whoplay;
    if (whoplay == "X") {
      whoplay = "O";
    } else {
      whoplay = "X";
    }

    balagan();
  };

  const winGlobal = (i, whowon) => {
    whowon = cells[i].innerHTML;
    alerts.innerHTML = "The Winner is: " + whowon + " !!";
    alerts.style.display = "block";
    hide.style.display = "block";
    gameDiv.style.opacity = 0.6;
    if (whowon == "X") {
      tableX.innerHTML++;
      localStorage.setItem("X Won", tableX.innerHTML + " times");
    }
    if (whowon == "O") {
      tableO.innerHTML++;
      localStorage.setItem("O Won", tableO.innerHTML + " times");
    }
  };

  const winOp1 = (e) => {
    cells[e].style.color = "blue";
    cells[e + 4].style.color = "blue";
    cells[e + 8].style.color = "blue";
  };
  const winOp2 = (e) => {
    cells[e].style.color = "blue";
    cells[e + 1].style.color = "blue";
    cells[e + 2].style.color = "blue";
  };
  const winOp3 = (i) => {
    cells[i].style.color = "blue";
    cells[i + 5].style.color = "blue";
    cells[i + 10].style.color = "blue";
  };
  const winOp4 = (i) => {
    cells[i].style.color = "blue";
    cells[i + 3].style.color = "blue";
    cells[i + 6].style.color = "blue";
  };

  const initPageLoad = () => {
    let cells = document.querySelectorAll("#gamerDiv > div");
    for (let Div of cells) {
      Div.addEventListener("click", xofun);
    }
  };

  const newGame = () => {
    whoplay = "X";
    let cells = document.querySelectorAll("#gamerDiv > div");
    for (let cell of cells) {
      cell.innerHTML = "";
      cell.style.color = "white";
      cell.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "rgb(187, 35, 214)";
      });
      cell.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "rgb(126, 37, 142)";
      });
      alerts.style.display = "none";
      hide.style.display = "none";
      gameDiv.style.opacity = 1;
    }
  };

  hide.addEventListener("click", () => {
    alerts.style.display = "none";
    hide.style.display = "none";
  });

  clearT.addEventListener("click", () => {
    tableX.innerHTML = 0;
    tableO.innerHTML = 0;
    localStorage.setItem("X Won", tableX.innerHTML + " times");
    localStorage.setItem("O Won", tableO.innerHTML + " times");
  });

  window.addEventListener("load", () => {
    initPageLoad();
    newGame();
    document.getElementById("playAgainBtn").addEventListener("click", () => {
      newGame();
    });
  });
} else {
  alert("error");
}
