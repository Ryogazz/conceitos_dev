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





