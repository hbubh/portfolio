let clear = document.getElementById("clearBtn");
let clear2 = document.getElementById("clearBtn2");
let pageDiv = document.getElementById("box");
let pageSty = document.getElementById("pageStyle");
let Return = document.getElementById("return");
let Return2 = document.getElementById("return2");
pageDiv.style.position.repeat;

if (
  clear &&
  pageDiv &&
  inputContent &&
  inputColor &&
  inputSize &&
  inputWidth &&
  inputHeight &&
  inputBd &&
  inputBdR &&
  inputMar &&
  inputPed &&
  inputBgc &&
  inputSHa &&
  inputId &&
  Return
) {
  let elmsArr = [];
  const createElm = (...arr) => {
    elmsArr = [];
    let box = document.getElementById("box");
    let newElm = document.createElement(arr[0].tag);
    box.appendChild(newElm);
    newElm.innerText = arr[1].text;
    newElm.style.color = arr[2].color;
    newElm.style.fontSize = arr[3].size;
    newElm.style.width = arr[4].width;
    newElm.style.height = arr[5].height;
    newElm.style.border = arr[6].border;
    newElm.style.backgroundColor = arr[7].Bgc;
    newElm.style.borderRadius = arr[8].BdR;
    newElm.style.margin = arr[9].Margin;
    newElm.style.padding = arr[10].Pedding;
    newElm.style.boxShadow = arr[11].boxSh;
    newElm.id = arr[12].Id;
    elmsArr.push(...arr); //change to object.arr of objects
    clear.addEventListener("click", () => {
      box.appendChild(newElm).remove();
    });
    clear2.addEventListener("click", () => {
      box.appendChild(newElm).remove();
    });
  };

  const restorePage = () => {
    let newelmsArr = [];
    let jsonStr = localStorage.getItem("tags");
    newelmsArr = JSON.parse(jsonStr);
    console.log("newelmsArr", newelmsArr);
    createElm(
      newelmsArr[0],
      newelmsArr[1],
      newelmsArr[2],
      newelmsArr[3],
      newelmsArr[4],
      newelmsArr[5],
      newelmsArr[6],
      newelmsArr[7],
      newelmsArr[8],
      newelmsArr[9],
      newelmsArr[10],
      newelmsArr[11],
      newelmsArr[12]
    );
  };

  window.addEventListener("load", () => {
    document.getElementById("form1").addEventListener("submit", (e) => {
      e.preventDefault(); //stop refresh
    });

    document.getElementById("submitBtn").addEventListener("click", () => {
      let inputTag = document.getElementById("inputTag");
      let inputContent = document.getElementById("inputContent");
      let inputColor = document.getElementById("inputColor");
      let inputSize = document.getElementById("inputSize");
      let inputWidth = document.getElementById("inputWidth");
      let inputHeight = document.getElementById("inputHeight");
      let inputBd = document.getElementById("inputBd");
      let inputBdR = document.getElementById("inputBdR");
      let inputMar = document.getElementById("inputMar");
      let inputPed = document.getElementById("inputPed");
      let inputBgc = document.getElementById("inputBgc");
      let inputSHa = document.getElementById("inputSHa");
      let inputId = document.getElementById("inputId");
      if (
        inputTag &&
        inputContent &&
        inputColor &&
        inputSize &&
        inputWidth &&
        inputHeight &&
        inputBd &&
        inputBdR &&
        inputMar &&
        inputPed &&
        inputBgc &&
        inputSHa &&
        inputId
      ) {
        createElm(
          { tag: inputTag.value },
          { text: inputContent.value },
          { color: inputColor.value },
          { size: inputSize.value },
          { width: inputWidth.value },
          { hight: inputHeight.value },
          { border: inputBd.value },
          { Bgc: inputBgc.value },
          { BdR: inputBdR.value },
          { Margin: inputMar.value },
          { Pedding: inputPed.value },
          { boxSh: inputSHa.value },
          { Id: inputId.value }
        );
      }
    });
    document.getElementById("submitBtn2").addEventListener("click", () => {
      document.getElementById("form1").style.display = "none";
      document
        .getElementById("pageStyle")
        .setAttribute(
          "style",
          "background-color: rgb(105, 103, 103,0.0);color:black;margin-top: 200%"
        );
      let inputTag = document.getElementById("inputTag");
      let inputContent = document.getElementById("inputContent");
      let inputColor = document.getElementById("inputColor");
      let inputSize = document.getElementById("inputSize");
      let inputWidth = document.getElementById("inputWidth");
      let inputHeight = document.getElementById("inputHeight");
      let inputBd = document.getElementById("inputBd");
      let inputBdR = document.getElementById("inputBdR");
      let inputMar = document.getElementById("inputMar");
      let inputPed = document.getElementById("inputPed");
      let inputBgc = document.getElementById("inputBgc");
      let inputSHa = document.getElementById("inputSHa");
      let inputId = document.getElementById("inputId");
      createElm(
        { tag: inputTag.value },
        { text: inputContent.value },
        { color: inputColor.value },
        { size: inputSize.value },
        { width: inputWidth.value },
        { hight: inputHeight.value },
        { border: inputBd.value },
        { Bgc: inputBgc.value },
        { BdR: inputBdR.value },
        { Margin: inputMar.value },
        { Pedding: inputPed.value },
        { boxSh: inputSHa.value },
        { Id: inputId.value }
      );
    });

    document.getElementById("return3").addEventListener("click", () => {
      document
        .getElementById("pageStyle")
        .setAttribute("style", "background-color: rgb(33, 28, 28);color: #fff");
      document.getElementById("form1").style.display = "block";
    });

    document.getElementById("saveBtn").addEventListener("click", () => {
      let jsonStr = JSON.stringify(elmsArr);

      localStorage.setItem("tags", jsonStr); //save to localStorage
    });
    document.getElementById("saveBtn2").addEventListener("click", () => {
      let jsonStr = JSON.stringify(elmsArr);

      localStorage.setItem("tags", jsonStr); //save to localStorage
    });
    Return.addEventListener("click", () => {
      restorePage();
    });
    Return2.addEventListener("click", () => {
      restorePage();
    });
  });
}
