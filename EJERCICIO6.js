// Crear un arreglo de 3x4
let arr = Array.from({length: 12}, (_, i) => i).map((_, i) => arr.slice(i * 4, i * 4 + 4));
console.log(arr);

// Crear un arreglo de 4x4 con un desfase diagonal
let arr2 = Array.from({length: 16}, (_, i) => i).map((_, i) => arr2.slice(i * 4, i * 4 + 4));
console.log(arr2);

// Crear un arreglo de 4x4 con valores de función de múltiplos de 25
let arr3 = Array.from({length: 1000}, (_, i) => i * 25).map((_, i) => arr3.slice(i * 4, i * 4 + 4));
console.log(arr3);

// Crear un arreglo de 3x3 con valores que forman una secuencia cúbica
let arr4 = Array.from({length: 9}, (_, i) => i ** 3);
console.log(arr4);

// Crear un arreglo de 4x4 con valores que forman una secuencia cuadrática
let arr5 = Array.from({length: 12}, (_, i) => i ** 2);
console.log(arr5);