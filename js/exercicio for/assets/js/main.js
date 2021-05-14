const elementos = [
    {tag: 'p', texto:'qualquer texto'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'section', texto:'Frase 3'},
    {tag: 'footer', texto:'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let elementoCriado = document.createElement(tag);
    elementoCriado.innerHTML = texto;
    div.appendChild(elementoCriado);
}

container.appendChild(div)

