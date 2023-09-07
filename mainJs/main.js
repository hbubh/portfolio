let hum = document.querySelector(".barDn");
let openMenu = document.querySelectorAll(".kishurDn");

hum.addEventListener("click", () => {
  if (hum.id == "hum") {
    for (let i of openMenu) {
      i.style.display = "block";
    }
    hum.id = "nohum";
    return;
  }
  if (hum.id == "nohum") {
    console.log("Hi");
    for (let i of openMenu) {
      i.style.display = "none";
    }
    hum.id = "hum";
    return;
  } else {
    console.log(hum.id);
  }
});
