let days = document.querySelectorAll(".day");
let con = document.querySelector(".con");

const dayDate2 = (r, rr) => {
  let i = 1;
  for (let x of days) {
    if (x.className == "day day" + i) {
      if (new Date().getMonth() + 1 + r - rr <= 0) {
        x.innerHTML =
          +i + "." + (new Date().getMonth() + 1 + r - rr + 12) + "<br>";
      } else if (new Date().getMonth() + 1 + r - rr >= 13) {
        x.innerHTML =
          +i + "." + (new Date().getMonth() + 1 + r - rr - 12) + "<br>";
      } else {
        x.innerHTML = +i + "." + (new Date().getMonth() + 1 + r - rr) + "<br>";
      }

      i++;
    }
    x.addEventListener("click", () => {
      let show = document.querySelector(".show");
      show.innerHTML = " ";
      for (let y of days) {
        y.style.border = "1px solid black";
        y.style.backgroundColor = "lightblue";
      }
      x.style.border = "3px solid green";
      x.style.backgroundColor = "lightgrey";
      show.innerHTML += "Event on Day" + x.innerHTML;
    });
  }

  let newCreat = document.createElement("button");
  newCreat.innerHTML = "Add Event";
  newCreat.className = "but";
  let mounth = document.querySelector(".mounth");
  mounth.appendChild(newCreat);
  newCreat.addEventListener("click", () => {
    let poup = document.querySelector(".popup");
    poup.style.display = "block";
    con.style.opacity = "0.2";
    let input = document.getElementById("input");
    let nums = document.getElementById("nums");
    let save = document.getElementById("save");
    save.addEventListener("click", () => {
      for (let z of days) {
        if (z.className == "day day" + nums.value) {
          z.innerHTML += "<br>" + input.value;
          localStorage.setItem("Calendar", "onDate:" + z.innerHTML);
        }
      }
      nums.value = "";
      input.value = "";
      poup.style.display = "none";
      con.style.opacity = "1";
    });
  });
};

const dayDate3 = (r, rr) => {
  let i = 1;
  for (let x of days) {
    if (x.className == "day day" + i) {
      if (new Date().getMonth() + 1 + r - rr <= 0) {
        x.innerHTML =
          +i + "." + (new Date().getMonth() + 1 + r - rr + 12) + "<br>";
      } else if (new Date().getMonth() + 1 + r - rr >= 13) {
        x.innerHTML =
          +i + "." + (new Date().getMonth() + 1 + r - rr - 12) + "<br>";
      } else {
        x.innerHTML = +i + "." + (new Date().getMonth() + 1 + r - rr) + "<br>";
      }

      i++;
    }
    x.addEventListener("click", () => {
      let show = document.querySelector(".show");
      show.innerHTML = " ";
      for (let y of days) {
        y.style.border = "1px solid black";
        y.style.backgroundColor = "lightblue";
      }
      x.style.border = "3px solid green";
      x.style.backgroundColor = "lightgrey";
      show.innerHTML += "Event on Day" + x.innerHTML;
    });
  }
  let newCreat = document.createElement("button");
  newCreat.innerHTML = "Add Event";
  newCreat.className = "but";
  let mounth = document.querySelector(".mounth");
  mounth.appendChild(newCreat);
  newCreat.addEventListener("click", () => {
    let poup = document.querySelector(".popup");
    poup.style.display = "block";
    con.style.opacity = "0.2";
    let input = document.getElementById("input");
    let nums = document.getElementById("nums");
    let save = document.getElementById("save");
    save.addEventListener("click", () => {
      for (let z of days) {
        if (z.className == "day day" + nums.value) {
          z.innerHTML += "<br>" + input.value;
          localStorage.setItem("Calendar", "onDate:" + z.innerHTML);
        }
      }
      nums.value = "";
      input.value = "";
      poup.style.display = "none";
      con.style.opacity = "1";
    });
  });
};

export { dayDate2, dayDate3 };
