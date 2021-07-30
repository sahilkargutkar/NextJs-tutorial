//TypeScript allows us to use more than one data type for a variable or a function parameter.
// This is called union type.

// (type1 | type2 | type3 | .. | typeN) you can take as many types as you want

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(15, 20);
console.log(combinedAges);

const combinedNames = combine("Sahil", "kargutkar");
console.log(combinedNames);
