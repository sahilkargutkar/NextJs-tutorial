//Type alias takes two or more different types and make a custom type to use

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

//type alias can be anything but a keyword

function combine(
  input1: Combinable,
  input2: Combinable,
  //we used combinable instead of number | string
  resultConversion: ConversionDescriptor
  //we can also store literal types in there
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(15, 20, "as-number");
console.log(combinedAges);

const combinedNames = combine("Sahil", "kargutkar", "as-text");
console.log(combinedNames);
