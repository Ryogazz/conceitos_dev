function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-Br',{
        hour12: false
    });
};

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 5000);

setTimeout(function(){
    console.log('chegamos ao fim apos 5 segundos');
}, 5000);