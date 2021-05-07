/*now = new Date;

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            break;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            break;
        case 6:
            diaSemanaTexto = 'Sabado';
            break;
        default:
            diaSemanaTexto = '';

    }
    return diaSemanaTexto;
}
function getMesTexto(mes) {
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = 'Janeiro';
            break;
        case 1:
            mesTexto = 'Fevereiro';
            break;
        case 2:
            mesTexto = 'Março';
            break;
        case 3:
            mesTexto = 'Abril';
            break;
        case 4:
            mesTexto = 'Maio';
            break;
        case 5:
            mesTexto = 'Junho';
            break;
        case 6:
            mesTexto = 'Julho';
            break;
        case 7:
            mesTexto = 'Agosto';
            break;
        case 8:
            mesTexto = 'Setembro';
            break;
        case 9:
            mesTexto = 'Outubro';
            break;
        case 10:
            mesTexto = 'Novembro';
            break;
        case 11:
            mesTexto = 'Dezembro';
            break;
        default:
            diaSemanaTexto = '';
    }
    return mesTexto;
}

function criandoData(now) {
    const diaSemana = getDiaSemanaTexto(now.getDay());
    const mes = getMesTexto(now.getMonth());
    const diaNumero = now.getDate();
    const ano = now.getFullYear();
    const hora = (now.getHours() + ":" + now.getMinutes());
    
    return (`${diaSemana}, ${diaNumero} de ${mes} de ${ano} ${hora}`)
}

const h1 = document.querySelector('.container h1')

h1.innerHTML = criandoData(now);

*/
const h1 = document.querySelector('.container h1')
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'full'});
