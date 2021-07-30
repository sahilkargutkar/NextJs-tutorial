function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);
