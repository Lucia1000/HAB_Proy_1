"use strict";

const codigoRgb = document.querySelector(".color_rgb");
const l1 = document.querySelector("#circulo1");
const l2 = document.querySelector("#circulo2");
const l3 = document.querySelector("#circulo3");

const ul = document.querySelector("ul");
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

const firstColor = getRandomRGB();

const secondColor = [firstColor[0] - 80, firstColor[1], firstColor[2] + 50];

const thirdColor = [firstColor[0], firstColor[1] + 50, firstColor[2] - 20];
//paso el array obtenido a string
const rgbArrayToString = (rgbArray) => {
  return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
};

l1.style.backgroundColor = rgbArrayToString(firstColor);
l2.style.backgroundColor = rgbArrayToString(secondColor);
l3.style.backgroundColor = rgbArrayToString(thirdColor);

const array = [firstColor, secondColor, thirdColor];

// -TENGO Q MOVER LOS l1, L2 Y L3 PARA Q NO SE SEPA CUAL ES

const colorCorrecto = array[getRandomNum(2)];
console.log(colorCorrecto);
codigoRgb.textContent = rgbArrayToString(colorCorrecto);

//Si click en el l1 , sumo un acierto, si no resto 1 (HACER CONTADOR)...)

// for (let li = 0; li < 3; li++) {
ul.addEventListener("click", (event) => {
  console.log(
    rgbArrayToString(colorCorrecto),
    event.target.style.backgroundColor
  );
  if (rgbArrayToString(colorCorrecto) === event.target.style.backgroundColor) {
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
