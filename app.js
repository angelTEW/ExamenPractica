// app.js
const express = require('express'); // O un script simple de Node
const fs = require('fs');

function calcularPromedio(notas) {
  const notasValidas = notas.filter(nota => nota >= 60);
  const descartadas = notas.length - notasValidas.length;
  
  console.log(`Notas descartadas: ${descartadas}`);
  console.log("Hace falta mas informacion");
  console.log("Fo the love of the money");

  if (notasValidas.length === 0) return 0;

  const suma = notasValidas.reduce((acc, curr) => acc + curr, 0);
  return suma / notasValidas.length;
}

const calificaciones = [85, 90, 78, 92, 88];
console.log(`El promedio actual es: ${calcularPromedio(calificaciones)}`);
