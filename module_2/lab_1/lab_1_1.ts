//вар-1 Реализуйте стрелочную функцию, возвращающую строку, составленную (см. конкатенация) из 2х чисел, передаваемыхв качестве параметров.
const concatNumbers = (x: number, y: number) => `${x}${y}`;
let x:number = 12;
let y:number = 11;
console.log(concatNumbers(x, y)); 
