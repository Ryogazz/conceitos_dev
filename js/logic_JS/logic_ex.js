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

const [primeiro, segundo,  , quarto] = numeros;

console.log(primeiro, segundo, quarto);  

//desestruturação objeto
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço:{
        rua: 'Av brasil',
        numero: 320
    }
};
const {sobrenome: sobrenome} = pessoa
//const {endereco: {rua: r, numero: n}} = pessoa;
//console.log(r , n);
console.log(sobrenome);

//repetiçao
for (let i = 0; i <=5; i++){
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0;
    console.log(i, par);
}

for (let j = 0; j <= 10; j++){
    if (j % 2 === 0){
        console.log(`o numero ${j} e par`)}

}

const frutas = ['uva', 'mamao', 'maça','abacate'];
for(let fruta in frutas){
    console.log(frutas[fruta]);
}