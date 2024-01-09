let numberOfElements = parseInt(prompt("Ingrese la cantidad de datos que desea ingresar:"));
let dataList = [];

for (let i = 0; i < numberOfElements; i++) {
 dataList.push(parseInt(prompt("Ingrese el dato " + (i + 1) + ":")));
}

let sum = 0;
for (let i = 0; i < dataList.length; i++) {
 sum += dataList[i];
}

let average = sum / dataList.length;
let count = 0;

for (let i = 0; i < dataList.length; i++) {
 if (dataList[i] > average) {
    count++;
 }
}

console.log(`Hay ${count} números mayores que el promedio en la lista.`);