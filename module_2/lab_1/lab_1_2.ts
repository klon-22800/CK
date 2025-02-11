const str:string = "Я строчка";
console.log(str, typeof str);

const num:number = 10;
console.log(num, typeof num);

const numbers:number[] = [1, 2, 3, 4, 5];
console.log(numbers, typeof numbers);

const user: {name: string; age: number} = { 
    name: "Андрей", 
    age: 20 
};
console.log(user, typeof user);

let undef:undefined = undefined; 
console.log(undef, typeof undef);

let tuple: [string, number] = ["Apple", 10];
console.log(tuple, typeof tuple);