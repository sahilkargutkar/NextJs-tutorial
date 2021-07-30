// we can also assign the function which type we want it to return

//e.g. function add(n1:number,n2:number ): number

function add(n1: number, n2: number) {
  //  Here both the types are number so typescript refers the final output as number
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result :" + num);
}
//the above function return the type as void
//void as you have learned in other programming languages doesn't return anything

printResult(add(5, 10));

//Function Types are types that describe a function

/*
let someKeyword;
someKeyword = add;
someKeyword = 5;
*/

// The above code can be compiled without any error in Typescript
// we need to describe someKeyword as :-

let someKeyword: Function;
someKeyword = add; //It can perform the same functions as add

someKeyword(5, 10);
console.log(someKeyword);

// we can also define a function like this :

let thisKeyword: (a: number, b: number) => number;

thisKeyword = add;

//TypeScript doesn complain since the function return type is number and the inputs are number
