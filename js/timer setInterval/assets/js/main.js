function timer() {
    function criandoHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false, timeZone: 'UTC'
        });
    };


    const relogio = document.querySelector('.relogio');

    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criandoHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (event) {
        const elemento = event.target;

        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        };

        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (elemento.classList.contains('resetar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    })

}

timer();