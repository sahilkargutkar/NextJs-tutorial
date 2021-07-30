//Numeric enums are number-based enums i.e. they store string values as numbers.
//Enums can be defined using the keyword enum. Let's say we want to store a set of print media types

//You can also assign values here
enum Role {
  Admin = 20,
  READ_ONLY = "READ_ONLY",
  AUTHOR = 10,
}

const person = {
  name: "Sahil",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.Admin,
};

// You can use it as an identifier and you can use it anywhere in the code

if (person.role === Role.Admin) {
  console.log("is an Admin");
}
