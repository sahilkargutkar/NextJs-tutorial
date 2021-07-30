//Literal types are the types which are based on core types but you dont have specific version of types
//

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2; // + converts value into its numeric representation
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
// Here Literal Type can be either a float or a number . so in order to get the result we use Literal type of either text or number
const combinedAges = combine(15, 20, "as-number");
console.log(combinedAges);

const combinedNames = combine("Sahil", "kargutkar", "as-text");
console.log(combinedNames);

//Literal Types are useful when used in conjunction with Union Types
