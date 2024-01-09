function countNumbersGreaterThanX(numbers, x) {
    let count = 0;
   
    for (let i = 0; i < numbers.length; i++) {
       if (numbers[i] > x) {
         count++;
       }
    }
   
    return count;
   }
   
   let numbers = [3, 5, 7, 9, 11, 13, 15];
   let x = 9;
   let result = countNumbersGreaterThanX(numbers, x);
   console.log(`Hay ${result} números mayores que ${x} en la lista.`);