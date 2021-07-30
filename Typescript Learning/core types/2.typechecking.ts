//How to check the types in Js vs Ts

function add(n1: number, n2: number) {
  console.log(typeof n1); //Only single line of code is required in Ts
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

//This is how you write in jsavascript

function add2(n3, n4) {
  if (typeof n3 !== "number" && n4 !== "number") {
    throw new Error("incorrect input");
  }

  return n3 + n4;
}

const number3 = "5";
const number4 = 6.2;

const result2 = add2(number3, number4);
console.log(result2);

// The + operator returns the numeric representation of the object.
//  So in this particular case, it would appear to be predicating the if on whether or not d is a non-zero number.
