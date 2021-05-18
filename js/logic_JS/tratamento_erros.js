function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw(' x e y precisam ser numeros.');
    }
    return x + y;
}

try{
console.log(soma('n' , 4));
} catch(error){
    //console.log(error);
    console.log('Alguma informação mais amigavel para o usuario')
}

try{
//executa quando nao há erros
}catch (e){
// executa quando há erros
} finally{
// sempre executa
}

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}
try {
console.log(hora);
} catch(e){
    //trata erro
    //console.log(e);
} finally{
    console.log('tenha um dia bom');
}