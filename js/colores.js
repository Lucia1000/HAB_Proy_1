"use strict";

const codigoRgb = document.querySelector(".color_rgb");
const l1 = document.querySelector("#circulo1");
const l2 = document.querySelector("#circulo2");
const l3 = document.querySelector("#circulo3");

//Genero numeros aleatorios de 0 a 255 (para el rgb)
const getRandomNum = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

// Genera una cadena rgb aleatoria
const getRandomRGB = () => {
  return [getRandomNum(255), getRandomNum(255), getRandomNum(255)];
};

//al hacer click en el texto del código RGB me cambie los colores de los li y un nuevo rgb

const correctColor = getRandomRGB();

const firstColor = [
  correctColor[0] + 50,
  correctColor[1],
  correctColor[2] - 50,
];

const secondColor = [
  correctColor[0] + 150,
  correctColor[1],
  correctColor[2] - 20,
];
//paso el array obtenido a string
const rgbArrayToString = (rgbArray) => {
  return `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
};

codigoRgb.textContent = getRandomRGB();

l1.style.backgroundColor = rgbArrayToString(correctColor);
l2.style.backgroundColor = rgbArrayToString(firstColor);
l3.style.backgroundColor = rgbArrayToString(secondColor);

// -TENGO Q MOVER LOS l1, L2 Y L3 PARA Q NO SE SEPA CUAL ES
// -(si click en el l1 , sumo un acierto(HACER CONTADOR)...)

//el div me sume 1 punto o me quite si es un error (cuando llegue a 3 stop: ganas o pierdes)
// div.addEventListener("click", (event) => {
//   if (event.target !== event.currentTarget) {
//     event.target.textContent = +event.target.textContent + 1;
//   }else
// });

// div.addEventListener("click", () => {
//     alert("WINNER!!");
//   });

//BOTÓN DE stopGame(explicado ja_dia8_events)
