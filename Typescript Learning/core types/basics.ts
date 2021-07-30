function add(n1, n2) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

//use command tsc *filename*.ts to run the file.
// this will execute in idex.html file.
//make sure file name written in script in index.html is same as the file name you are executing.
//Now open the .html file outside of IDE(VSCode).

//How to write the above code in TypeScript

function add2(n3: number, n4: number) {
  return n3 + n4;
}

const number3 = 5;
const number4 = 6.2;

const result2 = add2(number3, number4);
console.log(result2);
