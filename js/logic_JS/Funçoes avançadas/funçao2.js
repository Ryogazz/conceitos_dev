function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Dash');
console.dir(funcao());

//////////////callback////////////

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}
function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

/*
f1(function (){
    f2(function(){
        f3(function(){
            console.log('Ola mundo');
        });
    });
});
*/

//or
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Ola mundo');
}

// IIFE Immediately invoked function expression
(function () {
    const sobrenome = 'Dash';
    function criarNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criarNome('K'));
    }

    falaNome();
})();


////////////////////factory functions//////////////////////
 function criarPessoa(nome, sobrenome,a, p){
     return{
         nome,
         sobrenome,
         fala(assunto){
             return `${this.nome} está ${assunto}.`;
         },
         alttura: a,
        peso: p,
        imc(){
            const indice = this.peso / (this.alttura ** 2);
            return indice.toFixed(2);
        }
     }
 }

 const p1 = criarPessoa('Dash', 'K', 1.75, 80);
console.log(p1);
 console.log(p1.imc());


 