"use strict";
//variables que llaman a selectores
// const circle = document.querySelectorAll(".circle");
// const codigoRgb = document.querySelectorAll(".color_rgb");
// const colors = randomColor(3);
// const selectColor = colors[Math.floor(Math.random() * 3)];
// codigoRgb.textContent = selectColor;
// const play = document.querySelector("#play");
// const circleCount = 3;

// play.addEventListener("click",function(){
//     document.querySelector("")
// })

// for (let i = 0; i < circle.length; i++) {
//     if (colors[i]) {
//         circle[i].style.background = circle[i];
//     } else {
//         circle[i].style.display = "none";
//     }
// }

const codigoRgb = document.querySelectorAll(".color_rgb");

const generateRandomNum = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

// Genera una cadena rgb aleatoria
const generateRandomRGB = () => {
  return `rgb(${generateRandomNum(255)},${generateRandomNum(
    255
  )},${generateRandomNum(255)})`;
};

button.addEventListener("click", () => {
  p.style.backgroundColor = generateRandomRGB();
});

// div.addEventListener("click", () => {
//     alert("WINNER!!");
//   });

//BOTÓN DE stopGame(explicado ja_dia8_events)
