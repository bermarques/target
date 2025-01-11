const isFibonacci = (number) => {
  if (typeof number !== "number" || isNaN(number)) {
    return "Valor deve ser um número.";
  }

  if (number < 0) {
    return `O número ${number} não pertence à sequência fibonacci pois é negativo.`;
  }

  let previous = 0;
  let actual = 1;

  if (number === previous || number === actual) {
    return `O número ${number} pertence à sequência fibonacci.`;
  }

  let next = previous + actual;

  while (next <= number) {
    if (next === number) {
      return `O número ${number} pertence à sequência fibonacci.`;
    }

    previous = actual;
    actual = next;
    next = previous + actual;
  }

  return `O número ${number} não pertence à sequência fibonacci.`;
};

console.log(isFibonacci(21));
