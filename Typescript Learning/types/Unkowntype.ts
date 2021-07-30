//unknown is a different type than any

let userInput: unknown;

userInput = 5;
userInput = "Sahil";

//we can store any values in type unknown

let userName: string;

// userName = userInput;  This will give us an error
//If we declare it as any the error will go away

//unknown can't be assifned to string or any other type

// but we can use it in an if statement like this :-

if (typeof userInput === "string") {
  userInput = userName;
}
