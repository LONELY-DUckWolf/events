//1
// const openBtn1 = document.querySelector("[data-action=open-modal]");
// const closeBtn1 = document.querySelector("[data-action=close-modal]");
// const backdrop1 = document.querySelector(".backdrop");
// openBtn1.addEventListener("click", (event) => {
//   backdrop1.style.opacity = 1;
//   backdrop1.style.visibility = "visible";
//   backdrop1.style.pointerEvents = "visible";
// });
// closeBtn1.addEventListener("click", (event) => {
//   backdrop1.style.opacity = 0;
//   backdrop1.style.visibility = "hidden";
//   backdrop1.style.pointerEvents = "none";
// });

//2
const openBtn = document.querySelector(".open-button")
const closeBtn = document.querySelector(".close-button");
const backdrop = document.querySelector(".backdrop");
const getBody = document.querySelector("body")
openBtn.addEventListener("click", (event) => {
    getBody.classList.add("show-modal");
});
closeBtn.addEventListener("click", (event) => {
getBody.classList.remove("show-modal");
})
backdrop.addEventListener("click", (event) => {
 if (event.target === backdrop) {
   getBody.classList.remove("show-modal");
 }
});

//3
const input1 = document.querySelector("#red");
const input2 = document.querySelector("#blue");
const input3 = document.querySelector("#green");


input1.addEventListener("click", (event) => {
  getBody.style.backgroundColor = "red";
});

input2.addEventListener("click", (event) => {
  getBody.style.backgroundColor = "blue";
});

input3.addEventListener("click", (event) => {
  getBody.style.backgroundColor = "green";
});


//4
const elementInputa = document.querySelector("#name-input");
const elementSpana = document.querySelector("#name-output");
elementInputa.addEventListener("input", (event) => {
    elementSpana.textContent = event.target.value || "ti kto";
});

const vavaInp = document.querySelector("#validation-input");
const vavaAtribut = Number(vavaInp.getAttribute("data-length"))
vavaInp.addEventListener("blur", (event) => { 
  if (vavaInp.value.length === vavaAtribut) {
    vavaInp.classList.add("vava");
    vavaInp.classList.remove("invava");
  } else {
    vavaInp.classList.add("invava");
    vavaInp.classList.remove("vava");
  }
});

//5
const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  text.style.fontSize = fontSizeControl.value + "px";
});