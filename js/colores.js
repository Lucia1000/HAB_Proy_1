"use strict";

const codigoRgb = document.querySelector(".color_rgb");
const l1 = document.querySelector("#circulo1");
const l2 = document.querySelector("#circulo2");
const l3 = document.querySelector("#circulo3");

const ul = document.querySelector("ul");
let acierto = document.querySelector(".aciertos");
let error = document.querySelector(".errores");
const resultado = document.querySelector("#resultado");

//Genero numeros aleatorios de 0 a 255 (para el rgb)
const getRandomNum = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

// Genera una cadena rgb aleatoria
const getRandomRGB = () => {
  return [getRandomNum(255), getRandomNum(255), getRandomNum(255)];
};

//Genera colores de los li de colores parecidos
const firstColor = getRandomRGB();

const secondColor = [firstColor[0] - 20, firstColor[1], firstColor[2] + 40];

const thirdColor = [firstColor[0], firstColor[1] + 50, firstColor[2] - 20];

//paso el array obtenido a string
const rgbArrayToString = (rgbArray) => {
  return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
};

//asigno a cada circulo un color parecido al rgb
l1.style.backgroundColor = rgbArrayToString(firstColor);
l2.style.backgroundColor = rgbArrayToString(secondColor);
l3.style.backgroundColor = rgbArrayToString(thirdColor);

//array de 3 numeros, con los colores generados
const array = [firstColor, secondColor, thirdColor];

//el color correcto es (aleatoriamente) uno de los tres colores generados
const colorCorrecto = array[getRandomNum(2)];
// console.log(colorCorrecto);

//El color correcto es igual al codigo rgb
codigoRgb.textContent = rgbArrayToString(colorCorrecto);

// Si click en el correcto +1 a los aciertos, sino +1 en los errores
ul.addEventListener("click", (event) => {
  // console.log(rgbArrayToString(colorCorrecto), event.target.style.backgroundColor);
  if (rgbArrayToString(colorCorrecto) === event.target.style.backgroundColor) {
    acierto.textContent = +acierto.textContent + 1;

    codigoRgb.textContent = getRandomRGB();

    if (+acierto === 3) {
      resultado.textContent = "Ganaste!!!";
    }
  } else {
    error.textContent = +error.textContent + 1;
    codigoRgb.textContent = getRandomRGB();

    if (+error === 3) {
      resultado.textContent = "Perdiste!!";
    }
  }
});

// li.addEventListener("click", (event) => {
//   // console.log(rgbArrayToString(colorCorrecto),event.target.style.backgroundColor );

//   rgbArrayToString(colorCorrecto) === event.target.textContent;
// });

//*5. seleccionar color ganador y se realiza el contador de aciertos y errores*/
// const pickColor = (e) => {
//   const colorCorrecto = e.target; //devuelve el elemento DOM que desencadenó un evento específico, por lo que podemos recuperar cualquier propiedad/atributo que tenga un valor
//   if (resultado.textContent === "Ganaste") {
//     alert("cambia color");
//   } else if (colorCorrecto.style.backgroundColor === codigoRgb.textContent) {
//     resultado.textContent = "Ganaste";
//     aciertos++;
//     acierto.textContent = aciertos;
//     //se agrega funcion de inicio de juego que da colores y valores nuevos
//     startGame();
//   } else {
//     resultado.textContent = "Incorrecto, prueba de nuevo";
//     errores++;
//     error.textContent = errores;
//     console.log(errores);
//     if (errores === 3) {
//       resultado.textContent = "Lo siento, perdiste"; //sepinta html
//       //alert('perdiste');
//     }
//   }
// };

// const startGame = () => {
//   if (+acierto.textContent === 3) {
//     resultado.textContent = "Ganaste!"; //se pinta en html
//     //alert("ganaste")
//   }
//   codigoRgb.textContent = rgbArrayToString(colorCorrecto);

//   resultado.textContent = "Elige un Color";
// };
// startGame();

// const starGame = () => {
//   if (+acierto.textContent === 3) {
//     alert("HAS GANADO!!!");
//   } else (+error.textContent === 3) {
//     alert("PERDISTE. INTÉNTALO OTRA VEZ!!!");
//   }
// };

// starGame();
