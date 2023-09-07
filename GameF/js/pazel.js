/* 
what i need?
1.shurfle the con:
.a.arrof al imges-done
.b.func shrfle arr-done

2.how the user change positions?
.a.click 1 take, dclick change
*/

const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let num1 = random(0, 1);
let num2 = random(2, 3);
let num3 = random(4, 5);
let num4 = random(6, 7);
let num5 = 8;

let take = document.getElementById("take");
let drop = document.getElementById("drop");
let change = document.getElementById("change");
let imgdiv = document.querySelectorAll(".con>.divImg");
let start = document.getElementById("start");
let newGame = document.getElementById("newGame");
let body = document.getElementById("body");
let check = document.getElementById("check");
if (imgdiv && start && newGame && body && check && take && drop && change) {
  let arrDiv = [];
  for (let i of imgdiv) {
    arrDiv.push(i);
  }

  const changePosition = () => {
    let imgAll = document.querySelectorAll(".con>.divImg>img");
    let arr = [];
    for (let i of imgAll) {
      arr.push(i);
    }
    arr[num1].remove();
    arr[num2].remove();
    arr[num3].remove();
    arr[num4].remove();
    arr[num5].remove();
    arrDiv[num5].appendChild(arr[num1]);
    arrDiv[num4].appendChild(arr[num2]);
    arrDiv[num3].appendChild(arr[num4]);
    arrDiv[num2].appendChild(arr[num3]);
    arrDiv[num1].appendChild(arr[num5]);
    start.remove();
    newGame.style.display = "inline";
    userPlay();
  };

  start.addEventListener("click", changePosition);

  newGame.addEventListener("click", () => {
    location.reload(true);
  });

  const userPlay = () => {
    change.addEventListener("click", () => {
      let imgAll = document.querySelectorAll(".con>.divImg>img");
      let arr = [];
      for (let i of imgAll) {
        arr.push(i);
      }
      arr[take.value - 1].remove();
      arr[drop.value - 1].remove();
      arrDiv[take.value - 1].appendChild(arr[drop.value - 1]);
      arrDiv[drop.value - 1].appendChild(arr[take.value - 1]);
    });
  };
  const checkFunc = () => {
    let imgAll = document.querySelectorAll(".con>.divImg>img");
    let arrCheck = [];
    for (let i of imgAll) {
      arrCheck.push(i);
    }
    let x = 0;
    for (let i = 0; i <= 8; i++) {
      if (arrCheck[i].className == arrDiv[i].id) {
        x++;
      }
    }
    if (x == 9) {
      setTimeout(() => {
        document.write("y");
      }, 500);
      setTimeout(() => {
        document.write("o");
      }, 1000);
      setTimeout(() => {
        document.write("u");
      }, 1500);
      setTimeout(() => {
        document.write(" ");
      }, 2000);
      setTimeout(() => {
        document.write("W");
      }, 2500);
      setTimeout(() => {
        document.write("O");
      }, 3000);
      setTimeout(() => {
        document.write("N");
      }, 3500);
      setTimeout(() => {
        document.write(" ");
      }, 4500);
      setTimeout(() => {
        document.write("N");
      }, 5000);
      setTimeout(() => {
        document.write("o");
      }, 5500);
      setTimeout(() => {
        document.write("w");
      }, 6000);
      setTimeout(() => {
        document.write(" ");
      }, 6500);
      setTimeout(() => {
        document.write("B");
      }, 7000);
      setTimeout(() => {
        document.write("Y");
      }, 7500);
      setTimeout(() => {
        document.write("E");
      }, 8000);
      setTimeout(() => {
        location.reload(true);
      }, 8500);
    } else {
      setTimeout(() => {
        document.write("y");
      }, 500);
      setTimeout(() => {
        document.write("o");
      }, 1000);
      setTimeout(() => {
        document.write("u");
      }, 1500);
      setTimeout(() => {
        document.write(" ");
      }, 2000);
      setTimeout(() => {
        document.write("L");
      }, 2500);
      setTimeout(() => {
        document.write("O");
      }, 3000);
      setTimeout(() => {
        document.write("S");
      }, 3500);
      setTimeout(() => {
        document.write("E");
      }, 4500);
      setTimeout(() => {
        document.write(".");
      }, 5000);
      setTimeout(() => {
        document.write(".");
      }, 5500);
      setTimeout(() => {
        document.write("B");
      }, 6000);
      setTimeout(() => {
        document.write("Y");
      }, 6500);
      setTimeout(() => {
        document.write("E");
      }, 7000);
      setTimeout(() => {
        document.write("!!!!!!!!!!!!!!!!!!!!!!!!!");
      }, 7500);
      setTimeout(() => {
        location.reload(true);
      }, 8000);
    }
  };

  check.addEventListener("click", checkFunc);
}
