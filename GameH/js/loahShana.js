import { dayDate2, dayDate3 } from "./loahS.js";

let mounth = document.querySelector(".mounth");
let con = document.querySelector(".con");
let r = 1;
let rr = 1;

const dateMounth2 = () => {
  const currentDate = new Date();
  rr--;
  currentDate.setMonth(currentDate.getMonth() + r - rr);

  const options = {
    month: "long",
  };
  let formattedDate = currentDate.toLocaleDateString("en-US", options);
  mounth.innerHTML =
    formattedDate +
    "<span class='plus'> +</span><span class='minus'> -</span><br> " +
    new Date().getFullYear();
  rr++;
  r++;
  let spanP = document.querySelector(".plus");
  spanP.addEventListener("click", () => {
    dateMounth2();
  });
  let spanM = document.querySelector(".minus");
  spanM.addEventListener("click", () => {
    dateMounth3();
  });
  dayDate2(r, rr);
};

const dateMounth3 = () => {
  const currentDate = new Date();
  r--;
  currentDate.setMonth(currentDate.getMonth() + r - rr);
  const options = {
    month: "long",
  };
  let formattedDate = currentDate.toLocaleDateString("en-US", options);
  mounth.innerHTML =
    formattedDate +
    "<span class='plus'> +</span><span class='minus'> -</span><br> " +
    new Date().getFullYear();
  r++;
  rr++;
  let spanM = document.querySelector(".minus");
  spanM.addEventListener("click", () => {
    spanM.addEventListener("click", () => {
      dateMounth3();
    });
  });
  let spanP = document.querySelector(".plus");
  spanP.addEventListener("click", () => {
    dateMounth2();
  });
  dayDate3(r, rr);
};

const dateMounth = () => {
  const currentDate = new Date();
  const options = {
    month: "long",
  };
  let formattedDate = currentDate.toLocaleDateString("en-US", options);
  mounth.innerHTML =
    formattedDate +
    "<span class='plus'> +</span><span class='minus'> -</span><br> " +
    new Date().getFullYear();
  let spanM = document.querySelector(".minus");
  spanM.addEventListener("click", () => {
    dateMounth3();
  });
  let spanP = document.querySelector(".plus");
  spanP.addEventListener("click", () => {
    dateMounth2();
  });
};

let days = document.querySelectorAll(".day");
const dayDate = () => {
  let i = 1;
  for (let x of days) {
    if (x.className == "day day" + i) {
      x.innerHTML = +i + "." + (new Date().getMonth() + 1) + "<br>";
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

let showSave = document.getElementById("show");
showSave.addEventListener("click", () => {
  let needParse = localStorage.getItem("Calendar");
  let show = document.querySelector(".show");
  show.innerHTML = needParse;
});

window.addEventListener("load", () => {
  dateMounth();
  dayDate();
});
