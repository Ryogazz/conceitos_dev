const numeros = [5, 50, 80, 23, 40, 1, 3, 7, 8, 70, 44, 555, 39, 52, 42];

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro); 



const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const apenasNome = pessoas.map(obj => obj.nome);
console.log(apenasNome);

const removeNome = pessoas.map(obj => ({idade: obj.idade}));
console.log(removeNome);

const addId = pessoas.map(function (obj , indice) {
    const newObj = {id: indice ,nome: obj.nome, idade: obj.idade,};
    return newObj;
});
console.log(addId);