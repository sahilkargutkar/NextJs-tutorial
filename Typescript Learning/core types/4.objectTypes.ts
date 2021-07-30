const person = {
  name: "Sahil",
  age: 22,
};

console.log(person.name);
// Can use the above code for both js and ts

const person2: Object = {
  // Or const person2 :{}= {naem:"Sahil", age:22,}  will give you an error
  name: "Sahil",
  age: 22,
};

//console.log(person2.name); will give you an error if you was too specific

//Also You can write it like this

const person3: {
  name: string;
  age: number;
} = {
  name: "Sahil",
  age: 22,
};
console.log(person3.name);
//This is also possible
//Recommended is the first one
