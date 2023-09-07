import {
  plusFun,
  minusFun,
  kefelFun,
  hilukFun,
  randon,
} from "./tirgul1508export.js";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn = document.getElementById("btn5");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let target = document.getElementById("target");
let arr = [plusFun, minusFun, kefelFun, hilukFun];
window.addEventListener("load", () => {
  if (btn1 && btn2 && btn3 && btn4 && input1 && input2 && target && arr) {
    btn1.addEventListener("click", () => {
      target.innerHTML = plusFun(+input1.value, +input2.value);
    });

    btn2.addEventListener("click", () => {
      target.innerHTML = minusFun(+input1.value, +input2.value);
    });

    btn3.addEventListener("click", () => {
      target.innerHTML = kefelFun(+input1.value, +input2.value);
    });

    btn4.addEventListener("click", () => {
      target.innerHTML = hilukFun(+input1.value, +input2.value);
    });
    btn.addEventListener("click", () => {
      let i = randon(0, 3);
      target.innerHTML =
        "  An equation of type: " +
        "(" +
        arr[i] +
        ") " +
        "= " +
        arr[i](+input1.value, +input2.value);
    });
  } else {
    alert("Error");
  }
});
