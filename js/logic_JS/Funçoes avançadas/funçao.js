// declaraçao de funçao funçao hoisting
falaOi();

function falaOi() {
    console.log('oie');
}

// Fist-class objects (objetos de primeira classe)
// function expression
const souUmDado = function(){
    console.log('sou um dado.');
}; 
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow fuction');
}
funcaoArrow();

const objt = {
    falar (){
        console.log('Estou falando...');
    }
}

objt.falar();

// argumentos que sustenta todos os argumentos enviados, funciona somente com function.
function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}
funcao(5, 10, 15); 

//podemos pre declarar um valor base para caso nao seja digitado nada.
function soma (a = 0, b = 0){
    console.log(a + b);
}
soma(2,);

function ficha ({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'Dash', sobrenome: 'k', idade: 30};
ficha(obj);

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 20, 30, 40);
conta('-', 20, 30, 40);
conta('/', 20, 30, 40);
conta('*', 20, 30, 40);

console.log('return'); 