// app.js
const express = require('express'); // O un script simple de Node
const fs = require('fs');

function calcularPromedio(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return suma / notas.length;
}

const calificaciones = [85, 90, 78, 92, 88];
console.log(`El promedio actual es: ${calcularPromedio(calificaciones)}`);
