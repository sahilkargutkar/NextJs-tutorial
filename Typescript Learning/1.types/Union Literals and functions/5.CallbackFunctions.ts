function add(n1: number, n2: number, n3: (num: number) => void) {
  const result = n1 + n2;
  n3(result);
}
//specifying void above will ignore the result you are trying to provide

add(10, 20, (result) => {
  console.log(result);
});
