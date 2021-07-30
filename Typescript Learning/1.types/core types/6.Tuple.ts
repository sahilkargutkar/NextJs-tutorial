const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Sahil",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [1, "author"],
};

//TypeScript introduced a new data type called Tuple. Tuple can contain two values of different data types.

person.role.push("admin");
// person.role[1] = 10;                         we can't do this
//person.role = [1,"admin","rakesh"]            or this
console.log(person);
//Here push is an exception which typescript doesnt catches but it ensures that we are not assigning a wrong value
