const getRandomIntInclusive = (min, max) => {
  /*
    generate random number between min and max 
    */
  min = Math.ceil(min); //round up
  max = Math.floor(max); //round down
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let countClick = [];

game12Arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
game18Arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
game24Arr = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
];

const fillCards = (array) => {
  let cards = document.querySelectorAll(".cardDiv");
  for (let i = 0; i < array.length; i++) {
    let rn = getRandomIntInclusive(0, array.length - 1);
    let temp = array[i];
    array[i] = array[rn];
    array[rn] = temp;
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].innerHTML = array[i];
  }

  playGame(cards);
};
window.addEventListener("load", () => {
  let btn12 = document.querySelector("#btn12");
  let btn18 = document.querySelector("#btn18");
  let btn24 = document.querySelector("#btn24");
  let newGame = document.getElementById("newGameBtn");
  newGame.addEventListener("click", newGameFunc);
  howManycards(btn12, btn18, btn24);
});

const howManycards = (btn12, btn18, btn24) => {
  let cardsContainer = document.querySelector("#cardsContainer");
  if (!btn12 && !btn18 && !btn24 && !cardsContainer) {
    alert("cant find Buttons");
  }
  btn12.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    for (let i = 0; i < 12; i++) {
      let card = document.createElement("div");
      card.className = "cardDiv";
      cardsContainer.appendChild(card);
    }
    fillCards(game12Arr);
  });
  btn18.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    for (let i = 0; i < 18; i++) {
      let card = document.createElement("div");
      card.className = "cardDiv";
      cardsContainer.appendChild(card);
    }
    fillCards(game18Arr);
  });
  btn24.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    for (let i = 0; i < 24; i++) {
      let card = document.createElement("div");
      card.className = "cardDiv";
      cardsContainer.appendChild(card);
    }
    fillCards(game24Arr);
  });
};
const playGame = (allCardsArr) => {
  for (let i of allCardsArr) {
    i.id = i.innerHTML;
    i.innerHTML = "";
    // console.log(i);
    i.addEventListener("click", () => {
      i.innerHTML = i.id;
      countClick.push(i);
      if (countClick.length == 2) {
        checkClick();
      }
    });
  }
};

const checkClick = () => {
  console.log(countClick);
  if (
    countClick[0].innerHTML == countClick[1].innerHTML &&
    countClick[0].innerHTML != ""
  ) {
    document.getElementById("true").style.display = "block";
    setTimeout(() => {
      countClick[0].className = "remove";
      countClick[1].className = "remove";
      countClick[1].innerHTML = "";
      countClick[0].innerHTML = "";
      countClick[1].id = "";
      countClick[0].id = "";
      countClick = [];
      document.getElementById("true").style.display = "none";
    }, 1500);
  } else {
    document.getElementById("false").style.display = "block";
    setTimeout(() => {
      countClick[0].innerHTML = "";
      countClick[1].innerHTML = "";
      countClick = [];
      document.getElementById("false").style.display = "none";
    }, 1500);
  }
};

const newGameFunc = () => {
  setTimeout(() => {
    btn12.style.backgroundColor = "navy";
    btn12.style.color = "white";
    btn18.style.backgroundColor = "navy";
    btn18.style.color = "white";
    btn24.style.backgroundColor = "navy";
    btn24.style.color = "white";
  }, 999);
  setTimeout(() => {
    btn12.style.backgroundColor = "white";
    btn12.style.color = "black";
    btn18.style.backgroundColor = "white";
    btn18.style.color = "black";
    btn24.style.backgroundColor = "white";
    btn24.style.color = "black";
  }, 1411);
  setTimeout(() => {
    btn12.style.backgroundColor = "navy";
    btn12.style.color = "white";
    btn18.style.backgroundColor = "navy";
    btn18.style.color = "white";
    btn24.style.backgroundColor = "navy";
    btn24.style.color = "white";
  }, 1899);
  setTimeout(() => {
    btn12.style.backgroundColor = "white";
    btn12.style.color = "black";
    btn18.style.backgroundColor = "white";
    btn18.style.color = "black";
    btn24.style.backgroundColor = "white";
    btn24.style.color = "black";
  }, 2822);
  let cards = document.querySelectorAll(".cardDiv");
  for (let i of cards) {
    i.remove();
  }
};
