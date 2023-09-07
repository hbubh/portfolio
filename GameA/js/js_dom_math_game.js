const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min); // round up
  max = Math.floor(max); // round down
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

let n1 = getRandomIntInclusive(1, 10);
let n2 = getRandomIntInclusive(1, 10);
let op = getRandomIntInclusive(1, 4);
if (op == 1) {
  op = "+";
}
if (op == 2) {
  op = "-";
}
if (op == 3) {
  op = "*";
}
if (op == 4) {
  op = "/";
}

let divpopup = document.createElement("div");
divpopup.className = "popup";
document.querySelector(".container").appendChild(divpopup);

const mathFub = () => {
  document.getElementById("quest").innerText = `${n1} ${op} ${n2} = `;
  document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    let answer = document.getElementById("answer");
    if (answer) {
      if (op == "-") {
        if (n1 - n2 == answer.value) {
          divpopup.innerHTML = "Right Answer";
          divpopup.style.color = "rgb(28, 198, 28)";
        } else {
          divpopup.innerHTML = "Wrong Answer";
          divpopup.style.color = "red";
        }
      }
      if (op == "+") {
        if (n1 + n2 == answer.value) {
          divpopup.innerHTML = "Right Answer";
          divpopup.style.color = "rgb(28, 198, 28)";
        } else {
          divpopup.innerHTML = "Wrong Answer";
          divpopup.style.color = "red";
        }
      }
      if (op == "*") {
        if (n1 * n2 == answer.value) {
          divpopup.innerHTML = "Right Answer";
          divpopup.style.color = "rgb(28, 198, 28)";
        } else {
          divpopup.innerHTML = "Wrong Answer";
          divpopup.style.color = "red";
        }
      }
      if (op == "/") {
        if (n1 / n2 == answer.value) {
          divpopup.innerHTML = "Right Answer";
          divpopup.style.color = "rgb(28, 198, 28)";
        } else {
          divpopup.innerHTML = "Wrong Answer";
          divpopup.style.color = "red";
        }
      }
    }
  });

  let nqwest = document.getElementById("newquest");
  if (nqwest) {
    nqwest.addEventListener("click", () => {
      divpopup.innerHTML = "";
      document.getElementById("quest").innerText = `${n1} ${op} ${n2} = `;
    });
  }
};
mathFub();
