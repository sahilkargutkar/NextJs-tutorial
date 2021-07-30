//Any type can be assigned to any arrays whose data types we dont know.
// Also to that data types whose data types could be changed

let arr: any[] = ["John ", 212, true];
arr.push("Smith");
console.log(arr);

//data should be in an array
//any[] takes away all the advantages typescript gives you
//It gives you same experience as vanilla JS
