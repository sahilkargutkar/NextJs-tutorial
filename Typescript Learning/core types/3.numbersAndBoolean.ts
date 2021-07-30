function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //   console.log(typeof n1);
  //   return n1 + n2;
  const result = n1 + n2; //If we dont calculate numbers seprately the string will get added with the numbers
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);
