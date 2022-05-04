"use strict";

const codigoRgb = document.querySelector(".color_rgb");
const l1 = document.querySelector("#circulo1");
const l2 = document.querySelector("#circulo2");
const l3 = document.querySelector("#circulo3");

const ul = document.querySelector(".circle");
const acierto = document.querySelector(".aciertos");
const error = document.querySelector(".errores");

//Genero numeros aleatorios de 0 a 255 (para el rgb)
const getRandomNum = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

// Genera una cadena rgb aleatoria
const getRandomRGB = () => {
  return [getRandomNum(255), getRandomNum(255), getRandomNum(255)];
};

//al recargar la página genera colores de los li y un nuevo rgb

const correctColor = getRandomRGB();

const firstColor = [
  correctColor[0] - 80,
  correctColor[1],
  correctColor[2] + 50,
];

const secondColor = [
  correctColor[0],
  correctColor[1] + 50,
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
console.log(l1.nextElementSibling);

//Si click en el l1 , sumo un acierto, si no resto 1 (HACER CONTADOR)...)

// for (let li = 0; li < 3; li++) {
ul.addEventListener("click", () => {
  if (codigoRgb.textContent === l1.style.backgroundColor) {
    acierto.textContent = +acierto.textContent + 1;
  } else {
    error.textContent = +error.textContent + 1;
  }
});

// if (acierto === 3) {
//   alert("GANADOR!!!");
// } else if (error === 3) {
//   alert("PERDISTE. INTÉNTALO OTRA VEZ!!!");
// }
