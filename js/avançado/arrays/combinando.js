const numeros = [5, 50, 80, 23, 40, 1, 3, 7, 8, 70, 44, 555, 39, 52, 42];

const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((soma,valor) => soma + valor);

console.log(numerosPares);