//never is used to determine the things never gonna happen

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);

// TypeScript introduced a new type never, which indicates the values that will never occur.
//The never type is used when you are sure that something is never going to occur.
//  For example, you write a function which will not return to its end point or always throws an exception.
//never doesnt have any value
