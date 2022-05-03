"use strict";
//variables que llaman a selectores
const circle = document.querySelectorAll(".circle");
const codigoRgb = document.querySelectorAll(".color_rgb");
const colors = randomColor(3);
const selectColor = colors[Math.floor(Math.random() * 3)];
codigoRgb.textContent = selectColor;

const circleCount = 4;


