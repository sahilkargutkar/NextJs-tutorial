const person = {
  name: "Sahil",
  age: 22,
  hobbies: ["Sports", "Cooking"],
};

console.log(person.hobbies);
//here the typescript will recognize this as string of arrays
//If we write number between the array it will give us an error

let skills: string[];
//skills = ["MongoDb","React",1]; here the skills gave an error

// we can fixed it by giving string as a type of any[]

let skill: any[];
skill = ["MongoDb", "React", 1];

//but this will break ts if used too much

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); //typescript recognizes the array as string so we can use string properties
  //Since map method is available on arrays we cant use it on strings
  //therefore we cant use it here
  //console.log(hobby.map()) this will give you an error
}
