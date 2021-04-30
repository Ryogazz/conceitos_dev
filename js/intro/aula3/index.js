/*let nome = 'josh';
//or var
let qualquer; // Declaraçao sem uso

//console.log(nome); 
console.log(12345,"wow" );
console.log('Meu nome e', nome,'. Estou aprednedo JavaScript as 16 da tarde.') 
console.log('ola mundo')

const valorUm = 5;
const valorDois = 5;
const valorSoma = valorUm + valorDois;
console.log(valorSoma);
const valorMulti = valorSoma * 3;
console.log(valorMulti);
*/

/*const nome ='Josue';
const sobrenome = 'gomes ribeiro';
const idade = 29;
const peso = 64.5;
const altura = 1.73;
let imc;
imc = peso / (altura * altura)
let anoNascimento;
anoNascimento = (2021 - idade) -1 ;

console.log(`${nome} ${sobrenome}, nascido em: ${anoNascimento}, tem: ${idade} anos e pesa: ${imc}`);

*/

/*let num1 = prompt('Digite um numero');
let num2 = prompt('Digite outro numero');

num1 = Number(num1);
num2 = Number(num2);

//let resultado = num1 + num2;

alert(`o resultado da sua conta e: + ${num1 + num2}`);

*/

/*let varA = 'A'; //b
let varB = 'B'; //c
let varC = 'C'; //a
console.log(varA,varB,varC);

let b = varB;
let c = varC;
let a = varA

varA = b;
varB = c;
varC = a;

console.log(varA,varB,varC);
*/

/*
const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `O seu nome é: ${nome}<br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${nome.indexOf("a")} <br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.slice(-1)}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;
*/

/*const aluno = ['luiz', 'dash', 'silva'];
console.log(aluno);

//funçao
const Raiz = function(n){
    return n ** 0.5;
}
//or
const raiz = n => n **0.5;

console.log(Raiz(9));
console.log(raiz(9));
*/

function cadastro (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    function recebeEventoForm(eveto){
        eveto.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura'); 

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}

cadastro()