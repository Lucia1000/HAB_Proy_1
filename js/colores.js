"use strict";
//Contador de aciertos o errores
let aciertos = 0;
let errores = 0

//variables que llaman a selectores
const circles = document.querySelectorAll(".circle"); //variable que llame a la clase de los circulos
const codigoRgb = document.querySelectorAll("#valorRgb"); //variable para mostrar los 3 valores de RGB
const resultado = document.querySelectorAll("#resultado"); //variable que llama a los aciertos o errores
const reiniciar = document.querySelectorAll("#reset");// variable que reincia el juego una vez que pierdas o ganes
const contadorAciertos = document.querySelectorAll("#acierto"); //variables que mostrara los aciertos
const contadorErrores = document.querySelectorAll("#error"); //variable que mostrara los errores


//Random logica
/*1. Random de numero 0-255 */
const randomNumberRGB = () => {//Cada parámetro (rojo, verde y azul) define la intensidad del color entre 0 y 255.
  return Math.floor(Math.random() * 256);
}
//console.log(randomNumberRGB());


/*2. Random de number 255 de red, green, blue  */
const randomColorRGB = () => {
  const R = randomNumberRGB();
  const G = randomNumberRGB();
  const B = randomNumberRGB();

  return `RGB(${R}, ${G}, ${B})`;//RGB(*, *, *)
}
console.log(randomColorRGB());

/*3.Random del valor cada color RGB-mostrara colores diferentes  */

const valorRandomColor = () => {
  let randomColores = randomColorRGB();
  if (randomColores === codigoRgb.innerHTML) {
    randomColores = randomColorRGB();
  }
  return randomColores;
}
//console.log(valorRandomColor());

/*4. Pintar color a circulos */
const printCircle = () => {

}