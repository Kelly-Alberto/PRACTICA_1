function productoInterno(a, b) {
   if (a.length !== b.length) {
       return "Error: las listas deben tener la misma longitud";
   }
   
   let resultado = 0;
   for (let i = 0; i < a.length; i++) {
       resultado += a[i] * b[i];
   }
   
   return resultado;
}

let a = [5, 1, 6];
let b = [1, -2, 8];

console.log(productoInterno(a, b)); // Output: 22