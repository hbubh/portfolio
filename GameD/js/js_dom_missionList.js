let Listarr = [];
let newList = document.getElementById("new");
let returnList = document.getElementById("btn");

if (newList && returnList) {
  window.addEventListener("load", () => {
    let form1 = document.getElementById("form1");
    if (form1) {
      form1.addEventListener("submit", (e) => {
        e.preventDefault(); //stop refresh
      });
    }
    let add = document.getElementById("addI");
    if (add) {
      add.addEventListener("click", () => {
        let li = document.createElement("li");
        let clear = document.createElement("button");
        clear.innerHTML = "x";
        clear.className = "clearLine";
        let valueI = document.getElementById("valueI");
        li.innerHTML = valueI.value + "   ";
        valueI.value = "";
        li.className = "list-group-item";
        let list = document.getElementById("list");
        if (li.innerHTML != "" + "   ") {
          Listarr.push(li.innerHTML);
        }

        if (list) {
          list.appendChild(li);
          li.appendChild(clear);
          clear.addEventListener("click", () => {
            li.remove();

            // neet to remove the li from the arr
          });
        }
        li.addEventListener("mouseenter", (e) => {
          e.target.className = "list-group-item active";
        });
        li.addEventListener("mouseleave", (b) => {
          b.target.className = "list-group-item";
        });
      });
    }
    let save = document.getElementById("save");
    if (save) {
      save.addEventListener("click", () => {
        let lis = document.querySelectorAll("#list>.list-group-item");
        for (let li of lis) {
          li.remove();
        }
        let oldList = document.createElement("div");
        oldList.className = "oldList";
        oldList.innerHTML = `<br><br>`;
        for (let li of Listarr) {
          oldList.innerHTML += "*" + li + "<br>";
        }
        /* for (let i of list) {
          i.remove();
        } */
        oldList.innerHTML += `<br> <div>-clickMe- </div><br><span>${new Date().getDate()} - ${
          new Date().getMonth() + 1
        } - ${new Date().getFullYear()}</span>`;

        let conOldList = document.getElementById("conOldLists");
        conOldList.appendChild(oldList);
        oldList.addEventListener("click", () => {
          let backList = document.getElementById("backlist");
          let send = document.getElementById("send");
          send.addEventListener("click", () => {
            let jsList = JSON.stringify(oldList.innerHTML);
            localStorage.setItem("list", jsList);
          });
          oldList.className = "oldListBig";
          backList.style.display = "block";
          send.style.display = "block";

          backList.addEventListener("click", () => {
            backList.style.display = "none";
            send.style.display = "none";
            oldList.className = "oldList";
            newList.addEventListener("click", () => {
              Listarr = [];
              let lis = document.querySelectorAll("#list>.list-group-item");
              for (let li of lis) {
                li.remove();
              }
            });
          });
        });
      });
      returnList.addEventListener("click", () => {
        let getinfo = localStorage.getItem("list");
        let create = JSON.parse(getinfo);
        let oldList = document.createElement("div");
        oldList.className = "oldList";
        oldList.innerHTML = create;
        let conOldList = document.getElementById("conOldLists");
        conOldList.appendChild(oldList);
        oldList.addEventListener("click", () => {
          let backList = document.getElementById("backlist");
          let send = document.getElementById("send");
          send.addEventListener("click", () => {
            let jsList = JSON.stringify(oldList.innerHTML);
            localStorage.setItem("list", jsList);
          });
          oldList.className = "oldListBig";
          backList.style.display = "block";
          send.style.display = "block";

          backList.addEventListener("click", () => {
            backList.style.display = "none";
            send.style.display = "none";
            oldList.className = "oldList";
            newList.addEventListener("click", () => {
              Listarr = [];
              let lis = document.querySelectorAll("#list>.list-group-item");
              for (let li of lis) {
                li.remove();
              }
            });
          });
        });
      });
    }
  });
}
