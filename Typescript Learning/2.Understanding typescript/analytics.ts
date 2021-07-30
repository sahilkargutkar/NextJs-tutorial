const button = document.querySelector("button")!;

button.addEventListener("click", () => {
  console.log("clicked");
});

//why the code runs without giving us an error is because of the exclamation mark

//you can set "noEmitOnError":false
//this will generate js files even if you have an error
//If you set it to true it wont generate js files
