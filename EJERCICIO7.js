function esCuadradoMagico(arr) {
    let n = arr.length;
    let suma = arr.reduce((a, b) => a + b, 0);
    let promedio = suma / n;
    let conjuntos = new Set();

    for (let i = 0; i < n; i++) {
        let sumaFila = arr[i].reduce((a, b) => a + b, 0);
        let sumaColumna = 0;
        for (let j = 0; j < n; j++) {
            sumaColumna += arr[j][i];
        }

        if (sumaFila !== promedio || sumaColumna !== promedio) {
            return false;
        }

        let conjunto = arr[i].join(',') + arr[n - 1 - i].join(',');
        if (conjuntos.has(conjunto)) {
            return false;
        }

        conjuntos.add(conjunto);
    }

    return true;
}

let arr = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];
console.log(esCuadradoMagico(arr));