const factorial = number => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= 1;
  }
  return product;
}


const factorial = number => {
  return number < 2 ? 1 : number * factorial(number - 1)
};