"use strict";
<<<<<<< HEAD

const codigoRgb = document.querySelector(".color_rgb");
const l1 = document.querySelector("#circulo1");
const l2 = document.querySelector("#circulo2");
const l3 = document.querySelector("#circulo3");
=======
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
>>>>>>> ebc146c43c39d13dbafee63a41be8ff438a074b6

const ul = document.querySelector("ul");
const acierto = document.querySelector(".aciertos");
const error = document.querySelector(".errores");

<<<<<<< HEAD
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
=======
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
  if (randomColores === codigoRgb.textContent) {//textcontent
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
      circles[i].style.backgroundColor = codigoRgb.textContent
    } else {
      circles[i].style.backgroundColor = valorRandomColor();
    }
  }
  //console.log(colorsCircles())
}
/*5. seleccionar color ganador y se realiza el contador de aciertos y errores*/
const pickColor = (e) => {
  const colorGanador = e.target; //devuelve el elemento DOM que desencadenó un evento específico, por lo que podemos recuperar cualquier propiedad/atributo que tenga un valor
  if (resultado.innerHTML === 'Ganaste') {
    alerta("cambia color");
  } else if (
    colorGanador.style.backgroundColor === codigoRgb.innerHTML.toLowerCase()
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
    console.log(errores);
  if (errores === 3) {
      resultado.innerHTML = 'Lo siento, perdiste';//sepinta html

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
>>>>>>> ebc146c43c39d13dbafee63a41be8ff438a074b6
