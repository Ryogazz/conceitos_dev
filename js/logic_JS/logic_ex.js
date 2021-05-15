//condiçao ternaria
const pontosUsuario = 1000;
const nivelUsuario = pontosUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);

//object date
const data = new Date(0);
console.log(data.toDateString());

//Switch/case
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaSemanaTexto = 'Terça';
            break;
        case 3:
            diaSemanaTexto = 'Quarta';
            break;
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
        case 5:
            diaSemanaTexto = 'Sexta';
            break;
        case 6:
            diaSemanaTexto = 'Sabado';
            break;
        default:
            diaSemanaTexto = '';

    }
    return diaSemanaTexto;
}
let diaSemana = 4;
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemanaTexto);

//desestruturação  
const numeros = [1000, 200, 300, 400, 500];

const [primeiro, segundo, , quarto] = numeros;

console.log(primeiro, segundo, quarto);

//desestruturação objeto
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av brasil',
        numero: 320
    }
};
const { sobrenome: sobrenome } = pessoa
//const {endereco: {rua: r, numero: n}} = pessoa;
//console.log(r , n);
console.log(sobrenome);

//repetiçao
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0;
    console.log(i, par);
}

for (let j = 0; j <= 10; j++) {
    if (j % 2 === 0) {
        console.log(`o numero ${j} e par`)
    }

}

const frutas = ['uva', 'mamao', 'maça', 'abacate'];
for (let fruta in frutas) {
    console.log(frutas[fruta]);
}

console.log('Calculadora');

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

console.log('While');

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

let contador = 1;
while (rand !== 10) {
    rand = random(min, max);
    contador++;
}
console.log(`O while rodou ${contador} vezes ate achado o valor 10`);

do {
    rand = random(min, max);
    if (rand < 9 || rand > 9) {
        console.log(`${rand} ainda nao e 9 rode novamente`);
    }
    else {
        console.log(`O ${rand} foi encontrado fim!`)
    }
} while (rand !== 9);

const numerosv2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numerosv2) {
    if (numero === 2) {
        console.log('pulei o numero 2');
        continue;
    }

    console.log(numero);

    if (numero === 8) {
        console.log('Numero 8 achado saindo do laço');
        break;
    }
}
/////////////////////////////////////////



function maior(x, y) {
    if (x > y) {
        return (console.log(`${x} e maior que ${y}`));
    }
    return (console.log(`${y} e maior que ${x}`));
}

console.log(maior(10, 7))

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1000, 1500));

function fizz(valor) {
    if (typeof valor !== 'number') return valor;
    if (valor % 3 === 0 && valor % 5 === 0) return 'FizzBuzz';
    if (valor % 3 === 0) return 'Fizz';
    if (valor % 5 === 0) return 'Buzz';
    return valor;
}

for (let i = 0; i <=100; i++){
    console.log( i, fizz(i));
}