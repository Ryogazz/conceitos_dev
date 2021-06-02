const numeros = [5, 50, 80, 23, 40, 1, 3, 7, 8, 70, 44, 555, 39, 52, 42];

const numerosFiltrados = numeros.filter(valor => valor < 10);
console.log(numerosFiltrados);



const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoasCincoLetras = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasCincoLetras);

const pessoasMaisDeCinquenta = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaisDeCinquenta);

const pessoasTerminaLetraA = pessoas.filter(obj => obj.nome.slice(-1) === 'a');
console.log(pessoasTerminaLetraA);
