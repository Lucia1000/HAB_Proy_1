"use strict";

const codigoRgb = document.querySelector(".color_rgb");
const l1 = document.querySelector("#circulo1");
const l2 = document.querySelector("#circulo2");
const l3 = document.querySelector("#circulo3");

const ul = document.querySelector("ul");
let acierto = document.querySelector(".aciertos");
let error = document.querySelector(".errores");
const resultado = document.querySelector("#resultado");

let colorCorrecto;

//Genero numeros aleatorios de 0 a 255 (para el rgb)
const getRandomNum = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

// Genera una cadena rgb aleatoria
const getRandomRGB = () => {
  return [getRandomNum(255), getRandomNum(255), getRandomNum(255)];
};

//paso el array obtenido a string
const rgbArrayToString = (rgbArray) => {
  return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
};

const start = () => {
  // Generamos un primer color aleatorio
  const firstColor = getRandomRGB();

  // Generamos dos colores parecidos
  const secondColor = [firstColor[0] - 20, firstColor[1], firstColor[2] + 40];

  const thirdColor = [firstColor[0], firstColor[1] + 50, firstColor[2] - 20];

  //asigno a cada circulo un color parecido al rgb
  l1.style.backgroundColor = rgbArrayToString(firstColor);
  l2.style.backgroundColor = rgbArrayToString(secondColor);
  l3.style.backgroundColor = rgbArrayToString(thirdColor);

  //array de 3 numeros, con los colores generados
  const array = [firstColor, secondColor, thirdColor];

  //el color correcto es (aleatoriamente) uno de los tres colores generados
  colorCorrecto = array[getRandomNum(2)];
  // console.log(colorCorrecto);

  //El color correcto es igual al codigo rgb
  codigoRgb.textContent = rgbArrayToString(colorCorrecto);
};

start();

const clickHandler = (event) => {
  // console.log(rgbArrayToString(colorCorrecto), event.target.style.backgroundColor);
  if (rgbArrayToString(colorCorrecto) === event.target.style.backgroundColor) {
    acierto.textContent = +acierto.textContent + 1;

    if (+acierto.textContent === 3) {
      resultado.textContent = "Ganaste!!!";

      //alert("ganaste")
      Swal.fire({
      icon: 'success',
      title: 'Buen Trabajo!',
      text: 'Te reto una vez más!',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
      '<div class="alert" onClick="document.location.reload(true)">New Game</div>',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    })


      ul.removeEventListener("click", clickHandler);
    } else {
      start();
    }
  } else {
    error.textContent = +error.textContent + 1;

    if (+error.textContent === 3) {
      resultado.textContent = "Perdiste!!";
      
      Swal.fire({
      icon: 'error',
      title: 'Oops...perdiste!',
      text: 'Intentalo de nuevo!',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
      '<div class="alert" onClick="document.location.reload(true)">New Game</div>',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    })

      ul.removeEventListener("click", clickHandler);
    } else {
      start();
    }
  }
};

// Si click en el correcto +1 a los aciertos, sino +1 en los errores
ul.addEventListener("click", clickHandler);

