const numeros = [5, 50, 80, 23, 40, 1, 3, 7, 8, 70, 44, 555, 39, 52, 42];

const total = numeros.reduce(function(acumulador, valor){
    if (valor % 2 !== 0){
        acumulador += valor;
    }

    return acumulador;
}, 0);
console.log(total);



const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce(function(velha,pessoa){
    if (pessoa.idade > velha.idade ) return pessoa;
    return velha;
});

console.log(maisVelha)