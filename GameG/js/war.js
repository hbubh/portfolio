let opCards = document.querySelector(".opCards");
let myCards = document.querySelector(".myCards");
let myWar = document.querySelector(".myWar");
let opWar = document.querySelector(".opWar");
let whoWon = document.querySelector(".whoWon");
let start = document.getElementById("start");
let myRe = document.querySelector(".myReCards");
let opRe = document.querySelector(".opReCards");
let rematch = document.getElementById("rematch");
let plate = document.querySelector(".warplate");
if (
  opCards &&
  myCards &&
  myWar &&
  opWar &&
  whoWon &&
  start &&
  myRe &&
  opRe &&
  rematch &&
  plate
) {
  rematch.addEventListener("click", () => {
    location.reload(true);
  });
  let myArr = [];
  let opArr = [];

  if (opCards && myCards && myWar && opWar && whoWon && start) {
    start.addEventListener("click", () => {
      const random = (min, max) => {
        min = Math.ceil(min); // round up
        max = Math.floor(max); // round down
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      for (let i = 1; i <= 10; i++) {
        let card = document.createElement("div");
        card.id = random(2, 14);
        card.innerHTML = card.id;
        card.className = "card";
        if (card.id == 11) {
          card.innerHTML = "J";
        }
        if (card.id == 12) {
          card.innerHTML = "Q";
        }
        if (card.id == 13) {
          card.innerHTML = "K";
        }
        if (card.id == 14) {
          card.innerHTML = "A";
        }
        myArr.push(card);
        myCards.appendChild(card);
        card.addEventListener("click", () => {
          war();
        });
      }
      for (let i = 1; i <= 10; i++) {
        let card = document.createElement("div");
        card.id = random(2, 14);
        card.innerHTML = card.id;
        card.className = "card";
        if (card.id == 11) {
          card.innerHTML = "J";
        }
        if (card.id == 12) {
          card.innerHTML = "Q";
        }
        if (card.id == 13) {
          card.innerHTML = "K";
        }
        if (card.id == 14) {
          card.innerHTML = "A";
        }
        opArr.push(card);
        opCards.appendChild(card);
      }
    });

    const war = () => {
      let z = myArr.length - 1;
      myWar.appendChild(myArr[z]);
      myArr[z].style.backgroundColor = "darkgreen";
      opWar.appendChild(opArr[z]);
      myArr.splice(z);
      opArr.splice(z);

      checkWhoWon();
    };

    const checkWhoWon = () => {
      let myCheck = document.querySelector(".myWar>.card");
      let opCheck = document.querySelector(".opWar>.card");
      myCheck.style.backgroundColor = "darkgreen";
      opCheck.style.backgroundColor = "darkred";
      if (+myCheck.id > +opCheck.id) {
        whoWon.innerHTML = "You Won";
        whoWon.style.color = "white";
        setTimeout(() => {
          myRe.appendChild(myCheck);
          myRe.appendChild(opCheck);
          whoWon.innerHTML = "";
          myCheck.style.backgroundColor = "rgba(184, 89, 11, 0.2)";
          opCheck.style.backgroundColor = "rgba(184, 89, 11, 0.2)";
          myCheck.style.transform = "rotate(25deg)";
          opCheck.style.transform = "rotate(37deg)";
          checkStatus();
        }, 1500);
      } else if (+myCheck.id < +opCheck.id) {
        whoWon.innerHTML = "You lose";
        whoWon.style.color = "red";
        setTimeout(() => {
          opRe.appendChild(myCheck);
          opRe.appendChild(opCheck);
          whoWon.innerHTML = "";
          myCheck.style.backgroundColor = "rgba(184, 89, 11, 0.2)";
          myCheck.style.transform = "rotate(25deg)";
          opCheck.style.transform = "rotate(37deg)";
          opCheck.style.backgroundColor = "rgba(184, 89, 11, 0.2)";
          checkStatus();
        }, 1500);
      } else if (+myCheck.id == +opCheck.id) {
        whoWon.innerHTML = "Drow";
        whoWon.style.color = "darkblue";
        setTimeout(() => {
          myRe.appendChild(myCheck);
          opRe.appendChild(opCheck);
          whoWon.innerHTML = "";
          myCheck.style.backgroundColor = "rgba(184, 89, 11, 0.2)";
          opCheck.style.backgroundColor = "rgba(184, 89, 11, 0.2)";
          myCheck.style.transform = "rotate(25deg)";
          opCheck.style.transform = "rotate(37deg)";
          checkStatus();
        }, 1500);
      }
    };

    const checkStatus = () => {
      let popUp = document.querySelector(".popUp");
      let checkGum = document.querySelectorAll(".myCards>.card");
      let newarr = [];
      for (let i of checkGum) {
        newarr.push(i);
      }
      if (+newarr.length == 0) {
        myArr = [];
        opArr = [];
        let allNew = document.querySelectorAll(".myReCards>.card");
        let allNewop = document.querySelectorAll(".opReCards>.card");
        for (let x of allNew) {
          myCards.appendChild(x);
          x.style.transform = "rotate(0)";
          myArr.push(x);
        }
        for (let z of allNewop) {
          z.style.transform = "rotate(0)";
          opCards.appendChild(z);
          opArr.push(z);
        }
        let num1 = 10 * (myArr.length / 2);
        let num2 = 10 * (opArr.length / 2);
        if (+myArr.length < +opArr.length) {
          plate.style.opacity = "0.3";
          popUp.innerHTML = `You Lose The Game! <br> <br> Socre: ${num1} Vs ${num2}<br>`;
          popUp.setAttribute("style", "display:block; color:red");
          popUp.appendChild(rematch);
        }
        if (+myArr.length > +opArr.length) {
          plate.style.opacity = "0.3";
          popUp.innerHTML = `You Won The Game! <br> <br> Socre: ${num1} Vs ${num2}<br>`;
          popUp.setAttribute("style", "display:block; color:green");
          popUp.appendChild(rematch);
        }
        if (+myArr.length == +opArr.length) {
          plate.style.opacity = "0.3";
          popUp.innerHTML = `Game Drow! <br> <br> Socre: ${num1} Vs ${num2}<br>`;
          popUp.setAttribute("style", "display:block; color:rgb(164, 164, 1)");
          popUp.appendChild(rematch);
        }
      }
    };
  }
}
