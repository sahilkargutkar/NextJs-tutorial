// In this file I will show you what strict dos in tsconfig

function sendAnalytics(data: string) {
  console.log(data);
}
//this gives us an error because we need to set a data type to the parameter
//In order to skip that we need to turn "noImplicitAny" to false
sendAnalytics("The data");
