"use strict";
//Contador de aciertos o errores


//variables que llaman a selectores
const circles = document.querySelectorAll(".circle"); //variable que llame a la clase de los circulos
const codigoRgb = document.getElementById("valorRgb"); //variable para mostrar los 3 valores de RGB
const resultado = document.getElementById("resultado"); //variable que llama a los aciertos o errores
const reiniciar = document.getElementById("reset");// variable que reincia el juego una vez que pierdas o ganes
const contadorAciertos = document.getElementById("acierto"); //variables que mostrara los aciertos
const contadorErrores = document.getElementById("error"); //variable que mostrara los errores

let aciertos = 0;
let errores = 0
console.log(errores);


//Random logica
/*1. Random de numero 0-255(256) */
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
  const colorsCircles = Math.floor(Math.random() * 3);
  for (let i = 0; i < circles.length; i++) {
    if (i === colorsCircles) {
      circles[i].style.backgroundColor = codigoRgb.innerHTML
    } else {
      circles[i].style.backgroundColor = valorRandomColor();
    }
  }
  //console.log(colorsCircles())
}
/*5. seleccionar color ganador */
const pickColor = (event) => {
  const colorGanador = event.target; //devuelve el elemento DOM que desencadenó un evento específico, por lo que podemos recuperar cualquier propiedad/atributo que tenga un valor
  if (resultado.innerHTML === 'Ganaste') {
    alerta("cambia color");
  } else if (
    colorGanador.style.backgroundColor = codigoRgb.innerHTML.toLowerCase()
  ) {
    resultado.innerHTML = 'Ganaste';
    aciertos++;
    contadorAciertos.innerHTML = aciertos;
    //se agrega funcion de inicio de juego que da colores y valores nuevos
    startGame();
  } else {
    resultado.innerHTML = 'Incorrecto, prueba de nuevo';
    errores++;
    contadorErrores.innerHTML = errores;
  if (errores === 3) {
      respuesta.innerHTML = 'Lo siento, perdiste';//sepinta html

      alert('perdiste');
    }
  }
}
const clickCircle = () => {
  for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', pickColor);
  }
}

const startGame = () => {
  if (aciertos === 3) {
    resultado.innerHTML = 'Ganaste!';//se pinta en html
    
    alert("ganaste")
  }
  codigoRgb.innerHTML = randomColorRGB().toUpperCase();
  clickCircle();
  printCircle();
  resultado.innerHTML = 'Elige un Color';
}
startGame();